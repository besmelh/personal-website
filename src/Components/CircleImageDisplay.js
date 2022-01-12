import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


const StyledImageDisplay = styled.div`
    // width: 100%;
    transition: transform 0.3s;
    display: flex;
    justify-content: center;

    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`;


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

    const {src, iosSrc, poster, alt, modelDimension, ...other} = props;

    return (
    
      <StyledImageDisplay style={other} onClick={handleRoute} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={props.className}>
        <model-viewer
            src={src}
            ios-src={iosSrc}
            poster={iosSrc}
            alt={alt}
            shadow-intensity="0"
            auto-rotate
            ar
            style={{height: modelDimension, width: modelDimension}}
          ></model-viewer>
        
      </StyledImageDisplay>
    );
  }
    
  export default CircleImageDisplay;