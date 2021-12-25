import {React, useState} from "react";
import LeftRightContainer from "./LeftRightContainer";
import VideoPlayer from "./VideoPlayer";
import IconAndTitle from "./IconAndTitle";
import MyButton from "./MyButton";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const ButtonsSet = styled.div`

    display: flex;

    & button {
        margin-right: 15px;
    }
`

function DevProjectSection(props) {

    const {largeContainerLeft, image, videoUrl, icon, title, description, buttonIcon, buttonText, buttonHref, buttonIcon2, buttonText2, buttonHref2,children, ...other } = props;
    const [showVideo, setShowVideo] = useState(false);

    return (
        <LeftRightContainer {...other}>

        {!largeContainerLeft && 
            <div className="container-medium">
                <img src={image} alt= {`screenshot of ${title}`}/>
                <VideoPlayer url = {videoUrl} style={showVideo ? {display:"flex"} : {display:"none"}}/> 
            </div>
        }


        <div className="container-small">
           <IconAndTitle width="50px">
            <img src={icon} alt= {`icon of ${title}`}/>
            <h2>{title}</h2>
          </IconAndTitle>

          <p>{description}</p>    
          {children}     


        <ButtonsSet>
            <MyButton 
            {...(buttonHref ? {href: buttonHref} : {onClick : ()=>setShowVideo(!showVideo)})} 
            >
                <Icon icon={buttonIcon || "bi:play-circle"} inline={true} />
                {buttonText || "In Action"}
            </MyButton>

            {buttonText2 && 
            <MyButton 
                {...(buttonHref2 ? {href: buttonHref2} : {onClick : ()=>setShowVideo(!showVideo)})} 
                >
                <Icon icon={buttonIcon2 || "bi:play-circle"} inline={true} />
                {buttonText2 || "In Action"}
            </MyButton>}
        </ButtonsSet>

        </div> 

        {largeContainerLeft && 
            <div className="container-medium">
                <img src={image} alt= {`screenshot of ${title}`}/>
                <VideoPlayer url = {videoUrl} style={showVideo ? {display:"flex"} : {display:"none"}}/> 
            </div>
        }
        </LeftRightContainer>
    );
  }
  
  export default DevProjectSection;
      
      
