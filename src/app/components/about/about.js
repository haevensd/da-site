'use client';

import React, { useEffect } from "react";
import "./about.css";

const DarikStory = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = document.querySelectorAll(
      ".story-intro, .story-paragraph, .story-quote, .story-header h1"
    );

    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="story-container">
      <img
        height="auto"
        width="100%"
        src="mystory.png"
        className="about-img"
        alt="Story Header"
      />
      <div className="story-inner-container">
        <div className="story-header">
          <h1>MY STORY</h1>
        </div>
        <div className="story-content">
          <p className="story-intro">
          As a kid, I spent the first 10 years of my life being homeschooled, focusing on business principles to apply in the real world. My early years in public school were spent being bullied and doubted by my teachers who said I would be a failure.
          </p>
          <blockquote className="story-quote">
          I have failed more times than I can count but I own those mistakes and hope it can help others.

          </blockquote>
          <p className="story-paragraph">
          While at college as a D1 athlete, I joined an affiliate marketing company part-time over the summer. In 10 months I had become the 30th income earner out of half a million people and built a team of 12,000 people in 6 different continents. After dropping out of college, I spent the next decade building multiple businesses, growing and managing teams of tens of thousands of people, and grossing 100 million dollars in revenue across multiple industries, allowing me to retire in my late 20s. 
          </p>
          <p className="story-paragraph">
          I have failed more times than I can count but I own those mistakes and hope it can help others.
          </p>
          <p className="story-paragraph">
          This channel shares my life and take on the world. Culture, politics, and business with the hopes that it helps empower you to do more of what you love.
          </p>
          <a href="/about"><button className="story-button">Discover My Story</button></a>
        </div>
      </div>
    </section>
  );
};

export default DarikStory;
