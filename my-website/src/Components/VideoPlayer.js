import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer(props) {

    const {url, ...other } = props;

    return (
        <ReactPlayer 
        {...other}
        url= {url} 
        width="100%" 
        height ="100%"
        className="VideoPlayer"/>
    );
  }
  
  export default VideoPlayer;
      
      
