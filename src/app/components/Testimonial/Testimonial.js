'use client';
import './Testimonial.css';
export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial-portrait" style={{ backgroundImage: 'url(/bp.png)' }}></div>
      <div className="testimonial-content">
        <p className="testimonial-quote">
          “I’ve known Darik for a long time. This man has a marvelous mind. When he offers you help, TAKE IT! Go for it! I’ve been in the business for over 53 years. This man impresses me.”
        </p>
        <span className="testimonial-author">Bob Proctor</span>
        <p className="testimonial-meta">Best selling author, speaker, and pioneer of "The Secret"</p>
      </div>
    </div>
  );
}