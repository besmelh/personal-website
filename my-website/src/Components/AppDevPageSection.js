import {React, useState} from "react";
import LeftRightContainer from "./LeftRightContainer";
import VideoPlayer from "./VideoPlayer";
import IconAndTitle from "./IconAndTitle";
import MyButton from "./MyButton";
import { Icon } from "@iconify/react";


function AppDevPageSection(props) {

    const {largeContainerLeft, image, videoUrl, icon, title, description, description2, tinytext, buttonIcon, buttonText, buttonHref, ...other } = props;
    const [showVideo, setShowVideo] = useState(false);

    return (
        <LeftRightContainer {...other}>

        {!largeContainerLeft && 
            <div className="container-medium">
                <img src={require(`../Images/${image}`).default} alt= {`screenshot of ${title}`}/>
                <VideoPlayer url = {videoUrl} style={showVideo ? {display:"flex"} : {display:"none"}}/> 
            </div>
        }


        <div className="container-small">
           <IconAndTitle width="50px">
            <img src={require(`../Images/${icon}`).default} alt= {`icon of ${title}`}/>
            <h2>{title}</h2>
          </IconAndTitle>

          <p>{description}</p>    
          <p>{description2}</p>     
          <p className="tinytext">{tinytext}</p>

          <MyButton 
          {...(buttonHref ? {href: buttonHref} : {onClick : ()=>setShowVideo(!showVideo)})} 
          >
            <Icon icon={buttonIcon || "bi:play-circle"} inline={true} />
            {buttonText || "In Action"}
          </MyButton>
          
        </div> 

        {largeContainerLeft && 
            <div className="container-medium">
                <img src={require(`../Images/${image}`).default} alt= {`screenshot of ${title}`}/>
                <VideoPlayer url = {videoUrl} style={showVideo ? {display:"flex"} : {display:"none"}}/> 
            </div>
        }
        </LeftRightContainer>
    );
  }
  
  export default AppDevPageSection;
      
      
