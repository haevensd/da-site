import React from "react";
import "./HexagonSections.css";

const HexagonSections = () => {
  const sections = [
    {
      text: "Magnetic Minds",
      link: "",
      image: "/mm.png",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/triangle-on-state-daily-motivation-.png",
    },
    {
      text: "Speaking", 
      link: "/speaking/",
      image: "/speaking.jpg",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/img-podcast-1.png",
    },
    {
      text: "Fix My Fees",
      link: "/speaking",
      image: "/fixmyfees.png",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/books-hover.png",
    },
    {
      text: "Ascension",
      link: "/course",
      image: "/ascension.png",
      // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/sog-on-state.png",
    },
    {
        text: "Arcadia",
        link: "/",
        image: "/arcadia.jpg",
        // hoverImage: "https://lewishowes.com/wp-content/uploads/2019/10/triangle-on-state-greatness8.png",
    },
    {
      text: "Blog",
      link: "/blog",
      image: "/blog.jpg",
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
