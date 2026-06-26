const testimonials = [
  {
    name: "Priya Sharma",
    role: "Web Development Student",
    text: "SkillPath helped me improve my web development skills through easy-to-follow lessons and practical projects.",
    avatar: "PS",
  },
  {
    name: "Arjun Mehta",
    role: "Computer Science Student",
    text: "The platform made learning simple and enjoyable. The projects helped me gain confidence in programming.",
    avatar: "AM",
  },
  {
    name: "Fatima Khan",
    role: "Software Engineering Student",
    text: "The structured learning path and quality content helped me prepare for internships and technical interviews.",
    avatar: "FK",
  },
];

const TestimonialSection = () => (
  <section
    className="section"
    style={{ background: "var(--color-bg-secondary)" }}
  >
    <div className="container">
      <h2 className="section-title">What Our Students Say</h2>

      <p className="section-subtitle">
        Hear from students who have improved their skills with SkillPath.
      </p>

      <div className="grid-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="card"
            style={{ position: "relative" }}
          >
            <div
              style={{
                fontSize: "2rem",
                color: "var(--color-primary)",
                marginBottom: "var(--space-4)",
                opacity: 0.5,
              }}
            >
              "
            </div>

            <p
              style={{
                fontSize: "var(--text-sm)",
                lineHeight: 1.8,
                marginBottom: "var(--space-6)",
                fontStyle: "italic",
              }}
            >
              {testimonial.text}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-3)",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--color-primary-glow)",
                  border: "2px solid var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "var(--text-sm)",
                }}
              >
                {testimonial.avatar}
              </div>

              <div>
                <div style={{ fontWeight: 700 }}>
                  {testimonial.name}
                </div>

                <div
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;