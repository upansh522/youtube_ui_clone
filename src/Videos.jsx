import React, { useState } from "react";
import { Avatar } from "@mui/material";
import VideoPlayer from "./VideoPlayer"; // Assuming you have a VideoPlayer component
import "./Videos.css";

const Videos = ({ videoId, title, channel, timestamp, channelimage, views, startSeconds,image,endSecond}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    timeoutId = setTimeout(()=>{
      setIsPlaying(true);
    },500);
    
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setIsPlaying(false);
  };

  return (
    <>
      <div className="video" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isPlaying ? (
          <VideoPlayer videoId={videoId} startSeconds={startSeconds} endSecond={endSecond} />
        ) : (
          <img src={image} alt="" className="video__thumbnail" />
        )}
        <div className="video_info">
          <Avatar
            className="video__avatar"
            alt={channel}
            src={channelimage}
          />
          <div className="video__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} . {timestamp}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
