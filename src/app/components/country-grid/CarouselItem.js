import React from "react";

export default function CarouselItem({ imgUrl, imgTitle, link, position }) {
  return (
    <a href={link} target="_blank" style={{paddingTop: '11px', paddingRight: '3px', }}>

    <div className="carousel-card" style={{position: 'relative', backgroundImage: `url(/${imgUrl})`, backgroundPosition: 
position}}>
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
    </a>
  );
}