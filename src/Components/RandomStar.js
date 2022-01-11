import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../Hooks/useWindowDimensions';
import Rellax from "rellax";



const Star = styled.div`
    border-radius: 100%;
    background-color: #F7F5FF;
    position:absolute;
`    
    
const RandomStar = (props) => {


    //parallex scrolling
    const rellaxRef = useRef();

    useEffect(() => {
        new Rellax(".starRellax", {
            speed: -10,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });
    
        new Rellax(rellaxRef.current, {
            speed: -10,
            center: false,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: false
        });

        }, []);


    // const { height, width } = useWindowDimensions();
    const minSize = 2;
    const maxSize = 10;
    const minDur = 3;
    const maxDur = 8;
    const minDel = 0.1;
    const maxDel = 2;
    const maxHeight = 45;
    const maxHeightPhone = 30;

    const randHeight = Math.floor(Math.random()*maxHeight);
    const randHeightPhone = Math.floor(Math.random()*maxHeightPhone);
    const randWidth = Math.floor(Math.random()*100);
    const randSize = Math.floor(Math.random()* (maxSize - minSize + 1) + minSize);

    const randAnimDuration = Math.random() * (maxDur - minDur + 1) + minDur;
    const randAnimDelay= Math.random() * (maxDel - minDel + 1) + minDel;

   const StarStyle = useRef({
        height: `${randSize}px`,
        width: `${randSize}px`,
        // position: 'relative',
        top: `${randHeight}%`,
        left: `${randWidth}%`,
        transform: 'translate(-50%, -50%)',
        zindex: '-10',
        animation: `flickerAnimation ${randAnimDuration}s infinite`, 
        animationDelay: `${randAnimDelay}s`
   });

   return (
    // <div>
        <Star style={StarStyle.current} {...props} />
    // </div>
   )
}
    
export default RandomStar;