const skillGroups = [
  {
    category: 'Frontend',
    color: 'var(--cyan)',
    skills: [
      { name: 'React.js', cls: 's-cyan' },
      { name: 'Bootstrap', cls: 's-purple' },
      { name: 'HTML5', cls: 's-orange' },
      { name: 'CSS3', cls: 's-cyan' },
      { name: 'JavaScript', cls: 's-yellow' },
    ],
  },
  {
    category: 'Backend',
    color: 'var(--green)',
    skills: [
      { name: 'Node.js', cls: 's-green' },
      { name: 'Express.js', cls: 's-green' },
      { name: 'REST APIs', cls: 's-yellow' },
      { name: 'MongoDB', cls: 's-green' },
      { name: 'SQL', cls: 's-cyan' },
    ],
  },
  {
    category: 'Tools & Others',
    color: 'var(--pink)',
    skills: [
      { name: 'Git & GitHub', cls: 's-pink' },
      { name: 'VS Code', cls: 's-cyan' },
      { name: 'Postman', cls: 's-orange' },
      { name: 'Figma', cls: 's-purple' },
      { name: 'Vercel', cls: 's-yellow' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--green)' }}>
          SKILLS<span style={{ color: 'var(--orange)' }}>.</span>
        </h2>
        <div className="row g-4">
          {skillGroups.map((group) => (
            <div className="col-md-4" key={group.category}>
              <p style={{
                fontWeight: 700, fontSize: '0.8rem', letterSpacing: '2px',
                color: group.color, marginBottom: '16px', textTransform: 'uppercase'
              }}>
                {group.category}
              </p>
              <div>
                {group.skills.map((s) => (
                  <div key={s.name} className={`skill-badge ${s.cls}`}>
                    <span>◆</span> {s.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
