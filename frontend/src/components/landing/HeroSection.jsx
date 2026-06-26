import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "60px 20px",
        background: "#f8f9fa",
      }}
    >
      <div style={{ maxWidth: "700px" }}>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Welcome to <span style={{ color: "#007bff" }}>SkillPath</span>
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            marginBottom: "30px",
          }}
        >
          SkillPath is an online learning platform designed to help students
          develop new skills through structured courses, practical projects,
          and expert guidance.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link to="/contact">
            <button className="btn btn-primary">
              Get Started <FiArrowRight />
            </button>
          </Link>

          <Link to="/about">
            <button className="btn btn-secondary">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;