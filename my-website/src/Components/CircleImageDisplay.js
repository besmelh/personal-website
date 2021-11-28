import React from "react";
import styled from 'styled-components';


const StyledImageDisplay = styled.div`
    width: 200px;
    transition: transform 0.3s;
    border-radius: 100%;
    border: 3px solid white;
    display: flex;
    justify-content: center;
    position: relative;

    &:hover{
        transform: scale(1.03);
    }

`;

const MainImage = styled.img`
    width: 200px;
    margin:0;  
    border-radius: 100%; 
    position: relative;
`


const SkillsText = styled.p `
    color: black;
    font-size: 13px;
    position: absolute;
    bottom: 0px;
    top: 135px;
    width: 130px;
    text-align: center;
`
const CutCircle = styled.img `
    width: 200px;
    transform: scale(1.001);
    position: absolute;
`

const OnHoverContent = styled.div`
    position: absolute;
    display: flex;
    justify-content: center
`


function CircleImageDisplay(props) {
    return (
      <StyledImageDisplay style={props.style}>
        <MainImage src={require(`../Images/${props.image}`).default}/>

        <OnHoverContent>
            <CutCircle src={require(`../Images/cut-circle-transparent.svg`).default}/>
            <SkillsText>{props.skills}</SkillsText>
        </OnHoverContent>
      </StyledImageDisplay>
    );
  }
    
  export default CircleImageDisplay;