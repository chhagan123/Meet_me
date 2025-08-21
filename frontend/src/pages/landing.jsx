
// import React from 'react'
// import "../App.css"
// import { Link, useNavigate } from 'react-router-dom'
// export default function LandingPage() {


//     const router = useNavigate();

//     return (
//         <div className='landingPageContainer'>
//             <nav>
//                 <div className='navHeader'>
//                     <h2>Meet me</h2>
//                 </div>
//                 <div className='navlist'>
//                     <p onClick={() => {
//                         router("/aljk23")
//                     }}>Join as Guest</p>
//                     <p onClick={() => {
//                         router("/auth")

//                     }}>Register</p>
//                     <div onClick={() => {
//                         router("/auth")

//                     }} role='button'>
//                         <p>Login</p>
//                     </div>
//                 </div>
//             </nav>


//             <div className="landingMainContainer">
//                 <div>
//                     <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

//                     <p>Cover a distance by Meet Me</p>
//                     <div role='button'>
//                         <Link to={"/auth"}>Get Started</Link>
//                     </div>
//                 </div>
//                 <div>

//                     <img src="/mobile.png" alt="" />

//                 </div>
//             </div>



//         </div>
//     )
// }
import React from "react";
import "../styles/land.css";
import { useNavigate } from "react-router-dom";
import Ulandig from "./Ulanding";

export default function LandingPage() {
  const router = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🚀 Now in Beta</span>
          <h1 className="hero-title">
            Professional <span className="highlight">Meet</span>
          </h1>
          <h2 className="hero-subtitle">Reimagined</h2>
          <p className="hero-text">
            Connect with industry leaders, discover opportunities, and build
            meaningful professional relationships in a modern, intuitive
            platform.
          </p>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => {
                router("/auth");
              }}
            >
              Start Meeting →
            </button>
            <button className="btn-secondary">Watch Demo</button>
          </div>
        </div>

        <div className="hero-image">
          <img src="./Meetk.png" alt="Dashboard preview" />
        </div>
      </section>

      {/* Features Section */}
      <Ulandig />
    </>
  );
}
