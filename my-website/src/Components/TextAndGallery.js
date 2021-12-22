import React from 'react';
import Gallery from './Gallery';
import MyButton from './MyButton';


function TextAndGallery(props) {

    const {title, description, buttonText, buttonHref, images, ...other } = props;

    return (
      <div {...other}>
          <h3>{title}</h3>
          <p>{description}</p>
          <Gallery
            width={600}
            height={200}
            items={images}
            />
            <MyButton href={buttonHref}>{buttonText}</MyButton>
      </div>
    );
  }
  
  export default TextAndGallery;