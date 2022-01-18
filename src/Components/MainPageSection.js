import React from "react";
import styled from 'styled-components';
import CircleImageDisplay from './CircleImageDisplay';


const StyledMainPageSection = styled.section`
    display: flex;
    align-items: center;
    padding: 50px 0;
    z-index:1;

    @media (max-width: 730px) {
        flex-direction: column;
        align-items: center;
    }

`;


const MainText = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: linear-gradient(0deg, rgba(17, 22, 41, 0.6) 0%, rgba(32, 40, 71, 0) 100%);   
    padding: 50px;
    top: -100px;
    border-radius: 4px;
    position:relative;
    width: 300px;
    z-index: -5;


    & h3 {
        font-weight: normal;
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

        &.skills {
            font-size: 13px;
        }
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

const rightContainer = {
    justifyContent: 'flex-end',
};

const rightContainerText = {
    top: "0",
    left: "150px",
    paddingRight: "150px",
    background: "linear-gradient(90deg, rgba(17, 22, 41, 0.6) 0%, rgba(32, 40, 71, 0) 100%)"
};

const leftContainerText = {
    top: "0",
    left: "-150px",
    paddingLeft: "150px",
    background: "linear-gradient(270deg, rgba(17, 22, 41, 0.6) 0%, rgba(32, 40, 71, 0) 100%)"

};


function MainPageSection(props) {

    const {src, iosSrc, poster, alt, href} = props;
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 730;
    const modelDimension = "400px";

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
        className={width < breakpoint ? "phone-view" : null}
      >

        {(props.allignedLeft === true || width < breakpoint) &&
            <CircleImageDisplay
                src = {src}
                ios-src={iosSrc}
                poster={poster}
                alt={alt}  
                href = {href}
                modelDimension = {modelDimension}
            />
        }

        <MainText
         style={(width < breakpoint) ?
                null
                : (props.allignedLeft === true) ? leftContainerText : rightContainerText
            }
        >
            <h3>{props.title}</h3>
            <h4>{props.duration}</h4>
            <p>{props.summary}</p>
            <p className="skills">{props.skills}</p>
        </MainText>


        {(props.allignedLeft === false && width > breakpoint) &&
            <CircleImageDisplay
            src = {src}
            ios-src={iosSrc}
            poster={poster}
            alt={alt}  
            href = {href}
            modelDimension = {modelDimension}
            />
        }

      </StyledMainPageSection>
    );
  }
  
  export default MainPageSection;