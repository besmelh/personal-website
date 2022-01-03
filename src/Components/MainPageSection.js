import React from "react";
import styled from 'styled-components';
import CircleImageDisplay from './CircleImageDisplay';

const MainText = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width:250px;


    & h3 {
        font-weight:400;
        font-size: 30px;
        margin: 0;
    } 

    & h4 {
        font-weight:200;
        font-size: 25px;
        margin: 0;
    }

    & p{
        font-weight:100;
        font-size: 15px;
        text-align: justify;
    }

    @media (max-width: 730px) {
        margin-top: 10%;
        align-items: center;
        text-align: center;

        & h4 {
            font-weight:200;
            font-size: 25px;
            margin-top: 3%;
        }

        & p{
            width:250px;
            text-align: center;
        }
    }

`
const StyledMainPageSection = styled.section`
    display: flex;
    padding: 50px 0;

    & .rightContainerImage{
        margin-left: 30px;
    }

    & .leftContainerImage{
        margin-right: 30px;
    }

    @media (max-width: 730px) {
        flex-direction: column;
        align-items: center;

        & .rightContainerImage, .leftContainerImage{
            margin: 0;
        }

    }

`;


const rightContainer = {
    justifyContent: 'flex-end',
};

// const rightContainerImage = {
//     marginLeft: '30px',
// };

// const leftContainerImage = {
//     marginRight: '30px',
// };



function MainPageSection(props) {

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
        
      <StyledMainPageSection
        style={(props.allignedLeft === false) ? rightContainer : null}
      >

        {(props.allignedLeft === true || width < breakpoint) &&
            // <CircleImageDisplay
            //     image = {props.image}
            //     skills = {props.skills}
            //     href = {props.href}
            //     className="leftContainerImage"
            // />
            <model-viewer
            src="models/tutatain-planet.glb"
            ios-src=""
            poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
            alt="A 3D model of an astronaut"
            shadow-intensity="1"
            // camera-controls
            auto-rotate
            ar
            style={{height: "500px", width: "500px"}}
          ></model-viewer>
        }

        <MainText>
            <h3>{props.title}</h3>
            <h4>{props.duration}</h4>
            <p>{props.summary}</p>
        </MainText>


        {(props.allignedLeft === false && width > breakpoint) &&
            <CircleImageDisplay
                image = {props.image}
                skills = {props.skills}
                href = {props.href}
                className="rightContainerImage"
            />
        }

      </StyledMainPageSection>
    );
  }
  
  export default MainPageSection;