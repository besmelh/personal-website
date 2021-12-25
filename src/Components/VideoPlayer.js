import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer(props) {

    const {url,width,height,  ...other } = props;

    return (
        <ReactPlayer 
        {...other}
        url= {url} 
        width={width || "100%"}
        height ={height || "100%"}
        className="VideoPlayer"
        />
    );
  }
  
  export default VideoPlayer;
      
      
