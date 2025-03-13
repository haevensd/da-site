'use client'
import { useState } from "react";
import CarouselItem from "./CarouselItem";
import './index.css';
const cardDetails = {

  1: {
      imgUrl: "/slider1.jpg",
            position: '',
      link: "/slider1.jpg",
      title: "Text 2"
  },

  2: {
      imgUrl: "/slider2.jpg",
            position: '',
      link: "/slider2.jpg",
      title: "Text 3"
  },

  3: {
      imgUrl: "/slider3.jpg",
            position: '10% 0%',
      link: "/slider3.jpg",
      title: "Text 4"
  },

  4: {
      imgUrl: "/slider4.jpg",
            position: '',
      link: "/slider4.jpg",
      title: "Text 5"
  },

  5: {
      imgUrl: "/slider5.jpg",
            position: '',
      link: "/slider5.jpg",
      title: "Text 6"
  },

  6: {
      imgUrl: "/slider6.jpg",
            position: '',
      link: "/slider6.jpg",
      title: "Text 7",
  },
  7: {
      imgUrl: "/slider7.jpg",
            position: '',
      link: "/slider7.jpg",
      title: "Text 7",
  },
  8: {
      imgUrl: "/slider8.jpg",
            position: '',
      link: "/slider8.jpg",
      title: "Text 7",
  },
  9: {
      imgUrl: "/slider9.jpg",
            position: '',
      link: "/slider9.jpg",
      title: "Text 7",
  },
  10: {
      imgUrl: "/slider10.jpg",
            position: '',
      link: "/slider10.jpg",
      title: "Text 7",
  },
  11: {
      imgUrl: "/slider11.jpg",
            position: '',
      link: "/slider11.jpg",
      title: "Text 7",
  },
  12: {
      imgUrl: "/slider12.jpg",
            position: '',
      link: "/slider12.jpg",
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
              position={cardDetails[detailKey].position}
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