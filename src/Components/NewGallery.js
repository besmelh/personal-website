import React from "react";
import styled from 'styled-components';

const GalleryContainer = styled.div`
    display: flex; 
    width: 50%;
    background-color: black;
    
    & img{
        width: 90%;
    }

    & .imageDiv{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const sliderWrap = styled.div`
    position: fixed; 
    overflow: hidden;
    width: 500px;
    height: 200px;
`;

const slider = styled.div`
    position: absolute; 
    will-change: transform;
`;

function NewGallery(props) { 

    const {children, ...other} = props;


    let galleryWindows = [];

    for (var i = 0; i < children.length; i++) {
        
        galleryWindows.push(
            <imageDiv>
                {children[i]}
            </imageDiv>
        )
    }

    return (
        <GalleryContainer {...other}>
            <button/>
            <sliderWrap>
                <slider>
                    {galleryWindows}
                </slider>
            </sliderWrap>
            <button/>
        </GalleryContainer>
    );
  }
  
  export default NewGallery;