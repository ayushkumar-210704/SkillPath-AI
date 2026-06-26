import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setSuccessMessage("Your message has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <main style={{ padding: "60px 20px" }}>
        <section
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              textAlign: "center",
              marginBottom: "30px",
              lineHeight: "1.7",
            }}
          >
            We'd love to hear from you. If you have any questions,
            suggestions, or feedback, please fill out the form below and
            we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label>Message</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "5px",
                  resize: "vertical",
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Send Message
            </button>
          </form>

          {successMessage && (
            <p
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "20px",
                fontWeight: "bold",
              }}
            >
              {successMessage}
            </p>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;