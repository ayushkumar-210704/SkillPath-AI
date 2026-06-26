import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const CTABanner = () => {
  return (
    <section style={{ padding: "60px 20px" }}>
      <div className="container">
        <div
          style={{
            background: "#007bff",
            color: "#fff",
            borderRadius: "12px",
            padding: "50px 30px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "20px",
            }}
          >
            Ready to Start Your Learning Journey?
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto 30px",
              lineHeight: "1.8",
              fontSize: "1.1rem",
            }}
          >
            Explore quality learning resources, improve your skills, and take
            the next step toward achieving your academic and career goals.
          </p>

          <Link to="/contact">
            <button className="btn btn-primary">
              Contact Us <FiArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;