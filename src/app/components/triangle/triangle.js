import React from "react";
import "./HexagonSections.css";

const HexagonSections = () => {
  const sections = [
    {
      text: "Start Your Day With Inspiration And Motivation",
      link: "https://podcasts.apple.com/us/podcast/the-daily-motivation/id1634106069",
      image: "http://darikalexander.com/wp-content/uploads/2017/07/IMG_1035.jpg",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/triangle-on-state-daily-motivation-.png",
    },
    {
      text: "Dream Bigger. Live Better. Make an Impact.",
      link: "/podcast/",
      image: "http://darikalexander.com/wp-content/uploads/2020/03/58950029_10157674310947494_2550397454910488576_n.jpg",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/img-podcast-1.png",
    },
    {
      text: "Read These to Become the Hero of Your Own Story",
      link: "/programs/#programs-books",
      image: "http://darikalexander.com/wp-content/uploads/2017/07/11816979_10153647685917494_6933033594485994486_n.jpg",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/books-hover.png",
    },
    {
      text: "Reach Your Ultimate Human Potential",
      link: "https://www.summitofgreatness.com",
      image: "http://darikalexander.com/wp-content/uploads/2017/01/MG_1940.jpg",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/sog-on-state.png",
    },
    {
        text: "Grow And Unleash Your Inner Greatness",
        link: "https://greatness.com/hex",
        image: "https://darikalexander.com/wp-content/uploads/2017/07/Untitled-design-5.png",
        // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/triangle-on-state-greatness8.png",
    },
    {
      text: "Reach Your Ultimate Human Potential",
      link: "https://www.summitofgreatness.com",
      image: "http://darikalexander.com/wp-content/uploads/2020/03/71905843_10220578206429777_7542687467766284288_n.jpg",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/sog-on-state.png",
    },
  ];

  return (
    <div className="hexagon loaded">

      {sections.map((section, index) => (
        <div
          key={index}
          className="hexagon-item"
          style={{
            backgroundImage: `url(${section.image})`,
          }}
          // onMouseEnter={(e) =>
          //   (e.currentTarget.style.backgroundImage = `url(${section.})`)
          // }
          // onMouseLeave={(e) =>
          //   (e.currentTarget.style.backgroundImage = `url(${section.image})`)
          // }
        >
          <div className="hexagon-description">
            <p>{section.text}</p>
            <a href={section.link} target="_blank" rel="noopener noreferrer">
              READ MORE
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HexagonSections;
