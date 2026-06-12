const education = [
  {
    year: '2023 – 2027',
    degree: 'B.Tech in Computer Science',
    school: 'Mangalmay Institute of Engineering & Technology',
    detail: 'CGPA: 8.2/10 · Relevant coursework: DSA, DBMS, OS, Web Dev',
    color: 'var(--yellow)',
  },
  {
    year: '2022',
    degree: 'Class XII (PCM)',
    school: 'MAVN',
    detail: 'Percentage: 72% · Subjects: Physics, Chemistry, Maths',
    color: 'var(--cyan)',
  },
  {
    year: '2020',
    degree: 'Class X',
    school: 'MAVN',
    detail: 'Percentage: 92%',
    color: 'var(--pink)',
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--yellow)' }}>
          EDUCATION<span style={{ color: 'var(--cyan)' }}>.</span>
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {education.map((edu, i) => (
              <div className="edu-card" key={i}>
                <div className="edu-year">{edu.year}</div>
                <div className="edu-degree" style={{ color: edu.color }}>{edu.degree}</div>
                <div className="edu-school">{edu.school}</div>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
