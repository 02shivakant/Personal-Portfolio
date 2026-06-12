const projects = [
  {
    title: 'Developer Productivity MVP',
    desc: 'A full-stack shopping platform with cart, authentication, and Razorpay payment integration. Built with React and Node.js.',
    tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
    techColors: ['s-cyan', 's-green', 's-green', 's-purple'],
    github: 'https://the-product-works-in-assignment-r4k.vercel.app/',
    live: 'https://the-product-works-in-assignment-r4k.vercel.app/',
  },
  {
    title: 'E-commerce',
    desc: 'Real-time messaging app using Socket.io. Supports multiple rooms, online status, and message history.',
    tech: ['React', 'Socket.io', 'Express', 'CSS'],
    techColors: ['s-cyan', 's-yellow', 's-green', 's-pink'],
    github: 'https://shop-verse-e-commerce.vercel.app/',
    live: 'https://shop-verse-e-commerce.vercel.app/',
  },
  {
    title: 'Kanban Task Board',
    desc: 'A drag-and-drop Kanban board to manage tasks. Features user auth, priorities, and deadline reminders.',
    tech: ['React', 'Bootstrap', 'Node.js', 'MySQL'],
    techColors: ['s-cyan', 's-purple', 's-green', 's-cyan'],
    github: 'https://github.com',
    live: 'https://kanban-task-board-w38w.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--pink)' }}>
          PROJECTS<span style={{ color: 'var(--yellow)' }}>.</span>
        </h2>
        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="project-card">
                <div className="project-card-header">
                  <span className="project-num">0{i + 1}</span>
                  <div className="project-links">
                    <a href={p.github} target="_blank" rel="noreferrer" className="project-link-btn btn-gh">
                      GH ↗
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="project-link-btn btn-live">
                        LIVE ↗
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-title">{p.title}</div>
                  <p className="project-desc">{p.desc}</p>
                  <div>
                    {p.tech.map((t, j) => (
                      <span key={t} className={`tech-tag ${p.techColors[j]}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
