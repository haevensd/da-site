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
  const [mobileSidebarClosed, setMobileSidebarClosed] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const courseModules = [
    {
      title: "Modules",
      videos: [
        { id: 1, title: "Module 0.1", url: "1043045724" },
        { id: 2, title: "Module 0.2", url: "1043054078" },
        { id: 3, title: "Module 0.3", url: "1043055777" },
        { id: 4, title: "Module 1.1", url: "1043056365" },
        { id: 5, title: "Module 1.2", url: "1043057221" },
        { id: 6, title: "Module 1.3", url: "1043061081" },
        { id: 7, title: "Module 1.4", url: "1043062026" },
        { id: 8, title: "Module 2.1", url: "1043065331" },
        { id: 9, title: "Module 2.2", url: "1043066467" },
        { id: 10, title: "Module 3.1", url: "1043069547" },
        { id: 11, title: "Module 3.2", url: "1043070190" },
        { id: 12, title: "Module 3.3", url: "1043071800" },
        { id: 13, title: "Module 3.4", url: "1043072546" },
        { id: 14, title: "Module 3.5", url: "1043072915" },
        { id: 15, title: "Module 4.1", url: "1043073572" },
        { id: 16, title: "Module 4.2", url: "1043074860" },
        { id: 17, title: "Module 4.3", url: "1043075608" },
        { id: 18, title: "Module 4.4", url: "1043076130" },
        { id: 19, title: "Module 4.5", url: "1043077415" },
        { id: 20, title: "Module 5.1", url: "1043077885" },
        { id: 21, title: "Module 5.2", url: "1043079337" },
        { id: 22, title: "Module 5.3", url: "1043080207" },
        { id: 23, title: "Module 6.1", url: "1043085201" },
        { id: 24, title: "Module 6.2", url: "1043087466" },
        { id: 25, title: "Module 6.3", url: "1043088790" },
        { id: 26, title: "Module 6.4", url: "1043089722" },
        { id: 27, title: "Module 6.5", url: "1043090002" },
        { id: 28, title: "Module 7.1", url: "1043090283" },
        { id: 29, title: "Module 7.2", url: "1043091256" },
        { id: 30, title: "Module 7.3", url: "1043091804" },
        { id: 31, title: "Module 7.4", url: "1043092387" },
        { id: 32, title: "Module 8.1", url: "1043092926" },
        { id: 33, title: "Module 8.2", url: "1043094216" },
        { id: 34, title: "Module 9.1", url: "1043095187" },
        { id: 35, title: "Module 9.2", url: "1043096082" },
        
      ],
    },
    {
      title: "Module Interviews",
      videos: [
        { id: 36, title: "Ray interview", url: "1043097307" },
        { id: 37, title: "Fraser Brooks interview", url: "1043099466" },
        { id: 38, title: "Kai Lo interview", url: "1043101089" },
        { id: 39, title: "Tanya Aliza interview", url: "1043100169" },
        { id: 40, title: "Cliff Braun interview ", url: "1043100763" },
        { id: 41, title: "Todd Fastbrake interview", url: "1043141296" },
        { id: 42, title: "John & Nadya Melton interview", url: "1043142506" },
      ],
    },
    
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email === "course@darikalexander.com" && loginData.password === "freecourse1") {
      setIsLoggedIn(true);
      // setError("");
    } else {
      // setError("Invalid email or password. Please try again.");
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
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
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
      {!mobileSidebarClosed && <img className="arrow" onClick={() => setMobileSidebarClosed(!mobileSidebarClosed)} style={{position:'absolute', top: '30px',zIndex: 1000, left: '20px', marginBottom: '1rem', transform: 'rotate(180deg)'}} width={10} height={15} src="/chevron-left.png"></img>}
      <div className={`course-sidebar ${!mobileSidebarClosed && 'is-mobile'}`}>
      {mobileSidebarClosed && <img className="arrow" onClick={() => setMobileSidebarClosed(!mobileSidebarClosed)} style={{position:'absolute', top: '20px', right: '20px', marginBottom: '1rem', marginLeft: 'auto'}} width={10} height={15} src="/chevron-left.png"></img>}
        {courseModules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="module-section">
            <div onClick={() => toggleSection(moduleIndex)} style={{backgroundColor: '#f79c26', padding: '5px', paddingBottom: '1px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', borderBottomLeftRadius: '2px', borderBottomRightRadius: '2px'}}>
                <h3
                className="module-title"
                
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
                    className={`video-item ${selectedVideo && video.url === selectedVideo.url && 'active'}`}
                    onClick={() => handleVideoClick(video)}
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
          <div style={{padding:'56.25% 0 0 0',position:'relative', width: '100%'  }}>
            <iframe src={`https://player.vimeo.com/video/${selectedVideo.url}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}  allow={"autoplay; fullscreen; picture-in-picture; clipboard-write"}
            style={{position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}} title={selectedVideo.title}></iframe><script src="https://player.vimeo.com/api/player.js"></script></div>
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
