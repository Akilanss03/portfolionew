import React from "react";
import { FaCode, FaCrop, FaAppStoreIos } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={50} className="icon" />,
    title: "Web Design",
    description:
      "I specialize in creating visually appealing, user-friendly, and responsive websites that ensure seamless user experiences.",
  },
  {
    icon: <FaCrop size={50} className="icon" />,
    title: "UI Design",
    description:
      "My expertise lies in designing intuitive interfaces with modern UI trends, ensuring ease of use and accessibility.",
  },
  {
    icon: <FaAppStoreIos size={50} className="icon" />,
    title: "App Design",
    description:
      "I design mobile applications that are interactive, engaging, and optimized for smooth performance across all devices.",
  },
];

function ServicesCard() {
  return (
    <section id="services" className="services-section">
      <div className="overlay"></div>

      <div className="container">
        <h1 className="section-title">My Services</h1>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-container">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="learn-more">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .services-section {
            position: relative;
            background: url('https://wallpaperaccess.com/full/1657789.jpg') no-repeat center center/cover;
            padding: 100px 0;
            color: white;
            text-align: center;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
          }

          .container {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .section-title {
            font-size: 3rem;
            font-weight: bold;
            color: #ffcc00;
            margin-bottom: 50px;
            text-transform: uppercase;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            justify-content: center;
          }

          .service-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
            text-align: center;
            overflow: hidden;
          }

          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
          }

          .icon-container {
            font-size: 50px;
            margin-bottom: 20px;
          }

          .service-title {
            font-size: 1.8rem;
            font-weight: bold;
            margin-bottom: 15px;
            color: white;
          }

          .service-description {
            font-size: 1.2rem;
            color: #ddd;
            margin-bottom: 20px;
          }

          .learn-more {
            font-size: 1.2rem;
            color: #ffcc00;
            font-weight: bold;
            text-decoration: none;
            position: relative;
          }

          .learn-more::after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background: #ffcc00;
            transition: width 0.3s;
            margin-top: 5px;
          }

          .learn-more:hover::after {
            width: 100%;
          }
        `}
      </style>
    </section>
  );
}

export default ServicesCard;
