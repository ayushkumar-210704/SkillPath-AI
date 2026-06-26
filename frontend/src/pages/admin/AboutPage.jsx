import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const features = [
  {
    title: "Interactive Learning",
    description:
      "Access engaging learning materials designed to improve your knowledge and practical skills.",
    emoji: "📚",
  },
  {
    title: "Practical Projects",
    description:
      "Apply what you learn by working on real-world projects and activities.",
    emoji: "💻",
  },
  {
    title: "Expert Guidance",
    description:
      "Learn from experienced instructors and improve your understanding step by step.",
    emoji: "🎓",
  },
  {
    title: "Skill Development",
    description:
      "Build technical and professional skills to prepare for academic and career success.",
    emoji: "📈",
  },
];

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section
          style={{
            padding: "60px 20px",
            textAlign: "center",
            background: "#f8f9fa",
          }}
        >
          <div className="container" style={{ maxWidth: "800px" }}>
            <h1>About SkillPath</h1>

            <p
              style={{
                marginTop: "20px",
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              SkillPath is an online learning platform created to help students
              improve their knowledge through quality educational resources,
              practical learning, and skill development.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="section">
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2>Our Purpose</h2>

            <p
              style={{
                lineHeight: "1.8",
                marginTop: "20px",
              }}
            >
              Our goal is to provide an easy-to-use learning platform where
              students can explore courses, build projects, and continuously
              improve their skills through structured learning.
            </p>

            <h2 style={{ marginTop: "50px" }}>Key Features</h2>

            <div
              className="grid-2"
              style={{ marginTop: "30px" }}
            >
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="card"
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>
                    {feature.emoji}
                  </span>

                  <div>
                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;