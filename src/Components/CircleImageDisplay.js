import {React} from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


const StyledImageDisplay = styled.div`
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

    const handleRoute = () =>{ 
        navigate(props.href || '/');
    }


    const {src, iosSrc, poster, alt, modelDimension, ...other} = props;

    return (
    
      <StyledImageDisplay style={other} onClick={handleRoute} className={props.className}>
        <model-viewer
            src={src}
            ios-src={iosSrc}
            poster={poster}
            alt={alt}
            shadow-intensity="0"
            auto-rotate
            style={{height: modelDimension, width: modelDimension}}
            seamless-poster
            ></model-viewer>
        
      </StyledImageDisplay>
    );
  }
    
  export default CircleImageDisplay;