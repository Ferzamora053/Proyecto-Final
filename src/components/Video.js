// Video.js

import React from 'react';
import ReactPlayer from 'react-player';
import "../CSS/video.css";

const Video = ({ videoUrl }) => {
  return (
    <div className="player-wrapper ">
      <ReactPlayer
        className = 'react-player' 
        url={videoUrl}
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

export default Video;
