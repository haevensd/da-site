import React, { useRef, useEffect } from 'react';
import Player from '@vimeo/player';

const VimeoPlayer = ({ selectedVideo }) => {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
const onVideoEnd = () => {
  console.log('hello')
}
  useEffect(() => {
    if (containerRef.current) {
      const player = new Player(containerRef.current, {
        id: selectedVideo.id,
      });

      player.on('ended', () => {
        onVideoEnd();
      });

      playerRef.current = player;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [selectedVideo.title, onVideoEnd]);

  return <div ref={containerRef}>
    <iframe ref={playerRef} src={`https://player.vimeo.com/video/${selectedVideo.url}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}  allow={"autoplay; fullscreen; picture-in-picture; clipboard-write"}
  style={{backgroundColor: 'black',position:'absolute',top:'0',left:'0',width:'50%',height:'50%'}} title={selectedVideo.title}></iframe>
  <script src="https://player.vimeo.com/api/player.js"></script></div>;
};

export default VimeoPlayer;