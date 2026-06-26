import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#007bff",
      }}
    >
      <h2 style={{ color: "#fff", margin: 0 }}>SkillPath</h2>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "25px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: "#fff",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: "#fff",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: "#fff",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;