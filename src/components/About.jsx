const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--cyan)' }}>
          ABOUT ME<span style={{ color: 'var(--pink)' }}>.</span>
        </h2>
        <div className="row g-4">
          <div className="col-lg-7">
            <div className="about-card">
              <p style={{ color: '#ccc', lineHeight: 1.9, marginBottom: '16px' }}>
                Hey! I'm a <span className="highlight">final year B.Tech student,</span> Aspring Software Development Engineer (SDE) with hands-on experience in full-stack web development using React.js,
                      JavaScript (ES6+), HTML5, CSS3, and Bootstrap. Proficient in Data Structures & Algorithms with 100+ problems solved on
                      LeetCode. Built and deployed 3+ real-world projects including an e-commerce platform and task management system.
                      Experienced in RESTful API integration, component-based architecture, and Agile workflows. Seeking a software engineering
                      Full-time role to contribute to scalable, high-impact products.

              </p>
              <p style={{ color: '#ccc', lineHeight: 1.9, marginBottom: '16px' }}>
                I've worked on projects involving <span className="highlight">real-time apps</span>,{' '}
                <span className="highlight">REST APIs</span>, and{' '}
                <span className="highlight">responsive web design</span>. I love the challenge of
                turning a blank screen into something people actually enjoy using.
              </p>
              <p style={{ color: '#ccc', lineHeight: 1.9 }}>
                When I'm not coding, I'm exploring new tech, contributing to open source,
                or sketching out my next project idea.
              </p>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-card h-100">
              <p style={{ color: 'var(--yellow)', fontWeight: 700, marginBottom: '16px', fontSize: '0.85rem', letterSpacing: '1px' }}>
                QUICK FACTS
              </p>
              {[
                { emoji: '🎓', label: 'B.Tech CSE, 2023-2027' },
                { emoji: '📍', label: 'Noida, India' },
                { emoji: '💼', label: 'Open to Internships & Jobs' },
                { emoji: '🚀', label: '10+ Projects Built' },
                { emoji: '☕', label: 'Fuelled by music & code' },
              ].map(({ emoji, label }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '10px 0', borderBottom: '1px solid #222', fontSize: '0.9rem', color: '#ccc'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>{emoji}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
