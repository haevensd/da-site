'use client'
import { useState } from "react";
import CarouselItem from "./CarouselItem";
import './ImageGrid.css';
const cardDetails = {
  0: {
      imgUrl: "/yt/blind_yt_thumbnail.jpg",
      link: "https://youtu.be/fqbAfLJkFhE?si=GiaWif1vMFVnKn3l",
      title: "Text 1"
  },

  1: {
      imgUrl: "/yt/ignite_yt_thumbnail.jpg",
      link: "https://youtu.be/cB_1AtKB81A?si=sNOo1e_nqB2acWxr",
      title: "Text 2"
  },

  2: {
      imgUrl: "/yt/my_story_yt_thumbnail.jpg",
      link: "https://youtu.be/HkRhTDN-Has?si=cUxPM6ESPDLvnlJ2",
      title: "Text 3"
  },

  3: {
      imgUrl: "/yt/relax_your_body_yt_thumbnail.jpg",
      link: "https://youtu.be/NXQxHwlTTqM?si=luVOZxB34ZAI2_rw",
      title: "Text 4"
  },

  4: {
      imgUrl: "/yt/stop_caring_yt_thumbnail.jpg",
      link: "https://youtu.be/qWhBqxDOMA4?si=qKSMJCO45f3rMWsI",
      title: "Text 5"
  },

  5: {
      imgUrl: "/yt/what_to_do_with_your_life_yt_thumbnail.jpg",
      link: "https://youtu.be/wWZpXkNTnaI?si=gKgZ-hSKMH1Ijo-b",
      title: "Text 6"
  },

  6: {
      imgUrl: "/yt/yt_5.jpg",
      link: "https://youtu.be/qWhBqxDOMA4?si=hJqk4ta5Lzu8-0DR",
      title: "Text 7",
  },
  7: {
      imgUrl: "/yt/yt_6.jpg",
      link: "https://youtu.be/lXHOzVIeYGA?si=jbJEpqsvCJdkZbjm",
      title: "Text 7",
  },
  8: {
      imgUrl: "/yt/yt_7.jpg",
      link: "https://youtu.be/JUKvZxZxoNg?si=0xwl9c1SASOvdS8J",
      title: "Text 7",
  },
  9: {
      imgUrl: "/yt/yt_8.jpg",
      link: "https://youtu.be/cmlEJ0vQS-g?si=2cdRoIrUKABDupo6",
      title: "Text 7",
  },
  10: {
      imgUrl: "/yt/yt_9.jpg",
      link: "https://youtu.be/Lo-fB5t_WZU?si=liBwM3Xq0_MAyxNf",
      title: "Text 7",
  },
  11: {
      imgUrl: "/yt/yt_10.jpg",
      link: "https://youtu.be/voPU6p5E89Y?si=xKxWLJ8w8sU3C0vc",
      title: "Text 7",
  },
  12: {
      imgUrl: "/yt/yt_11.jpg",
      link: "https://youtu.be/sZ4RtiIy3Qk?si=5b0ivMSTmwN-_lX4",
      title: "Text 7",
  },
  13: {
      imgUrl: "/yt/yt_12.jpg",
      link: "https://youtu.be/YQkRP-zoeFI?si=aAqoYY74X0IUFu4H",
      title: "Text 7",
  },
  14: {
      imgUrl: "/yt/yt_13.jpg",
      link: "https://youtu.be/lW2-eU0UHyQ?si=LAB5hksrRQTn0Qmf",
      title: "Text 7",
  },
  15: {
      imgUrl: "/yt/yt_14.jpg",
      link: "https://youtu.be/qoMN4DzqxJM?si=bF2daBXC4iIyyTn8",
      title: "Text 7",
  },
  16: {
      imgUrl: "/yt/yt_15.jpg",
      link: "https://youtu.be/Cc_M7EQyhV8?si=0MfkREwFbOU8mxeN",
      title: "Text 7",
  },
  17: {
      imgUrl: "/yt/yt_16.jpg",
      link: "https://youtu.be/x7824u9RVh0?si=nYaGM4_MQOPHWLjK",
      title: "Text 7",
  },
  18: {
      imgUrl: "/yt/yt_17.jpg",
      link: 'https://youtu.be/zcf9CKQECAY?si=E7noFw4Qru1hUW_n',
      title: "Text 7",
  },
  19: {
      imgUrl: "/yt/yt_18.jpg",
      link: "https://youtu.be/9Vd4VZYE43M?si=VmRmFlFNwjbR5iET",
      title: "Text 7",
  },
  20: {
      imgUrl: "/yt/yt_19.jpg",
      link: "https://youtu.be/Yz__BiEQBrk?si=l35RxJizULm6hmDl",
      title: "Text 7",
  },
  21: {
      imgUrl: "/yt/yt_20.jpg",
      link: "https://youtu.be/Yx-G1ckpZPE?si=S2Ues3oLbB7xUQAD",
      title: "Text 7",
  },
  22: {
      imgUrl: "/yt/yt_21.jpg",
      link: "https://youtu.be/voGABU9ThIg?si=tK9fSy1K2Ft1F65M",
      title: "Text 7",
  },
  69: {
    imgUrl: "/yt/yt_int_22.jpg",
    link: "https://youtu.be/0lcsyQcdaUo?si=bFeJp8_y0rFMcKQF",
    title: "Text 7",
  },
  70: {
    imgUrl: "/yt/yt_int_23.jpg",
    link: "https://youtu.be/-cAZiKv-8kw?si=akw3vLx-Yeq7MfsQ",
    title: "Text 7",
  },
  71: {
    imgUrl: "/yt/yt_int_24.jpg",
    link: "https://youtu.be/CAyj8iH3E40?si=MoMRy28OFIUbK4KV",
    title: "Text 7",
  },
  72: {
    imgUrl: "/yt/yt_int_25.jpg",
    link: "https://youtu.be/nVZGxmqr1wk?si=Y6N_6vzrNwscNkFY",
    title: "Text 7",
  },
  23: {
      imgUrl: "/yt/yt_22.jpg",
      link: "https://youtu.be/lOEUiTAVRo8?si=BS4CfKf6YX0QCjgJ",
      title: "Text 7",
  },
  23: {
      imgUrl: "/yt/yt_24.jpg",
      link: "https://youtu.be/8Q3wnXTlmjk?si=P1VeyWs5zq4I4eFo",
      title: "Text 7",
  },
  24: {
      imgUrl: "/yt/yt_25.jpg",
      link: "https://youtu.be/lwxILZxlCeE?si=GQk9rwdWDD6TgwI8",
      title: "Text 7",
  },
  25: {
      imgUrl: "/yt/yt_26.jpg",
      link: "https://youtu.be/KAddfcZPbYg?si=T4qcBPoh9BAbQvNu",
      title: "Text 7",
  },
  26: {
      imgUrl: "/yt/yt_27.jpg",
      link: "https://youtu.be/lmo14Bgs040?si=DfffEaGAk5upl78I",
      title: "Text 7",
  },
  27: {
      imgUrl: "/yt/yt_29.jpg",
      link: "https://youtu.be/6keREXPXgfc?si=2l7571_vW179TBwD",
      title: "Text 7",
  },
  28: {
      imgUrl: "/yt/yt_309.jpg",
      link: "https://youtu.be/718W0i2Ul2w?si=o1Hvt3LcnjsxusJ8",
      title: "Text 7",
  },
  29: {
      imgUrl: "/yt/yt_thumbail_1.jpg",
      link: "https://youtu.be/7tr-E9Uj4o0?si=WSbWBK_lEhmEaWRE",
      title: "Text 7",
  },
  30: {
      imgUrl: "/yt/yt_thumbail_2.jpg",
      link: "https://youtu.be/8JbLAB8BWoo?si=c0JWP6R995UbB7Nd",
      title: "Text 7",
  },
  31: {
      imgUrl: "/yt/yt_thumbnail_3.jpg",
      link: "https://youtu.be/8KlSRpDSpWk?si=2hmbNL9GjrviSlPb",
      title: "Text 7",
  },
  32: {
      imgUrl: "/yt/yt_thumbnail_4.jpg",
      link: "https://youtu.be/FgaxWNVjZMY?si=0qFqq_gXqwehnwQH",
      title: "Text 7",
  },

 
}
const cardDetails2 = {
  23: {
    imgUrl: "/yt/yt_24.jpg",
    link: "https://youtu.be/8Q3wnXTlmjk?si=P1VeyWs5zq4I4eFo",
    title: "Text 7",
  },
  
  6: {
    imgUrl: "/yt/yt_5.jpg",
    link: "https://youtu.be/qWhBqxDOMA4?si=hJqk4ta5Lzu8-0DR",
    title: "Text 7",
  },
  69: {
    imgUrl: "/yt/yt_int_22.jpg",
    link: "https://youtu.be/0lcsyQcdaUo?si=bFeJp8_y0rFMcKQF",
    title: "Text 7",
  },

  32: {
    imgUrl: "/yt/yt_thumbnail_4.jpg",
    link: "https://youtu.be/FgaxWNVjZMY?si=0qFqq_gXqwehnwQH",
    title: "Text 7",
  },
  28: {
    imgUrl: "/yt/yt_309.jpg",
    link: "https://youtu.be/718W0i2Ul2w?si=o1Hvt3LcnjsxusJ8",
    title: "Text 7",
  },
  25: {
    imgUrl: "/yt/yt_26.jpg",
    link: "https://youtu.be/KAddfcZPbYg?si=T4qcBPoh9BAbQvNu",
    title: "Text 7",
  },
  23: {
    imgUrl: "/yt/yt_22.jpg",
    link: "https://youtu.be/lOEUiTAVRo8?si=BS4CfKf6YX0QCjgJ",
    title: "Text 7",
  },
  70: {
    imgUrl: "/yt/yt_int_23.jpg",
    link: "https://youtu.be/-cAZiKv-8kw?si=akw3vLx-Yeq7MfsQ",
    title: "Text 7",
  },
  
  1: {
    imgUrl: "/yt/ignite_yt_thumbnail.jpg",
    link: "https://youtu.be/cB_1AtKB81A?si=sNOo1e_nqB2acWxr",
    title: "Text 2"
  },
  5: {
    imgUrl: "/yt/what_to_do_with_your_life_yt_thumbnail.jpg",
    link: "https://youtu.be/wWZpXkNTnaI?si=gKgZ-hSKMH1Ijo-b",
    title: "Text 6"
  },
  
  8: {
    imgUrl: "/yt/yt_7.jpg",
    link: "https://youtu.be/JUKvZxZxoNg?si=0xwl9c1SASOvdS8J",
    title: "Text 7",
  },

  
  9: {
    imgUrl: "/yt/yt_8.jpg",
    link: "https://youtu.be/cmlEJ0vQS-g?si=2cdRoIrUKABDupo6",
    title: "Text 7",
  },
  10: {
    imgUrl: "/yt/yt_9.jpg",
    link: "https://youtu.be/Lo-fB5t_WZU?si=liBwM3Xq0_MAyxNf",
    title: "Text 7",
  },
  11: {
    imgUrl: "/yt/yt_10.jpg",
    link: "https://youtu.be/voPU6p5E89Y?si=xKxWLJ8w8sU3C0vc",
    title: "Text 7",
  },
  27: {
    imgUrl: "/yt/yt_29.jpg",
    link: "https://youtu.be/6keREXPXgfc?si=2l7571_vW179TBwD",
    title: "Text 7",
  },
  24: {
    imgUrl: "/yt/yt_25.jpg",
    link: "https://youtu.be/lwxILZxlCeE?si=GQk9rwdWDD6TgwI8",
    title: "Text 7",
  },
  72: {
    imgUrl: "/yt/yt_int_25.jpg",
    link: "https://youtu.be/nVZGxmqr1wk?si=Y6N_6vzrNwscNkFY",
    title: "Text 7",
  },
  12: {
    imgUrl: "/yt/yt_11.jpg",
    link: "https://youtu.be/sZ4RtiIy3Qk?si=5b0ivMSTmwN-_lX4",
    title: "Text 7",
  },
  13: {
    imgUrl: "/yt/yt_12.jpg",
    link: "https://youtu.be/YQkRP-zoeFI?si=aAqoYY74X0IUFu4H",
    title: "Text 7",
  },
  14: {
    imgUrl: "/yt/yt_13.jpg",
    link: "https://youtu.be/lW2-eU0UHyQ?si=LAB5hksrRQTn0Qmf",
    title: "Text 7",
  },
  26: {
    imgUrl: "/yt/yt_27.jpg",
    link: "https://youtu.be/lmo14Bgs040?si=DfffEaGAk5upl78I",
    title: "Text 7",
  },
  30: {
    imgUrl: "/yt/yt_thumbail_2.jpg",
    link: "https://youtu.be/8JbLAB8BWoo?si=c0JWP6R995UbB7Nd",
    title: "Text 7",
  },
  71: {
    imgUrl: "/yt/yt_int_24.jpg",
    link: "https://youtu.be/CAyj8iH3E40?si=MoMRy28OFIUbK4KV",
    title: "Text 7",
  },
  15: {
    imgUrl: "/yt/yt_14.jpg",
    link: "https://youtu.be/qoMN4DzqxJM?si=bF2daBXC4iIyyTn8",
    title: "Text 7",
  },
  
  4: {
    imgUrl: "/yt/stop_caring_yt_thumbnail.jpg",
    link: "https://youtu.be/qWhBqxDOMA4?si=qKSMJCO45f3rMWsI",
    title: "Text 5"
  },
  
  16: {
    imgUrl: "/yt/yt_15.jpg",
    link: "https://youtu.be/Cc_M7EQyhV8?si=0MfkREwFbOU8mxeN",
    title: "Text 7",
  },
  17: {
    imgUrl: "/yt/yt_16.jpg",
    link: "https://youtu.be/x7824u9RVh0?si=nYaGM4_MQOPHWLjK",
    title: "Text 7",
  },
  2: {
    imgUrl: "/yt/my_story_yt_thumbnail.jpg",
    link: "https://youtu.be/HkRhTDN-Has?si=cUxPM6ESPDLvnlJ2",
    title: "Text 3"
  },
  
  18: {
    imgUrl: "/yt/yt_17.jpg",
    link: 'https://youtu.be/zcf9CKQECAY?si=E7noFw4Qru1hUW_n',
    title: "Text 7",
  },
  31: {
    imgUrl: "/yt/yt_thumbnail_3.jpg",
    link: "https://youtu.be/8KlSRpDSpWk?si=2hmbNL9GjrviSlPb",
    title: "Text 7",
  },
  7: {
    imgUrl: "/yt/yt_6.jpg",
    link: "https://youtu.be/lXHOzVIeYGA?si=jbJEpqsvCJdkZbjm",
    title: "Text 7",
  },
  19: {
    imgUrl: "/yt/yt_18.jpg",
    title: "Text 7",
  },
  20: {
    imgUrl: "/yt/yt_19.jpg",
    link: "https://youtu.be/Yz__BiEQBrk?si=l35RxJizULm6hmDl",
    title: "Text 7",
  },
  29: {
    imgUrl: "/yt/yt_thumbail_1.jpg",
    link: "https://youtu.be/7tr-E9Uj4o0?si=WSbWBK_lEhmEaWRE",
    title: "Text 7",
  },
  21: {
    imgUrl: "/yt/yt_20.jpg",
    link: "https://youtu.be/Yx-G1ckpZPE?si=S2Ues3oLbB7xUQAD",
    title: "Text 7",
  },
  3: {
    imgUrl: "/yt/relax_your_body_yt_thumbnail.jpg",
    link: "https://youtu.be/NXQxHwlTTqM?si=luVOZxB34ZAI2_rw",
    title: "Text 4"
  },
  
  22: {
    imgUrl: "/yt/yt_21.jpg",
    link: "https://youtu.be/voGABU9ThIg?si=tK9fSy1K2Ft1F65M",
    title: "Text 7",
  },
  
  0: {
      imgUrl: "/yt/blind_yt_thumbnail.jpg",
      link: "https://youtu.be/fqbAfLJkFhE?si=GiaWif1vMFVnKn3l",
      title: "Text 1"
  },
 
}
const AutoplayCarousel = () => {
  const [hover, setHover] = useState(false);
  return (
    <div style={{backgroundColor: 'white',paddingTop: '55px', paddingBottom: '70px'}}>
      <div style={{ width: '100%'}}>

    <h2 style={{textAlign: 'center',color: 'black',fontSize: '3rem', marginBottom: '55px', fontFamily: "GOTHAM BOOK", }}>TAKE THE NEXT STEP </h2>
      </div>
    <div style={{height: '500px', display: 'flex'}}>
    <div className="carousel-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}> 
      <div className="carousel-track" style={{animationPlayState: hover ? 'paused' : ''}}>
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              link={cardDetails[detailKey].link}
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              link={cardDetails[detailKey].link}
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails).map((detailKey, index) => {
          return (
            <CarouselItem
              link={cardDetails[detailKey].link}
              key={index}
              imgUrl={cardDetails[detailKey].imgUrl}
              imgTitle={cardDetails[detailKey].title}
            ></CarouselItem>
          );
        })}
      </div>

      <div className="carousel-track" style={{animationPlayState: hover ? 'paused' : ''}}>
        {Object.keys(cardDetails2).map((detailKey, index) => {
          return (
            <CarouselItem
              link={cardDetails2[detailKey].link}
              key={index}
              imgUrl={cardDetails2[detailKey].imgUrl}
              imgTitle={cardDetails2[detailKey].title}
            ></CarouselItem>
          );
        })}
        {Object.keys(cardDetails2).map((detailKey, index) => {
          return (
            <CarouselItem
              link={cardDetails2[detailKey].link}
              key={index}
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