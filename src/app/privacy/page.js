import React from 'react';
import './privacy.css';
const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <b className='title'>Privacy Policy</b>
      <p>This Privacy Policy describes how Darik Alexander ("I," "me," or "my") collects, uses, and protects your personal information when you visit darikalexander.com (the "Website"). By using this Website, you consent to the practices described in this policy.</p>

      <section>
        <b>1. Information I Collect</b>
        <h3>Personal Information</h3>
        <p>When you voluntarily subscribe to my newsletter or contact me, I may collect:</p>
        <ul>
          <li>Your email address</li>
          <li>Your name (if provided)</li>
        </ul>
      </section>

      <section>
        <b>2. How I Use Your Information</b>
        <p>I use the collected information for the following purposes:</p>
        <ul>
          <li>To send emails containing account information for course access</li>
        </ul>
      </section>

      <section>
        <b>3. How I Protect Your Information</b>
        <p>I implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no internet transmission is 100% secure, so I cannot guarantee absolute security.</p>
      </section>

      <section>
        <b>4. Sharing Your Information</b>
        <p>I do not sell, trade, or rent your personal information to third parties. However, I may use trusted third-party services (e.g., email marketing platforms) to manage communications, and they are obligated to keep your information confidential.</p>
      </section>

      <section>
        <b>5. Cookies & Tracking Technologies</b>
        <p>The Website may use cookies (small data files stored on your device) to enhance your browsing experience. You can disable cookies in your browser settings, but some features may not function properly.</p>
      </section>

      <section>
        <b>6. Third-Party Links</b>
        <p>This Website may contain links to external sites. I am not responsible for the privacy practices of these websites, so I encourage you to review their policies.</p>
      </section>

      <section>
        <b>7. Your Rights</b>
        <p>You have the right to:</p>
        <ul>
          <li>Access, update, or delete your personal information</li>
          <li>Unsubscribe from emails (via the "unsubscribe" link in emails)</li>
          <li>Request a copy of your stored data</li>
        </ul>
        <p>To exercise these rights, contact me at info@darikalexander.com.</p>
      </section>

      <section>
        <b>8. Children's Privacy</b>
        <p>This Website is not intended for children under 13, and I do not knowingly collect their personal information.</p>
      </section>

      <section>
        <b>9. Changes to This Policy</b>
        <p>I may update this Privacy Policy periodically. The latest version will be posted here with the "Last Updated" date.</p>
      </section>

      <section>
        <b>10. Contact Me</b>
        <p>If you have questions about this Privacy Policy, please email me at:</p>
        <a href="mailto:info@darikalexander.com">info@darikalexander.com</a>
      </section>

      <footer>
        <p>Thank you for visiting darikalexander.com.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;