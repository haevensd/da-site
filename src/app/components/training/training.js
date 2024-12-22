import React from "react";
import "./training.css";

const TrainingSection = () => {
  const videos = [
    {
      title: "What to Do When You First Start a Network Marketing Business",
      link: "/network-marketing",
      thumbnail: "http://darikalexander.com/wp-content/uploads/2018/05/Screen-Shot-2018-05-09-at-12.18.01-PM.png", // Replace with actual thumbnail URL
    },
    {
      title: "3 Steps to Cure Negative Thinking",
      link: "/cure-negative-thinking",
      thumbnail: "http://darikalexander.com/wp-content/uploads/2018/04/maxresdefault-1-1.jpg", // Replace with actual thumbnail URL
    },
    {
      title: "How to Stop Caring What People Think",
      link: "/stop-caring-what-people-think",
      thumbnail: "http://darikalexander.com/wp-content/uploads/2018/04/maxresdefault-2-1.jpg", // Replace with actual thumbnail URL
    },
  ];

  return (
    <section className="training-section">
      <h2>Training</h2>
      <p>Use This Content to Learn How to Transiton to Doing What You Love Full Time</p>
      <div className="video-grid">
        {videos.map((video, index) => (
          <a key={index} href={video.link} className="video-item">
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrainingSection;
