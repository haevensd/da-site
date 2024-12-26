import React from "react";
import "./HexagonSections.css";

const HexagonSections = () => {
  const sections = [
    {
      text: "Companies",
      link: "https://podcasts.apple.com/us/podcast/the-daily-motivation/id1634106069",
      image: "/hex_1.png",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/triangle-on-state-daily-motivation-.png",
    },
    {
      text: "Arcadia",
      link: "/podcast/",
      image: "/hex_3.png",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/img-podcast-1.png",
    },
    {
      text: "Speaking",
      link: "/speaking",
      image: "/hex_2.png",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/books-hover.png",
    },
    {
      text: "Magnetic Messenger Scripts",
      link: "https://www.summitofgreatness.com",
      image: "/hex_4.png",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/sog-on-state.png",
    },
    {
        text: "Fix My Fees",
        link: "https://greatness.com/hex",
        image: "/hex_5.png",
        // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/triangle-on-state-greatness8.png",
    },
    {
      text: "Ascension",
      link: "https://www.summitofgreatness.com",
      image: "/hex_6.png",
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
            {/* <a href={section.link} target="_blank" rel="noopener noreferrer">
              READ MORE
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HexagonSections;
