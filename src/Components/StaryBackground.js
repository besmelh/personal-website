import React, { useState, useEffect } from 'react';
import RandomStar from './RandomStar';

    
const StaryBackground = (props) => {

    let numStars = 200;
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