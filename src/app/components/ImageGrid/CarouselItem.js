import React from "react";

export default function CarouselItem({ imgUrl, imgTitle, showPlay }) {
  return (
    <div className="carousel-card" style={{position: 'relative'}}>
      <img src={'/play-icon.png'} id="play-icon" style={{position: 'absolute', width: '70px', height: '70px'}} ></img>
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
  );
}