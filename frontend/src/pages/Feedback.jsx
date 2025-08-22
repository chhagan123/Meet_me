import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import "../styles/Feedback.css";

const feedbacks = [
  { name: "Alice", img: "./Feedbackimg/img1.jpg", text: "Meet Me made video calls so smooth!", rating: 5 },
  { name: "Bob", img: "./Feedbackimg/img8.jpg", text: "I love the intuitive interface of Meet Me.", rating: 4 },
  { name: "Charlie", img: "./Feedbackimg/img3.jpg", text: "Great experience hosting events virtually!", rating: 5 },
  { name: "David", img: "./Feedbackimg/img4.jpg", text: "Crystal clear video and audio.", rating: 5 },
  { name: "Eva", img: "./Feedbackimg/img4.jpg", text: "I could join meetings on any device seamlessly.", rating: 4 },
  { name: "Frank", img: "./Feedbackimg/img5.jpg", text: "Scheduling meetings became so easy.", rating: 5 },
  { name: "Grace", img: "./Feedbackimg/img6.jpg", text: "Loved the virtual backgrounds feature!", rating: 5 },
  { name: "Hannah", img: "./Feedbackimg/img7.jpg", text: "Meet Me keeps me connected with my team.", rating: 5 },
];

export default function Feedback() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // Update visibleCount based on window width
  const handleResize = () => {
    if (window.innerWidth <= 640) setVisibleCount(2);
    else if (window.innerWidth <= 1024) setVisibleCount(3);
    else setVisibleCount(4);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setStartIndex((prev) => (prev + visibleCount >= feedbacks.length ? 0 : prev + visibleCount));
  };

  const prev = () => {
    setStartIndex((prev) => (prev - visibleCount < 0 ? feedbacks.length - visibleCount : prev - visibleCount));
  };

  const visibleFeedback = feedbacks.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="feedback-featured">
      <h2 className="title">Our Users Love Meet Me</h2>

      <div className="feedback-container">
        <button className="slider-button left" onClick={prev}>
          <ChevronLeft size={32} />
        </button>

        <div className="feedback-cards-wrapper">
          <div className="feedback-cards" style={{ width: `${visibleCount * 300}px` }}>
            {visibleFeedback.map((fb, i) => (
              <div key={i} className="feedback-card">
                <img src={fb.img} alt={fb.name} className="user-img" />
                <h3 className="user-name">{fb.name}</h3>
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={16} color={index < fb.rating ? "#facc15" : "#e5e7eb"} />
                  ))}
                </div>
                <p className="user-text">{fb.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-button right" onClick={next}>
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
