import Image from 'next/image';
import styles from './FeaturedIn.module.css'; // Optional CSS module for styling
import './featured-in.css'

const FeaturedIn = () => {
  const logos = [
    { src: '/yahoo.svg', alt: 'Yahoo Finance', height: 50, width: 130 },
    { src: '/disrupt-logo.png', alt: 'Disrupt', height: 25, width: 130 },
    { src: '/newsmax_logo_new.png', alt: 'Newsmax', height: 30, width: 130 },
    { src: '/accesswire.png', alt: 'Accesswire', height: 30, width: 130 },
    { src: '/logo-white.png', alt: 'Daily Caller', height: 150, width: 130 },
    { src: '/new-future-sharks-logo.png', alt: 'Future Sharks', height: 150, width: 130 },
    { src: '/adt.png', alt: 'ADP', height: 50, width: 260, dontInvert: true },
  ];

  return (
    <div className={styles.featuredContainer}>
      <h2 className={styles.featuredHeading}>Featured In:</h2>
      <div className={styles.logoContainer}>
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={logo.width ? logo.width : 50} // Adjust as needed
            height={logo.height ? logo.height : 150} // Adjust as needed
            className={`logo ${logo.dontInvert ? '' : 'invert'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedIn;
