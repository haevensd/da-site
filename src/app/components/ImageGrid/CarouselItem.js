import React from "react";

export default function CarouselItem({ imgUrl, imgTitle, link }) {
  return (
    <a href={link} target="_blank" style={{paddingTop: '11px', paddingRight: '3px', }}>

    <div className="carousel-card" style={{position: 'relative'}}>
      <img src={'/play-icon.png'} id="play-icon" style={{position: 'absolute', width: '70px', height: '70px'}} ></img>
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
    </a>
  );
}