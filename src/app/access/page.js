'use client';
import React, { useState } from "react";
import "./access.css";
import { Icon } from '@iconify/react';
import arrowDown from '@iconify-icons/mdi/chevron-down'; // Down arrow
import arrowUp from '@iconify-icons/mdi/chevron-up';

const CoursePlayer = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const courseModules = [
    {
      title: "Getting Started",
      videos: [
        { id: 1, title: "01. The Introduction", url: "video1.mp4" },
        { id: 2, title: "Lesson Auto Updated", url: "video2.mp4" },
        { id: 3, title: "02. My Story", url: "video3.mp4" },
        { id: 4, title: "03. What to Expect", url: "video4.mp4" },
      ],
    },
    {
      title: "Module 1",
      videos: [
        { id: 5, title: "1.1 Discernment - The Hidden Agenda", url: "video5.mp4" },
        { id: 6, title: "1.2 The Myths - What Your Upline Didn’t Tell You", url: "video6.mp4" },
        { id: 7, title: "1.3 The Turn - Why Most People Will Never Win", url: "video7.mp4" },
        { id: 8, title: "1.4 Ascension - Sound Like an Expert", url: "video8.mp4" },
      ],
    },
    {
      title: "Module 2",
      videos: [
        { id: 9, title: "2.1 Defining Your Demeanor - The Commitment Checklist", url: "video9.mp4" },
        { id: 10, title: "2.2 The Self Image Shifter", url: "video10.mp4" },
        { id: 11, title: "2.3 7 Figure Mindset Mastery with Clift Braun", url: "video11.mp4" },
      ],
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.email === "test@example.com" && loginForm.password === "password") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleVideoClick = (url) => {
    setSelectedVideo(url);
  };

  const handleInputChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
        <h2>Login to Access Your Course</h2>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="course-player-container">
      <div className="course-sidebar">
        {courseModules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="module-section">
            <div style={{backgroundColor: '#f79c26', padding: '5px', paddingBottom: '1px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
                <h3
                className="module-title"
                onClick={() => toggleSection(moduleIndex)}
                >
                {module.title}
                
                {expandedSections[moduleIndex] ? <Icon icon={arrowUp} style={{ marginLeft: '5px', fontSize: '20px' }} />
                :<Icon icon={arrowDown} style={{ marginLeft: '5px', fontSize: '20px' }} />}
                </h3>
            </div>
            {expandedSections[moduleIndex] && (
              <ul className="module-videos">
                {module.videos.map((video) => (
                  <li
                    key={video.id}
                    className="video-item"
                    onClick={() => handleVideoClick(video.url)}
                  >
                    {video.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="video-container">
        {selectedVideo ? (
          <video
            controls
            autoPlay
            src={selectedVideo}
            className="video-player"
          />
        ) : (
          <div className="video-placeholder">
            <p>Select a video to begin watching.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePlayer;
