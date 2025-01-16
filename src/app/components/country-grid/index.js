'use client'
import { useState } from "react";
import CarouselItem from "./CarouselItem";
import './index.css';
const cardDetails = {
  0: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 1"
  },

  1: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 2"
  },

  2: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 3"
  },

  3: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 4"
  },

  4: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 5"
  },

  5: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 6"
  },

  6: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  7: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  8: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  9: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  10: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  11: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  12: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  13: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  14: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  15: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  16: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  17: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  19: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  20: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  21: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  22: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  69: {
    imgUrl: "/hawaii_cover.jpg",
    link: "/hawaii_cover.jpg",
    title: "Text 7",
  },
  70: {
    imgUrl: "/hawaii_cover.jpg",
    link: "/hawaii_cover.jpg",
    title: "Text 7",
  },
  71: {
    imgUrl: "/hawaii_cover.jpg",
    link: "/hawaii_cover.jpg",
    title: "Text 7",
  },
  72: {
    imgUrl: "/hawaii_cover.jpg",
    link: "/hawaii_cover.jpg",
    title: "Text 7",
  },
  23: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  23: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  24: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  25: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  26: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  27: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  28: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  29: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  30: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  31: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },
  32: {
      imgUrl: "/hawaii_cover.jpg",
      link: "/hawaii_cover.jpg",
      title: "Text 7",
  },

 
}

const CountrySlider = () => {
  const [hover, setHover] = useState(false);
  return (
    <div style={{paddingTop: '0', marginBottom: '100px'}}>
    <div style={{height: '250px', display: 'flex'}}>
    <div className="carousel-container" > 
      <div className="carousel-track" >
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
              link={cardDetails[detailKey].link}
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>
    </div>
    </div>
    </div>
  );
}
export default CountrySlider;