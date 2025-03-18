import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import aboutImg from "./assets/Light-Bulb-PNG-Free-Download.png";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("skill"); 

  
  const tabContent = {
    skill: "I have expertise in React, JavaScript, Bootstrap, and UI/UX design.",
    experience: "Worked on multiple projects, focusing on responsive web applications.",
    education: "Pursuing my Engineering at SRM TRP Engineering College Trichy in Computer Science."
  };

  return (
    <div id="about" className="about-section">
      <div className="container py-5">
        <div className="row align-items-center">
         
          <div className="col-md-4 text-center">
            <img src={aboutImg} alt="About Me" className="about-image" />
          </div>

         
          <div className="col-md-8">
            <h1 className="sub-title">About Me</h1>
            <p>
              I am <span className="highlight">AKILAN</span> from <span className="highlight">SRM TRP</span>,  
              a passionate web developer with a focus on creating intuitive and responsive applications.
            </p>

            
            <div className="tab-title">
              <p
                className={`tab-links ${activeTab === "skill" ? "active-link" : ""}`}
                onClick={() => setActiveTab("skill")}
              >
                Skill
              </p>
              <p
                className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
            </div>

            
            <div className="tab-content">
              <p>{tabContent[activeTab]}</p>
            </div>
          </div>
        </div>
      </div>

      
      <style>
        {`
          
          .about-section {
            background: url('https://wallpaperaccess.com/full/3239480.jpg') no-repeat center center/cover;
            min-height: 100vh;
            display: flex;
            align-items: center;
            color: white;
          }

        
          .about-image {
            width: 100%;
            max-width: 300px;
          }

         
          .sub-title {
            font-size: 2rem;
            font-weight: bold;
            color: white;
          }

          .highlight {
            color: #ffcc00;
            font-weight: bold;
          }

          
          .tab-title {
            display: flex;
            gap: 20px;
            margin-top: 20px;
          }

          .tab-links {
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: bold;
            color: white;
            padding: 5px 10px;
            border-bottom: 2px solid transparent;
            transition: all 0.3s ease-in-out;
          }

          .tab-links:hover {
            color: #ffcc00;
          }

          .active-link {
            border-bottom: 2px solid #ffcc00;
            color: #ffcc00;
          }

          .tab-content {
            margin-top: 15px;
            font-size: 1.1rem;
          }
        `}
      </style>
    </div>
  );
}

export default AboutMe;
