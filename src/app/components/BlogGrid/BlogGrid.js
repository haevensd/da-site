'use client'
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState, useRef } from "react";
import CarouselItem from "./CarouselItem";
import './BlogGrid.css';
import { redirect } from 'next/navigation';

const cardDetails = 
  [
    
    {
      link: '',
        id: 20,
        text: '',
        title: 'Paris Reunion—How We Built Wealth and Stayed Connected for 10 Years',
        imgUrl: '/blog/paris.jpg',
  },
    {
      link: '',
        id: 11,
        text: '',
        title: 'Inside Our Ultimate French Riviera Family Getaway',
        imgUrl: '/blog/french.jpg',
  },
        {
          link: '',
          imgUrl: '/blog/cinque.jpg',
          title: 'Discovering What Cinque Terre Italy Is REALLY Like',
          text: '',
            id: 12
      },
      
    {
      link: '',
        id: 10,
        text: '',
        title: 'Discovering The REAL Monaco With My LOVED ONES',
        imgUrl: '/blog/monaco.jpg',
  },
    {
      link: '',
        id: 9,
        text: '',
        title: 'Maasai Mara-A Trip of a Lifetime',
        imgUrl: '/blog/masa.jpg',
  },

    {
      link: '',
        id: 18,
        text: '',
        title: 'Sun, Sand, and Smiles: Our Family Reunion in Santa Cruz, California',
        imgUrl: '/blog/vacation.jpg',
  },

    {
      link: '',
        id:19,
        text: '',
        title: 'Taking my Family to HI',
        imgUrl: '/blog/hawaii.jpg',
  },
]
 
const cardDetails2 =
  [
    
    {
      link: '',
      imgUrl: '/blog/antibes.jpg',
      title: 'Antibes with a Toddler: Is It Worth It? (French Riviera Travel)',
      text: '',
        id: 17
  },
  {
    link: '',
    imgUrl: '/blog/tropez.jpg',
    title: 'I\'m Taking My Toddler on a LUXURY Getaway to Saint-Tropez!',
    text: '',
      id: 13
  },
  {
    link: '',
    imgUrl: '/blog/eze.jpg',
          title: 'Discovering Éze: The Hidden Gem of the French Riviera 🌍✨',
          text: '',
            id: 14
      },
      {
        link: '',
    imgUrl: '/blog/como.jpg',
          title: 'We Tried Every Ferry on Lake Como and This Happened!',
          text: '',
            id: 21
      },
  {
    link: '',
        imgUrl: '/blog/sur.jpg',
        title: 'An Unexpected Pit Stop in Villefranche-sur-Mer',
        text: '',
          id: 15
      },

    {
      link: '',
        imgUrl: '/blog/saint.jpg',
        title: 'Luxury Family Escape to Saint-Jean-Cap-Ferrat 🇫🇷 (With a 1-Year-Old!)',
        text: '',
          id: 16
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