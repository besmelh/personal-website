import React from "react";
import styled from 'styled-components';
import CircleImageDisplay from './CircleImageDisplay';

const MainText = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;


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

`
const StyledMainPageSection = styled.section`
    display: flex;
    padding: 50px 0;
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
            <CircleImageDisplay
                image = {props.image}
                skills = {props.skills}
                style={leftContainerImage}
            />
        }

        <MainText>
            <h3>{props.title}</h3>
            <h4>{props.duration}</h4>
            <p>{props.summary}</p>
        </MainText>


        {props.allignedLeft === 'false' &&
            // <div className='img-container'
            //     style={rightContainerImage}>
            //     <img src={require(`../Images/${props.image}`).default}/>
            // </div>
            <CircleImageDisplay
                image = {props.image}
                skills = {props.skills}
                style={rightContainerImage}
            />
        }

      </StyledMainPageSection>
    );
  }
  
  export default MainPageSection;