import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-logo">
        <img src='/Logo-da-footer.png' width={'100%'} />
        </div>
        <div className="footer-links">
          <div>
            <h3>Email me</h3>
            <p>info@darikalexander.com</p>
          </div>
          <div>
            <h3>Privacy</h3>
            <p>
              <a href="/privacy" className="footer-link">
                Click Here
              </a>
            </p>
          </div>
          <div>
            <h3>Connect with me</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/darik.alexander"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.youtube.com/user/darikalexander"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/YouTube_full-color_icon_%282024%29.svg/1280px-YouTube_full-color_icon_%282024%29.svg.png"
                alt="YouTube"
                />
              </a>
              <a
                href="https://www.instagram.com/darik.alexander/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://twitter.com/darikalexander"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
                alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © 2024 Darik Alexander | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
