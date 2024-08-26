import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoId, startSeconds,endSecond }) => {
  const [player, setPlayer] = useState(null);

  const opts = {
    height: '170',
    width: '300',
    playerVars: {
      start: startSeconds,
      end:endSecond,
      autoplay: 1,
    },
  };

  useEffect(() => {
    if (player) {
      player.playVideo();
    }
  }, [player]);

  const onReady = (event) => {
    setPlayer(event.target);
  };

  return (
    <YouTube videoId={videoId} opts={opts} onReady={onReady} />
  );
};

export default VideoPlayer;
