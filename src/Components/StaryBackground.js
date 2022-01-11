import React, { useState, useEffect } from 'react';
import RandomStar from './RandomStar';
import useWindowDimensions from '../Hooks/useWindowDimensions';
    
const StaryBackground = () => {
    const { height, width } = useWindowDimensions();

    let numStars = 100;
    console.log("numStars", numStars);
    var stars = [];
    for (var i = 0; i < numStars; i++) {
        stars.push(<RandomStar key={i}/>);
    }
    
    return (
        stars
    );
    

}
    
export default StaryBackground;