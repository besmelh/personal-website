import React from "react";
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel'


// const GalleryContainer = styled.div`
//     display: flex; 
//     width: 50%;
//     background-color: black;
// `;

// const ImageDiv = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
    
//     & img{
//         width: 90%;
//     }
// `;

const StyledCarousel = styled(Carousel)`

    & .rec-swipable{
        align-items: center;
    }

    & .rec-arrow{
        color: white;
        background: linear-gradient(180deg, rgba(204, 188, 255, 0.4) 0%, rgba(58, 58, 58, 0.17) 100%);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    & .rec-arrow:hover{
        background-color: var(--color-secondary-dark);
    }

    & .rec-dot {
        background-color: var(--color-secondary-dark);
    }

    & .rec-dot:hover, & .rec-dot_active {
        background-color: rgb(155, 142, 199);
        box-shadow: 0 0 1px 1px rgb(180, 167, 221);
    }
`

const Item = styled.div`
    padding: 10px;
    /* background-color: purple; */
    display: flex;
    align-items: center;
    justify-content: center;

    & img{
        width: 90%;
    }
`;



function Gallery(props) { 

    const {images, children, ...other} = props;

    let galleryWindows = [];
    for (var i = 0; i < images.length; i++) {
        
        galleryWindows.push(
            <Item>
                <img src={images[i].mediaUrl} alt={images[i].itemId}/>
            </Item>
        )
    }

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 730;

    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <StyledCarousel itemsToShow={width < breakpoint ? 1 : 3} {...other}>
            {galleryWindows.map(item =>(
                item
            ))}
        </StyledCarousel>
    );
  }
  
  export default Gallery;