'use client'
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState, useRef } from "react";
import CarouselItem from "./CarouselItem";
import './BlogGrid.css';
import { redirect } from 'next/navigation';

const cardDetails = 
  [
    
    {
        id: 4,
        text: '',
        title: 'Paris Reunion—How We Built Wealth and Stayed Connected for 10 Years',
        imgUrl: '/blog/paris.jpeg',
  },
    {
        id: 11,
        text: '',
        title: 'Inside Our Ultimate French Riviera Family Getaway',
        imgUrl: '/blog/french.jpeg',
  },
        {
          imgUrl: '/blog/cinque.jpeg',
          title: 'Discovering What Cinque Terre Italy Is REALLY Like',
          text: '',
            id: 12
      },
      
    {
        id: 10,
        text: '',
        title: 'Discovering The REAL Monaco With My LOVED ONES',
        imgUrl: '/blog/monaco.jpeg',
  },
    {
        id: 1,
        text: '',
        title: 'Maasai Mara-A Trip of a Lifetime',
        imgUrl: '/blog/masa.jpeg',
  },

    {
        id: 2,
        text: '',
        title: 'Sun, Sand, and Smiles: Our Family Reunion in Santa Cruz, California',
        imgUrl: '/blog/vacation.jpeg',
  },

    {
        id: 3,
        text: '',
        title: 'Taking my Family to HI',
        imgUrl: '/blog/hawaii.jpeg',
  },
]
 
const cardDetails2 =
  [
    {
      imgUrl: '/blog/antibes.jpeg',
      title: 'Antibes with a Toddler: Is It Worth It? (French Riviera Travel)',
      text: '',
        id: 9
  },
  {
    imgUrl: '/blog/tropez.jpeg',
    title: 'I\'m Taking My Toddler on a LUXURY Getaway to Saint-Tropez!',
    text: '',
      id: 5
  },
  {
    imgUrl: '/blog/eze.jpeg',
          title: 'Discovering Éze: The Hidden Gem of the French Riviera 🌍✨',
          text: '',
            id: 6
      },
  {
        imgUrl: '/blog/sur.jpeg',
        title: 'An Unexpected Pit Stop in Villefranche-sur-Mer',
        text: '',
          id: 7
      },

    {
        imgUrl: '/blog/saint.jpeg',
        title: 'Luxury Family Escape to Saint-Jean-Cap-Ferrat 🇫🇷 (With a 1-Year-Old!)',
        text: '',
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