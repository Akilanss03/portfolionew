import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <section id="contact">
      <div className="contact-container">
        <div className="contact-card">
          <h2>Contact Me</h2>
          <div>
            <a href="https://instagram.com/_xoxo_akil" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaInstagram size={30} /> Instagram
            </a>
            <a href="https://wa.me/9344704161" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaWhatsapp size={30} /> WhatsApp
            </a>
          </div>
        </div>

        <div className="feedback-form">
          <div>
            <h2>Connect Me</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Feedback
              </button>
            </form>
          </div>
        </div>
      </div>
</section>
      {/* Style added below the component */}
      <style>{`
        .contact-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          justify-content: center;
          align-items: center;
          background: url("https://wallpaperaccess.com/full/3239480.jpg") no-repeat center center/cover;
          padding: 20px;
        }

        .contact-card, .feedback-form {
          background: rgba(255, 255, 255, 0.1); /* Transparent background */
          backdrop-filter: blur(10px); /* Blur effect for better readability */
          padding: 40px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          width: 60%;
          text-align: center;
          transition: background 0.3s;
        }

        .contact-card:hover, .feedback-form:hover {
          background: rgba(255, 255, 255, 0.2); /* Slightly less transparent on hover */
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          color: #555;
          text-decoration: none;
          margin-bottom: 15px;
          transition: color 0.3s;
        }

        .contact-link:hover {
          color: #007bff;
        }

        .feedback-form form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 16px;
        }

        .form-textarea {
          resize: none;
        }

        .submit-btn {
          padding: 12px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .submit-btn:hover {
          background: #0056b3;
        }
      `}</style>
    </>
  );
};

export default ContactSection;
