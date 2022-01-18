import React from "react";
import styled from 'styled-components';
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

const StyledGallery = styled.div`
    display: flex;
    justify-content: center;

`

function Gallery(props) {
    const {height, width,items, ...other} = props;

    // Add your images here...
    // const items = [

        // { // Image item:
        //     itemId: 'sample-id',
        //     mediaUrl: 'https://i.picsum.photos/id/674/200/300.jpg?hmac=kS3VQkm7AuZdYJGUABZGmnNj_3KtZ6Twgb5Qb9ITssY',
        //     metaData: {
        //             type: 'image',
        //             height: 200,
        //             width: 200,
        //             title: 'sample-title',
        //             description: 'sample-description',
        //             focalPoint: [0, 0],
        //             link: {
        //                     url: 'http://example.com',
        //                     target: '_blank'
        //             },
        //     }
        // },

        // { // Another Image item:
        //         itemId: 'differentItem',
        //         mediaUrl: 'https://i.ibb.co/4TsMd6x/tutatain-animated-logo.gif',
        //         metaData: {
        //                 type: 'image',
        //                 height: 100,
        //                 width: 200,
        //                 title: 'sample-title',
        //                 description: 'sample-description',
        //                 focalPoint: [0, 0],
        //                 link: {
        //                         url: 'http://example.com',
        //                         target: '_blank'
        //                 },
        //         }
        // },
    // ]


    // The options of the gallery (from the playground current state)
    const options = {
    galleryLayout: 4,
    cubeType: 'fit',
    overlayBackground: 'rgba(3,3,106,0.0)',
    itemBorderRadius: 20
};

    // The size of the gallery container. The images will fit themselves in it
    const container = {
    width: width,
    height: height
    };

    // The eventsListener will notify you anytime something has happened in the gallery.
    const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

    // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
    const scrollingElement = window;

    return (
        <StyledGallery>
            <ProGallery
            {...other}
            items={items}
            options={options}
            container={container}
            eventsListener={eventsListener}
            scrollingElement={scrollingElement}
            />
        </StyledGallery>
       
    );
}
  

// Enjoy using your new gallery!
// For more options, visit https://github.com/wix/pro-gallery

export default Gallery;