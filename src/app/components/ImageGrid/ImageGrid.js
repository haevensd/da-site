'use client'
import { useState } from "react";
import CarouselItem from "./CarouselItem";
import './ImageGrid.css';
const cardDetails = {
  
  69: {
    imgUrl: "/yt/yt_int_22.jpg",
    link: "https://youtu.be/0lcsyQcdaUo?si=bFeJp8_y0rFMcKQF",
    title: "Text 7",
  },
  70: {
    imgUrl: "/yt/yt_int_23.jpg",
    link: "https://youtu.be/-cAZiKv-8kw?si=akw3vLx-Yeq7MfsQ",
    title: "Text 7",
  },
  71: {
    imgUrl: "/yt/yt_int_24.jpg",
    link: "https://youtu.be/CAyj8iH3E40?si=MoMRy28OFIUbK4KV",
    title: "Text 7",
  },
  72: {
    imgUrl: "/yt/yt_int_25.jpg",
    link: "https://youtu.be/nVZGxmqr1wk?si=Y6N_6vzrNwscNkFY",
    title: "Text 7",
  },
  23: {
      imgUrl: "/yt/yt_22.jpg",
      link: "https://youtu.be/lOEUiTAVRo8?si=BS4CfKf6YX0QCjgJ",
      title: "Text 7",
  },
  23: {
      imgUrl: "/yt/yt_24.jpg",
      link: "https://youtu.be/8Q3wnXTlmjk?si=P1VeyWs5zq4I4eFo",
      title: "Text 7",
  },
  24: {
      imgUrl: "/yt/yt_25.jpg",
      link: "https://youtu.be/lwxILZxlCeE?si=GQk9rwdWDD6TgwI8",
      title: "Text 7",
  },
  25: {
      imgUrl: "/yt/yt_paris.jpg",
      link: "https://youtu.be/W9BfS7eh6W4?si=dLx-xu9BAVz8uJH",
      title: "Text 7",
  },
  85: {
    imgUrl: "/yt/yt_26.jpg",
    link: "https://youtu.be/KAddfcZPbYg?si=T4qcBPoh9BAbQvNu",
    title: "Text 7",
  },
  26: {
      imgUrl: "/yt/yt_27.jpg",
      link: "https://youtu.be/lmo14Bgs040?si=DfffEaGAk5upl78I",
      title: "Text 7",
  },
  27: {
      imgUrl: "/yt/yt_int_23.jpg",
      link: "https://www.youtube.com/watch?v=-cAZiKv-8kw",
      title: "Text 7",
  },
  29: {
      imgUrl: "/yt/yt_18.jpg",
      link: "https://www.youtube.com/watch?v=9Vd4VZYE43M",
      title: "Text 18",
  },
  28: {
      imgUrl: "/yt/yt_309.jpg",
      link: "https://youtu.be/718W0i2Ul2w?si=o1Hvt3LcnjsxusJ8",
      title: "Text 7",
  },
 

 
}
const cardDetails2 = {
  23: {
    imgUrl: "/yt/yt_24.jpg",
    link: "https://youtu.be/8Q3wnXTlmjk?si=P1VeyWs5zq4I4eFo",
    title: "Text 7",
  },
  


  28: {
    imgUrl: "/yt/yt_toddler.jpg",
    link: "https://youtu.be/W9BfS7eh6W4",
    title: "Text 7",
  },

  23: {
    imgUrl: "/yt/yt_22.jpg",
    link: "https://youtu.be/lOEUiTAVRo8?si=BS4CfKf6YX0QCjgJ",
    title: "Text 7",
  },

  
  27: {
    imgUrl: "/yt/yt_29.jpg",
    link: "https://youtu.be/6keREXPXgfc?si=2l7571_vW179TBwD",
    title: "Text 7",
  },
  24: {
    imgUrl: "/yt/yt_25.jpg",
    link: "https://youtu.be/lwxILZxlCeE?si=GQk9rwdWDD6TgwI8",
    title: "Text 7",
  },
 
  26: {
    imgUrl: "/yt/yt_eze.jpg",
    link: "https://www.youtube.com/watch?v=ZqR2Z7CAlCk",
    title: "Text 7",
  },
  

 
}
const AutoplayCarousel = () => {
  const [hover, setHover] = useState(false);
  return (
    <div style={{backgroundColor: 'white',paddingTop: '55px', paddingBottom: '0px'}}>
      <div style={{ width: '100%'}}>

    <h2 style={{textAlign: 'center',color: 'black',fontSize: '3rem', marginBottom: '55px', fontFamily: "GOTHAM",fontWeight: '700' }}>Checkout My Channel! </h2>
      </div>
    <div style={{height: '465px', display: 'flex'}}>
    <div className="carousel-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> 
      <div className="carousel-track" style={{animationPlayState: hover ? 'paused' : ''}}>
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              link={cardDetails[detailKey].link}
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              link={cardDetails[detailKey].link}
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              link={cardDetails[detailKey].link}
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>

      <div className="carousel-track" style={{animationPlayState: hover ? 'paused' : ''}}>
        {Object.keys(cardDetails2).map((detailKey, index) => {
          return (
            <CarouselItem
              link={cardDetails2[detailKey].link}
              key={index}
              imgUrl={cardDetails2[detailKey].imgUrl}
              imgTitle={cardDetails2[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails2).map((detailKey, index) => {
          return (
            <CarouselItem
              link={cardDetails2[detailKey].link}
              key={index}
              imgUrl={cardDetails2[detailKey].imgUrl}
              imgTitle={cardDetails2[detailKey].title}
            ></CarouselItem>
          );
        })}

      </div>
    </div>
    </div>
    </div>
  );
}
export default AutoplayCarousel;