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
        src="http://darikalexander.com/wp-content/uploads/2020/03/You-arent-stupid-though-you-also-know-that-_one-day-isnt-a-day-on-the-calendar_.png"
        alt="Story Header"
      />
      <div className="story-inner-container">
        <div className="story-header">
          <h1>MY STORY</h1>
        </div>
        <div className="story-content">
          <p className="story-intro">
            It’s Oct. 11, 2001 and Darik is in his tiny college dorm, staring at
            the mountain of bills on his desk. $50,000 in debt, while working
            concession stands for $9 an hour, and running on nothing but coffee
            and sheer determination. Life felt like an endless loop of struggle.
            But it was one moment that he made a decision—a decision to rewrite
            his story.
          </p>
          <blockquote className="story-quote">
            “The 80-cent raise after six months of being the top call center
            producer hit me, hard. I realized if I didn’t make a change now, I’d
            be trapped in this forever.”
          </blockquote>
          <p className="story-paragraph">
            That moment was the turning point. Darik poured everything he had
            into learning the ropes of entrepreneurship. Days blurred into
            nights as he taught himself marketing strategies, crafted offers,
            and built connections.
          </p>
          <p className="story-paragraph">
            Fast forward, Darik is now the CEO of Ignite Programs, a multiple
            six-figure earner by the age of 20, and a sought-after trainer who’s
            worked with world-renowned entrepreneurs like Gary Vaynerchuk,
            Darren Hardy, and Les Brown. He’s helped thousands attract leads and
            sales through heart-centered strategies that don’t just build
            businesses—they change lives.
          </p>
          <p className="story-paragraph">
            From broke to thriving, Darik proves that the right mindset, hard
            work, and a heart-driven mission can spark a transformation for
            anyone willing to take the leap.
          </p>
          <button className="story-button">Discover My Story</button>
        </div>
      </div>
    </section>
  );
};

export default DarikStory;
