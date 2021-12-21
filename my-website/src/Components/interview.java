/*
verbal questions: they asked me 3 questions, where they showed me
functions and told me say what they're time and space complexity was,
and how they could be improved. They weren't too bad.
*/


/*

QUESTION 1:

I was given a soduku nxn 2d array, and we should return true or false if it's an accurate soduko
which is when all rows and all columns contain uniques numbers

restrictions: elements will be between 1...n

[[1,2,3],
[2,3,1],
[3,1,2]] -> true

[[1,2,3],
[1,2,3],
[1,2, 3]] -> false

[[1,2,3],
[2,3,1],
[3,1,2]] -> true

*/


/*

QUESTION 2:

A nonogram is a logic puzzle, similar to a crossword, in which the player is given a blank grid and has to color it according to some instructions. Specifically, each cell can be either black or white, which we will represent as 'B' for black and 'W' for white.

+------------+
| W  W  W  W |
| B  W  W  W |
| B  W  B  B |
| W  W  B  W |
| B  B  W  W |
+------------+

For each row and column, the instructions give the lengths of contiguous runs of black ('B') cells. For example, the instructions for one row of [ 2, 1 ] indicate that there must be a run of two black cells, followed later by another run of one black cell, and the rest of the row filled with white cells.

These are valid solutions: [ W, B, B, W, B ] and [ B, B, W, W, B ] and also [ B, B, W, B, W ]
This is not valid: [ W, B, W, B, B ] since the runs are not in the correct order.
This is not valid: [ W, B, B, B, W ] since the two runs of Bs are not separated by Ws.

Your job is to write a function to validate a possible solution against a set of instructions. Given a 2D matrix representing a player's solution; and instructions for each row along with additional instructions for each column; return True or False according to whether both sets of instructions match.

Example instructions #1

matrix1 = [[ W, W, W, W ],
           [ B, W, W, W ],
           [ B, W, B, B ],
           [ W, W, B, W ],
           [ B, B, W, W ]]
rows1_1    =  [], [1], [1,2], [1], [2]
columns1_1 =  [2,1], [1], [2], [1]
validateNonogram(matrix1, rows1_1, columns1_1) => True

Example solution matrix:
matrix1 ->
                                   row
                +------------+     instructions
                | W  W  W  W | <-- []
                | B  W  W  W | <-- [1]
                | B  W  B  B | <-- [1,2]
                | W  W  B  W | <-- [1]
                | B  B  W  W | <-- [2]
                +------------+
                  ^  ^  ^  ^
                  |  |  |  |
  column       [2,1] | [2] |
  instructions      [1]   [1]
       

Example instructions #2

(same matrix as above)
rows1_2    =  [], [], [1], [1], [1,1]
columns1_2 =  [2], [1], [2], [1]
validateNonogram(matrix1, rows1_2, columns1_2) => False

The second and third rows and the first column do not match their respective instructions.

Example instructions #3

(same matrix as above)
rows1_3    = [], [1], [3], [1], [2]
columns1_3 = [3], [1], [2], [1]
validateNonogram(matrix1, rows1_3, columns1_3) => False

The third row and the first column do not match their respective instructions.

Example instructions #4

(same matrix as above)
rows1_4    =  [], [1,1], [1,2], [1], [2]
columns1_4 =  [2,1], [1], [2], [1]
validateNonogram(matrix1, rows1_4, columns1_4) => False

The second row and the first column do not match their respective instructions


Example instructions #5

matrix2 = [
 [ W, W ],
 [ B, B ],
 [ B, B ],
 [ W, B ]
]
rows2_1    = [], [2], [2], [1]
columns2_1 = [1, 1], [3]
validateNonogram(matrix2, rows2_1, columns2_1) => False

The black cells in the first column are not separated by white cells.

Example instructions #6

(same matrix as above)
rows2_2    = [], [2], [2], [1]
columns2_2 = [3], [3]
validateNonogram(matrix2, rows2_2, columns2_2) => False

The first column has the wrong number of black cells.

Example instructions #7

(same matrix as above)
rows2_3    = [], [], [], []
columns2_3 = [], []
validateNonogram(matrix2, rows2_3, columns2_3) => False

All of the instructions are empty

n: number of rows in the matrix
m: number of columns in the matrix


*/
import java.io.*;
import java.util.*;

public class Solution {
  public static void main(String[] argv) {
    char[][] matrix1 = {
      {'W','W','W','W'},
      {'B','W','W','W'},
      {'B','W','B','B'},
      {'W','W','B','W'},
      {'B','B','W','W'}};

    int[][] rows1_1 = {{},{1},{1,2},{1},{2}};
    int[][] columns1_1 = {{2,1},{1},{2},{1}};

    int[][] rows1_2 = {{},{},{1},{1},{1,1}};
    int[][] columns1_2 = {{2},{1},{2},{1}};

    int[][] rows1_3 = {{},{1},{3},{1},{2}};
    int[][] columns1_3 = {{3},{1},{2},{1}};

    int[][] rows1_4 = {{},{1,1},{1,2},{1},{2}};
    int[][] columns1_4 = {{2,1},{1},{2},{1}};

    char[][] matrix2 = {
      {'W','W'},
      {'B','B'},
      {'B','B'},
      {'W','B'}};

    int[][] rows2_1 = {{},{2},{2},{1}};
    int[][] columns2_1 = {{1,1},{3}};

    int[][] rows2_2 = {{},{2},{2},{1}};
    int[][] columns2_2 = {{3},{3}};

    int[][] rows2_3 = {{},{},{},{}};
    int[][] columns2_3 = {{},{}};

q2(matrix1, rows1_1,columns1_1);

  }
  
  
   public static boolean q2(char[][] grid, int[][] rows, int[][] columns){
     
     ArrayList<ArrayList<Integer>> newrows = new ArrayList<ArrayList<Integer>>();
     ArrayList<ArrayList<Integer>> newcols = new ArrayList<ArrayList<Integer>>();

     //rows
     for (int i = 0; i < grid.length; i++){
       ArrayList<Integer> thisRow = new ArrayList<Integer>();
       int black = 0;
       
       for (int j = 0; j < grid[i].length; j++){
         
         char element = grid[i][j];
         if (element == 'B'){
              black++;
          } 
         
         if (element == 'W' || j == grid[i].length){
           thisRow.add(black);
           black=0;
         }
       }
       
       newrows.add(thisRow);
     }
     
          //cols
     for (int i = 0; i < grid.length; i++){
       ArrayList<Integer> thisRow = new ArrayList<Integer>();
       int black = 0;
       
       for (int j = 0; j < grid[i].length; j++){
         
         char element = grid[j][i];
         if (element == 'B'){
              black++;
          } 
         
         if (element == 'W' || i == grid[j].length){
           thisRow.add(black);
           black=0;
         }
       }
       
       newcols.add(thisRow);
     }
     
     System.out.println("rows: " + newrows);
          System.out.println("cols: " + newcols);

     return false;
   }
  
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
  public static boolean sudoku(int[][] grid){
    
    int n = grid.length;
    
//         check rows
          for (int i = 0; i < grid.length; i++){
            int[] rowCheck = new int[grid[0].length];

            for (int j = 0; j < grid[i].length; j++ ){
              int element = grid[i][j];

              if (element > n || element <= 0){
                return false;
              }
              
              rowCheck[element - 1] = 1;   
            }
            
            if (arrContains(rowCheck, 0)){
              return false;
            }
            
          }
    
    
    //         check columns
          for (int i = 0; i < grid.length; i++){
            int[] rowCheck = new int[grid[0].length];
            
            for (int j = 0; j < grid[i].length; j++ ){
              int element = grid[j][i];
              if (element > n || element <= 0){
                return false;
              }

              rowCheck[element - 1] = 1;            
            }
            
            

            if (arrContains(rowCheck, 0)){
              return false;
            }
            
          }
    
    return true;
  }
  
  
  public static boolean arrContains(int[] arr, int a){
    for (int i = 0; i < arr.length; i++){
      if (arr[i] == a){
        return true;
      }
    }
    
    return false;
      
  }
    
  
}

