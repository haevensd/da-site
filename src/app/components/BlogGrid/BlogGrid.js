'use client'
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState, useRef } from "react";
import CarouselItem from "./CarouselItem";
import './BlogGrid.css';
import { redirect } from 'next/navigation';

const cardDetails = 
  [
    {
        id: 8,
        text: 'In this module we learn...',
        title: 'The First Thing You Should Do in Network Marketing',
        imgUrl: '/yt/yt_16.jpg',
  },
    
    {
        id: 4,
        text: 'In this episode we go through a brainstorming session to help you identify the problems you would like to solve in the world…',
        title: '3 Steps to Cure Negative Thinking',
        imgUrl: '/yt/ng.jpg',
  },
    {
        id: 6,
        text: 'In this episode I explain the best way to stay connected with me so I can help serve you…',
        title: 'How to Stay Connected',
        imgUrl: '/yt/billion.jpg',
  },
    {
        id: 5,
        text: 'In this episode I guide you through a simple meditation to immediately relax your whole body…',
        title: 'Relax Your Body in 30 Seconds',
        imgUrl: '/yt/relax_your_body_yt_thumbnail.jpg',
  },
    {
        id: 1,
        text: 'In this episode we are breaking down how to dominate the compeition in your space so you can really step out…',
        title: 'How to Dominate Your Competition',
        imgUrl: '/yt/dominate.jpg',
  },

    {
        id: 2,
        text: 'How do you know if you really deserve the success you aspire to have? In this episode we break down…',
        title: 'Are You Qualified for Success?',
        imgUrl: '/yt/yt_thumbail_1.jpg',
  },

    {
        id: 3,
        text: 'In this episode I break down my story regarding how I was able to change my self image to get what I wanted…',
        title: 'My Story',
        imgUrl: '/yt/my_story_yt_thumbnail.jpg',
  },
]
 
const cardDetails2 =
  [
    {
      imgUrl: '/yt/ng.jpg',
      title: '3 Steps to Cure Negative Thinking',
      text: 'In this episode we go through a brainstorming session to help you identify the problems you would like to solve in the world…',
      id: 4
  },
  {
    imgUrl: '/yt/relax_your_body_yt_thumbnail.jpg',
    title: 'Relax Your Body in 30 Seconds',
    text: 'In this episode I guide you through a simple meditation to immediately relax your whole body…',
    id: 5
  },
  {
    imgUrl: '/yt/billion.jpg',
          title: 'How to Stay Connected',
          text: 'In this episode I explain the best way to stay connected with me so I can help serve you…',
          id: 6
      },
  {
        imgUrl: '/yt/truth.jpg',
        title: 'The Truth About Money',
        text: 'In this episode we dive into the truth regarding how we perceive money…',
        id: 7
      },
      {
          imgUrl: '/yt/my_story_yt_thumbnail.jpg',
          title: 'My Story',
          text: 'In this episode I break down my story regarding how I was able to change my self image to get what I wanted…',
          id: 3
      },
      
    {
        imgUrl: '/yt/yt_16.jpg',
        title: 'The First Thing You Should Do in Network Marketing',
        text: 'In this module we learn...',
        id: 8
      },
      
];

 
const AutoplayCarousel = () => {
  const [hover, setHover] = useState(false);
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
    <div  style={{}} className='Blog'>
     
    <div style={{height: '465px', display: 'flex'}}>
    <div className="carousel-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> 
      <div className="carousel-track" style={{animationPlayState: hover ? 'paused' : ''}}>
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
            text={cardDetails[detailKey].text}
              link={'cardDetails[detailKey].link' }
              key={index}
              id={cardDetails[detailKey].id}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
            text={cardDetails[detailKey].text}
              link={'cardDetails[detailKey].link' }
              key={index}
              id={cardDetails[detailKey].id}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
            text={cardDetails[detailKey].text}
              link={'cardDetails[detailKey].link' }
              key={index}
              id={cardDetails[detailKey].id}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>

      <div className="carousel-track"  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{animationPlayState: hover ? 'paused' : ''}}>
        {Object.keys(cardDetails2).map((detailKey, index) => {
          return (
            <CarouselItem
            text={cardDetails2[detailKey].text}
              link={cardDetails2[detailKey].link}
                key={index}
              id={cardDetails2[detailKey].id}
              imgUrl={cardDetails2[detailKey].imgUrl}
              imgTitle={cardDetails2[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails2).map((detailKey, index) => {
          return (
            <CarouselItem
            text={cardDetails2[detailKey].text}
              link={cardDetails2[detailKey].link}
                key={index}
              id={cardDetails2[detailKey].id}
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