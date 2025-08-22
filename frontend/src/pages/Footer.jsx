import React, { useState } from "react";
import "../styles/Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      // You can integrate with your backend/API here
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">Meet Me</h2>
          <p className="footer-text">
            Stay updated with our latest news and features.
          </p>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe to our newsletter</h3>
          {!submitted ? (
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          ) : (
            <p className="subscribe-success">Thank you for subscribing!</p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Meet Me. All rights reserved.</p>
      </div>
    </footer>
  );
}
