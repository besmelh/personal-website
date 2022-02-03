import React from 'react';
// import Gallery from '../Components/Gallery';
import TextAndGallery from '../Components/TextAndGallery';

function Demo() {

    const branding_gallery = [
        {
            itemId: 'tutatain-logo',
            mediaUrl: 'https://i.ibb.co/MDRWq8q/tutatain-logo.webp',
        },
        {
            itemId: 'tutatain-animated-logo',
            mediaUrl: 'https://i.ibb.co/4TsMd6x/tutatain-animated-logo.gif',
        },
        { 
            itemId: 'tutatain-packaging',
            mediaUrl: 'https://i.ibb.co/qMZ9cwf/tutatain-packaging.webp',
        },
        { 
            itemId: 'tutatain-characters',
            mediaUrl: 'https://i.ibb.co/xLV5mBZ/tutatain-character-design.webp',
        },
    ]

  return (
    <div style={{width: "800px", height: "100px"}}>

        <TextAndGallery
            title="Branding"
            description='Tutatain means "two berries" in Arabic. The two berries represent my mother and me since we worked together to establish the business. So I decided to play around with that concept and use it in the branding.'
            images={branding_gallery}
            buttonText="Visit Website"
            buttonHref="https://www.tutatain.com/"
            />

        {/* <Gallery images={branding_gallery}/> */}
    </div>
  );
}

export default Demo;
