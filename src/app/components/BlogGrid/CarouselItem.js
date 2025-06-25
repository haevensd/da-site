import React from "react";
import { redirect } from 'next/navigation';

export default function CarouselItem({ imgUrl, imgTitle,id, link ,text}) {
  return (
    <a  target="_blank" style={{paddingTop: '11px', paddingRight: '3px', }} onClick={() => redirect(`/read?id=${id}`)}>

    <div className="carousel-card" style={{position: 'relative', overflow: 'hidden'}}>
      
      <div src={'/play-icon.png'} id="play-icon" style={{position: 'absolute', width: '90%',padding: '0px',paddingTop:'0',top: '20px', height: '70px', overflow:'ellipses', whiteSpace: '', textOverflow: 'ellipsis'}} >
      <h1 style={{fontSize: '24px',color: 'white', minWidth: '100%' }}>{imgTitle}</h1>
      <p style={{color:'white', maxWidth: '80%'}}>{text}</p>
      </div>
      <img src={imgUrl} alt={imgTitle}></img>
    </div>
    </a>
  );
}