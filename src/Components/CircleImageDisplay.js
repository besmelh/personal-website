import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
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
    font-size: 13px;
    position: absolute;
    bottom: 0px;
    top: 138px;
    width: 130px;
    text-align: center;
    color: var(--color-secondary);
    font-family: 'Roboto Condensed', sans-serif;
`
const CutCircle = styled.img `
    width: 200px;
    transform: scale(1.001);
    position: absolute;
`

const OnHoverContent = styled.div`
    position: absolute;
    display: none;
    justify-content: center;
    cursor: pointer;
`


function CircleImageDisplay(props) {

    const navigate = useNavigate();

    const [circleHovered, setCircleHovered] = useState(true);

    const handleRoute = () =>{ 
        navigate(props.href || '/');
    }

    const handleMouseEnter = e => {
        setCircleHovered(false);
    }

    const handleMouseLeave = e => {
        setCircleHovered(true);
    }

    return (

    
      <StyledImageDisplay style={props.style} onClick={handleRoute} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={props.className}>
        {/* <MainImage src={require(`../Images/${props.image}`).default}/> */}
        <MainImage src={props.image}/>
        
        {props.skills &&
            <OnHoverContent style={(circleHovered) ? {display:'none'} : {display:'flex'}}>
                <CutCircle src={require(`../Images/cut-circle-transparent.svg`).default}/>
                <SkillsText>{props.skills}</SkillsText>
            </OnHoverContent>
        }
        
      </StyledImageDisplay>
    );
  }
    
  export default CircleImageDisplay;