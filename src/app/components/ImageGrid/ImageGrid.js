'use client'
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState, useRef } from "react";
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
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px', // No margin
        threshold: 0.1 // Trigger when 50% of the element is visible
      }
    );

    const elementsToAnimate = document.querySelectorAll(
      ".typed"
    );

    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    }
  }, []);


  return (
    <div  style={{backgroundColor: 'black',paddingTop: '75px', paddingBottom: ''}}>
      <div style={{ width: '100%', minHeight: '100px', display: 'flex'}}>

    {/* <h2 style={{textAlign: 'center',color: 'white',fontSize: '3rem', marginBottom: '75px', fontFamily: "GOTHAM",fontWeight: '700' }}>CHECKOUT MY CHANNEL </h2> */}
    <div  className='typed' style={{margin: 'auto', marginBottom: '75px'}}>

{isVisible &&    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Checkout My Channel!',
      ]}
      wrapper="span"
      speed={50}
      color={'white'}
      style={{ fontSize: '4em', display: 'inline-block', color: 'white', fontFamily: 'Gotham Book Bold', textAlign: 'center' }}
      className='typed'

      />}
      </div>
      </div>
    <div style={{height: '465px', display: 'flex'}}>
    <div className="carousel-container" onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}> 
      <div className="carousel-track" style={{animationPlayState: hover1 ? 'paused' : ''}}>
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

      <div className="carousel-track"  onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} style={{animationPlayState: hover2 ? 'paused' : ''}}>
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