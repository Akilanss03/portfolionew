import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import profilePic from "./assets/WhatsApp Image 2025-02-28 at 13.21.06_ccdd6b4d.jpg";  

function Main() {
  return (
    <>
      <div id="main" style={{
        background: "url('https://wallpaperaccess.com/full/1657789.jpg') no-repeat center center/cover",
        height: "100vh",
        width: "100%",
        position: "relative",
        top: "0",
        left: "0"
      }}>

        {/* Navbar */}
        <nav style={{ 
          position: "absolute", 
          width: "100%", 
          top: "0" 
        }} 
        className="navbar navbar-expand-lg navbar-light bg-transparent px-4">
          <a style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#000" }} 
             className="navbar-brand" 
             href="#">AKILAN S S</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-dark" href="#main">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#services">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#portfolio">Innovix</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Content Section */}
        <div style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column"
        }}>
          <img src={profilePic} alt="Profile" style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "4px solid white",
            objectFit: "cover"
          }} />

          <h1 style={{ 
            fontWeight: "bold", 
            fontSize: "4rem", 
            color: "#000", 
            marginTop: "20px" 
          }}>
            UI <span style={{ color: "yellow", fontWeight: "bold" }}>Designer</span>
          </h1>

          <p style={{ 
            fontSize: "1.5rem", 
            color: "#000" 
          }}>
            Hi, I am <span style={{ color: "yellow", fontWeight: "bold" }}>Akilan</span> from Ariyalur
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
