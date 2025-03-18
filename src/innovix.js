import React from "react";
import group1 from "./assets/group1.jpeg";
import group2 from "./assets/group2.jpeg";
import group3 from "./assets/group3.jpeg";

const portfolioItems = [
  {
    img: group1,
    title: "TNStartup",
    description: "INNOVIX startup meet has been conducted by TNStartup.",
  },
  {
    img: group2,
    title: "NIT",
    description: "NIT meet for pitching our projects and for more reference.",
  },
  {
    img: group3,
    title: "PROJECT DAY",
    description: "INNOVIX projects have been displayed on Project Day at SRM.",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h1 className="sub-title">INNOVIX</h1>

        <div className="work-list">
          {portfolioItems.map((item, index) => (
            <div key={index} className="work">
              <img src={item.img} alt={item.title} />
              <div className="layer">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <a href="#"><i className="fa-solid fa-link"></i></a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .portfolio-section {
             background: url('https://wallpaperaccess.com/full/3239480.jpg') no-repeat center center/cover;
            min-height: 100vh;
            display: flex;
            align-items: center;
            color: white;
          }

          .sub-title {
            font-size: 3rem;
            font-weight: bold;
            color: #ffcc00;
            margin-bottom: 50px;
            text-transform: uppercase;
          }

          .work-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            justify-content: center;
            padding: 0 20px;
          }

          .work {
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .work img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.3s ease-in-out;
          }

          .work:hover img {
            transform: scale(1.1);
          }

          .layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.4s ease-in-out, transform 0.3s ease-in-out;
          }

          .work:hover .layer {
            opacity: 1;
            transform: translateY(0);
          }

          .layer h5 {
            font-size: 1.8rem;
            margin-bottom: 10px;
            color: #ffcc00;
          }

          .layer p {
            font-size: 1.1rem;
            color: #ddd;
            margin-bottom: 15px;
            text-align: center;
            max-width: 80%;
          }

          .layer a {
            font-size: 1.5rem;
            color: #ffcc00;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .layer a:hover {
            color: #fff;
          }
        `}
      </style>
    </section>
  );
}

export default Portfolio;
