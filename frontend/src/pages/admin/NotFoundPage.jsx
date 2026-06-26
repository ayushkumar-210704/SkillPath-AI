import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        background: "#f8f9fa",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "6rem",
            color: "#007bff",
            marginBottom: "10px",
          }}
        >
          404
        </h1>

        <h2 style={{ marginBottom: "15px" }}>
          Page Not Found
        </h2>

        <p
          style={{
            maxWidth: "450px",
            margin: "0 auto 30px",
            lineHeight: "1.7",
          }}
        >
          Sorry! The page you are looking for does not exist or has been moved.
        </p>

        <Link to="/">
          <button
            style={{
              padding: "12px 25px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
            }}
          >
            <FiHome />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;