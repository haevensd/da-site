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
        src="mystory.jpeg"
        className="about-img"
        alt="Story Header"
      />
      <div className="story-inner-container">
        <div className="story-header">
          <h1>MY STORY</h1>
        </div>
        <div className="story-content">
          <p className="story-intro">
            It’s Oct. 11, 2001 and I'm stting in my tiny college dorm, staring at
            the mountain of bills on my desk. $50,000 in debt, while working
            concession stands for $9 an hour, and running on nothing but coffee
            and sheer determination. Life felt like an endless loop of struggle.
            But it was one moment that he made a decision—a decision to rewrite
            my story.
          </p>
          <blockquote className="story-quote">
            “The 80-cent raise after six months of being the top call center
            producer hit me, hard. I realized if I didn’t make a change now, I’d
            be trapped in this forever.”
          </blockquote>
          <p className="story-paragraph">
            That moment was the turning point. I poured everything he had
            into learning the ropes of entrepreneurship. Days blurred into
            nights as he taught himself marketing strategies, crafted offers,
            and built connections.
          </p>
          <p className="story-paragraph">
            Fast forward, I am now the CEO of Ignite Programs, a multiple
            six-figure earner by the age of 20, and a sought-after trainer who’s
            worked with world-renowned entrepreneurs like Gary Vaynerchuk,
            Darren Hardy, and Les Brown. 
          </p>
          <p className="story-paragraph">
            From broke to thriving, proving that the right mindset, hard
            work, and a heart-driven mission can spark a transformation for
            anyone willing to take the leap.
          </p>
          <a href="/about"><button className="story-button">Discover My Story</button></a>
        </div>
      </div>
    </section>
  );
};

export default DarikStory;
