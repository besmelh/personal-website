import React from "react";
import styled from 'styled-components';

const ImageDisplay = styled.div `


`

const StyledMainPageSection = styled.section`

    display: flex;
    /* justify-content: flex-end; */
    padding: 50px 0;


    & div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    & h3 {
        font-weight:400;
        font-size: 30px;
        margin: 0;
    } 

    & h4 {
        font-weight:200;
        font-size: 25px;
        margin: 0;
    }

    & p{
        width:280px;
        font-weight:100;
        font-size: 15px;
        text-align: justify;
    }

    & img{
        width: 200px;
        border-radius: 100%;
        border: 3px solid white;
        margin:0;
        transition: transform 0.3s;
    }

    & img:hover{
        transform: scale(1.03);
    }
`;


const rightContainer = {
    justifyContent: 'flex-end',
};

const rightContainerImage = {
    marginLeft: '30px',
    
};

const leftContainerImage = {
    marginRight: '30px',
};



function MainPageSection(props) {
    
    return (
        
      <StyledMainPageSection
        style={(props.allignedLeft === 'false') ? rightContainer : null}
      >

        {props.allignedLeft === 'true' &&
            // <div className='img-container'
            //     style={leftContainerImage}>
            //     <img src={require(`../Images/${props.image}`).default}/>
            //     <img src={require(`../Images/cut-circle.svg`).default}></img>
            // </div>

            <ImageDisplay
                imageName = {props.image}
                skills = 'Skill 1, Skill 2, Skill 3'
            />
        }

        <div>
            <h3>{props.title}</h3>
            <h4>{props.duration}</h4>
            <p>{props.summary}</p>
        </div>


        {props.allignedLeft === 'false' &&
            <div className='img-container'
                style={rightContainerImage}>
                <img src={require(`../Images/${props.image}`).default}/>
            </div>
        }

      </StyledMainPageSection>
    );
  }
  
  export default MainPageSection;