import { Link } from "react-router-dom";
import { FiZap, FiGithub, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#f5f5f5",
        borderTop: "1px solid #ddd",
        padding: "40px 20px",
        marginTop: "40px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {/* Logo & Description */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            <FiZap />
            <span>SkillPath</span>
          </div>

          <p style={{ maxWidth: "300px", lineHeight: "1.6" }}>
            A learning platform designed to help students improve their skills
            through quality educational resources.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3>Quick Links</h3>

          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3>Follow Us</h3>

          <div
            style={{
              display: "flex",
              gap: "15px",
              fontSize: "24px",
            }}
          >
            <a href="#">
              <FiGithub />
            </a>

            <a href="#">
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <p
        style={{
          textAlign: "center",
          margin: 0,
        }}
      >
        © 2026 SkillPath. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;