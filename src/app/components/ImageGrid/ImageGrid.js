'use client'
import { useState } from "react";
import CarouselItem from "./CarouselItem";
import './ImageGrid.css';
const cardDetails = {
  0: {
      imgUrl: "/yt/blind_yt_thumbnail.jpg",
      title: "Text 1"
  },

  1: {
      imgUrl: "/yt/ignite_yt_thumbnail.jpg",
      title: "Text 2"
  },

  2: {
      imgUrl: "/yt/my_story_yt_thumbnail.jpg",
      title: "Text 3"
  },

  3: {
      imgUrl: "/yt/relax_your_body_yt_thumbnail.jpg",
      title: "Text 4"
  },

  4: {
      imgUrl: "/yt/stop_caring_yt_thumbnail.jpg",
      title: "Text 5"
  },

  5: {
      imgUrl: "/yt/what_to_do_with_your_life_yt_thumbnail.jpg",
      title: "Text 6"
  },

  6: {
      imgUrl: "/yt/yt_5.jpg",
      title: "Text 7",
  },
  7: {
      imgUrl: "/yt/yt_6.jpg",
      title: "Text 7",
  },
  8: {
      imgUrl: "/yt/yt_7.jpg",
      title: "Text 7",
  },
  9: {
      imgUrl: "/yt/yt_8.jpg",
      title: "Text 7",
  },
  10: {
      imgUrl: "/yt/yt_9.jpg",
      title: "Text 7",
  },
  11: {
      imgUrl: "/yt/yt_10.jpg",
      title: "Text 7",
  },
  12: {
      imgUrl: "/yt/yt_11.jpg",
      title: "Text 7",
  },
  13: {
      imgUrl: "/yt/yt_12.jpg",
      title: "Text 7",
  },
  14: {
      imgUrl: "/yt/yt_13.jpg",
      title: "Text 7",
  },
  15: {
      imgUrl: "/yt/yt_14.jpg",
      title: "Text 7",
  },
  16: {
      imgUrl: "/yt/yt_15.jpg",
      title: "Text 7",
  },
  17: {
      imgUrl: "/yt/yt_16.jpg",
      title: "Text 7",
  },
  18: {
      imgUrl: "/yt/yt_17.jpg",
      title: "Text 7",
  },
  19: {
      imgUrl: "/yt/yt_18.jpg",
      title: "Text 7",
  },
  20: {
      imgUrl: "/yt/yt_19.jpg",
      title: "Text 7",
  },
  21: {
      imgUrl: "/yt/yt_20.jpg",
      title: "Text 7",
  },
  22: {
      imgUrl: "/yt/yt_21.jpg",
      title: "Text 7",
  },
  23: {
      imgUrl: "/yt/yt_22.jpg",
      title: "Text 7",
  },
  23: {
      imgUrl: "/yt/yt_24.jpg",
      title: "Text 7",
  },
  24: {
      imgUrl: "/yt/yt_25.jpg",
      title: "Text 7",
  },
  25: {
      imgUrl: "/yt/yt_26.jpg",
      title: "Text 7",
  },
  26: {
      imgUrl: "/yt/yt_27.jpg",
      title: "Text 7",
  },
  27: {
      imgUrl: "/yt/yt_29.jpg",
      title: "Text 7",
  },
  28: {
      imgUrl: "/yt/yt_309.jpg",
      title: "Text 7",
  },
  29: {
      imgUrl: "/yt/yt_thumbail_1.jpg",
      title: "Text 7",
  },
  30: {
      imgUrl: "/yt/yt_thumbail_2.jpg",
      title: "Text 7",
  },
  31: {
      imgUrl: "/yt/yt_thumbnail_3.jpg",
      title: "Text 7",
  },
  32: {
      imgUrl: "/yt/yt_thumbnail_4.jpg",
      title: "Text 7",
  },

 
}
const cardDetails2 = {
  23: {
    imgUrl: "/yt/yt_24.jpg",
    title: "Text 7",
  },
  
  6: {
    imgUrl: "/yt/yt_5.jpg",
    title: "Text 7",
  },
  32: {
    imgUrl: "/yt/yt_thumbnail_4.jpg",
    title: "Text 7",
  },
  28: {
    imgUrl: "/yt/yt_309.jpg",
    title: "Text 7",
  },
  25: {
    imgUrl: "/yt/yt_26.jpg",
    title: "Text 7",
  },
  23: {
    imgUrl: "/yt/yt_22.jpg",
    title: "Text 7",
  },
  1: {
    imgUrl: "/yt/ignite_yt_thumbnail.jpg",
    title: "Text 2"
  },
  5: {
    imgUrl: "/yt/what_to_do_with_your_life_yt_thumbnail.jpg",
    title: "Text 6"
  },
  
  8: {
    imgUrl: "/yt/yt_7.jpg",
    title: "Text 7",
  },
  9: {
    imgUrl: "/yt/yt_8.jpg",
    title: "Text 7",
  },
  10: {
    imgUrl: "/yt/yt_9.jpg",
    title: "Text 7",
  },
  11: {
    imgUrl: "/yt/yt_10.jpg",
    title: "Text 7",
  },
  27: {
    imgUrl: "/yt/yt_29.jpg",
    title: "Text 7",
  },
  24: {
    imgUrl: "/yt/yt_25.jpg",
    title: "Text 7",
  },
  12: {
    imgUrl: "/yt/yt_11.jpg",
    title: "Text 7",
  },
  13: {
    imgUrl: "/yt/yt_12.jpg",
    title: "Text 7",
  },
  14: {
    imgUrl: "/yt/yt_13.jpg",
    title: "Text 7",
  },
  26: {
    imgUrl: "/yt/yt_27.jpg",
    title: "Text 7",
  },
  30: {
    imgUrl: "/yt/yt_thumbail_2.jpg",
    title: "Text 7",
  },
  15: {
    imgUrl: "/yt/yt_14.jpg",
    title: "Text 7",
  },
  
  4: {
    imgUrl: "/yt/stop_caring_yt_thumbnail.jpg",
    title: "Text 5"
  },
  
  16: {
    imgUrl: "/yt/yt_15.jpg",
    title: "Text 7",
  },
  17: {
    imgUrl: "/yt/yt_16.jpg",
    title: "Text 7",
  },
  2: {
    imgUrl: "/yt/my_story_yt_thumbnail.jpg",
    title: "Text 3"
  },
  
  18: {
    imgUrl: "/yt/yt_17.jpg",
    title: "Text 7",
  },
  31: {
    imgUrl: "/yt/yt_thumbnail_3.jpg",
    title: "Text 7",
  },
  7: {
    imgUrl: "/yt/yt_6.jpg",
    title: "Text 7",
  },
  19: {
    imgUrl: "/yt/yt_18.jpg",
    title: "Text 7",
  },
  20: {
    imgUrl: "/yt/yt_19.jpg",
    title: "Text 7",
  },
  29: {
    imgUrl: "/yt/yt_thumbail_1.jpg",
    title: "Text 7",
  },
  21: {
    imgUrl: "/yt/yt_20.jpg",
    title: "Text 7",
  },
  3: {
    imgUrl: "/yt/relax_your_body_yt_thumbnail.jpg",
    title: "Text 4"
  },
  
  22: {
    imgUrl: "/yt/yt_21.jpg",
    title: "Text 7",
  },
  
  0: {
      imgUrl: "/yt/blind_yt_thumbnail.jpg",
      title: "Text 1"
  },
 
}
const AutoplayCarousel = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
    <h2 style={{textAlign: 'center',color: 'white',fontSize: '3rem', marginBottom: '3rem', fontFamily: "'Open Sans',Helvetica,Arial,Lucida,sans-serif"}}>Take your next step to greatness</h2>
    <div style={{height: '500px', display: 'flex'}}>
    <div className="carousel-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> 
      <div className="carousel-track" style={{animationPlayState: hover ? 'paused' : ''}}>
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
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
              key={index}
              imgUrl={cardDetails2[detailKey].imgUrl}
              imgTitle={cardDetails2[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails2).map((detailKey, index) => {
          return (
            <CarouselItem
              key={index}
              imgUrl={cardDetails2[detailKey].imgUrl}
              imgTitle={cardDetails2[detailKey].title}
            ></CarouselItem>
          );
        })}

      </div>
    </div>
    </div>
    </>
  );
}
export default AutoplayCarousel;