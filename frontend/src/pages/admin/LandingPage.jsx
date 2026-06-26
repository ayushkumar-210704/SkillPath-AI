import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import HeroSection from "../../components/landing/HeroSection";
import FeatureCard from "../../components/landing/FeatureCard";
import TestimonialSection from "../../components/landing/TestimonialSection";
import CTABanner from "../../components/landing/CTABanner";

const features = [
  {
    icon: "📚",
    title: "Interactive Courses",
    description:
      "Learn through engaging lessons designed to improve your knowledge and practical skills.",
    color: "#007bff",
  },
  {
    icon: "💻",
    title: "Hands-on Projects",
    description:
      "Build real-world projects to strengthen your understanding and gain practical experience.",
    color: "#28a745",
  },
  {
    icon: "🎓",
    title: "Expert Guidance",
    description:
      "Learn from experienced instructors who provide support throughout your learning journey.",
    color: "#ffc107",
  },
  {
    icon: "📈",
    title: "Skill Development",
    description:
      "Track your learning progress and continuously improve your technical and professional skills.",
    color: "#dc3545",
  },
];

const steps = [
  {
    step: "01",
    title: "Choose a Course",
    desc: "Browse a variety of learning resources and choose the course that fits your goals.",
  },
  {
    step: "02",
    title: "Start Learning",
    desc: "Study using easy-to-understand lessons and practical examples.",
  },
  {
    step: "03",
    title: "Complete Projects",
    desc: "Apply your knowledge by building projects and improving your practical skills.",
  },
  {
    step: "04",
    title: "Achieve Your Goals",
    desc: "Complete your learning journey and prepare yourself for future opportunities.",
  },
];

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      <main>
        <HeroSection />

        {/* Features Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Features</h2>

            <p className="section-subtitle">
              Everything you need to enhance your learning experience.
            </p>

            <div className="grid-4">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          className="section"
          style={{ background: "var(--color-bg-secondary)" }}
        >
          <div className="container">
            <h2 className="section-title">How It Works</h2>

            <p className="section-subtitle">
              Learning with SkillPath is simple.
            </p>

            <div className="grid-4">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="card"
                  style={{ textAlign: "center" }}
                >
                  <h1>{item.step}</h1>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialSection />

        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;