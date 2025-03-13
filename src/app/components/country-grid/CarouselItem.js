import React from "react";

export default function CarouselItem({ imgUrl, imgTitle, link, position }) {
  return (
    // <a href={link} target="_blank" style={{paddingTop: '11px', paddingRight: '3px', }}>

    <div className="carousel-card" style={{position: 'relative',backgroundRepeat: 'no-repeat',width: 
      '100%', height: '100%', backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPosition: 
position}}>
    </div>
    // </a>
  );
}