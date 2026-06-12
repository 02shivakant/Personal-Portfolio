const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left: Text */}
          <div className="col-lg-7 fade-in-up">
            <div className="hero-tag">✦ Available for Internships & JOBS</div>
            <h1 className="hero-name">SHIVAKANT PANDEY</h1>
            <h2 className="hero-role">
              Software <span>Developer()</span>
            </h2>
            <p className="hero-desc">
              Final year B.Tech student passionate about building cool things
              for the web. I love clean code, creative UIs, and turning ideas
              into real products.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn-brutalist btn-yellow"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                View Projects ↓
              </a>
              <a href="/resume.pdf" className="btn-brutalist btn-outline" target="_blank" rel="noreferrer">
                Download CV ↗
              </a>
            </div>
          </div>

          {/* Right: Card */}
          <div className="col-lg-5">
            <div className="avatar-card">
              
              <div className="avatar-placeholder mx-auto">shiva</div>

              <div className="status-badge">● Open to Work</div>

              <div className="mt-3 text-start">
                <div className="info-tag">
                  <span className="tag-label">[LOCATION]</span>
                  <span style={{ color: '#ccc', fontSize: '0.85rem' }}>Noida , India</span>
                </div>
                <div className="info-tag">
                  <span className="tag-label">[STATUS]</span>
                  <span style={{ color: '#ccc', fontSize: '0.85rem' }}>Final Year B.Tech</span>
                </div>
                <div className="info-tag">
                  <span className="tag-label">[STACK]</span>
                  <span style={{ color: '#ccc', fontSize: '0.85rem' }}>MERN Stack</span>
                </div>
              </div>

              <div className="social-row">
                <a href="https://github.com/02shivakant" target="_blank" rel="noreferrer" className="social-btn" title="GitHub">GH</a>
                <a href="https://www.linkedin.com/in/shivakant-pandey-5a2b56270/" target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">IN</a>
                <a href="shivakant4582@gmail.com" className="social-btn" title="Email">@</a>
              </div>

              <div className="mt-3 d-flex flex-column gap-2">
                <button className="btn-brutalist btn-yellow w-100"
                  style={{ textAlign: 'center' }}
                  onClick={() => window.open('/resume.pdf', '_blank')}>
                  ↓ DOWNLOAD RESUME
                </button>
                <button className="btn-brutalist btn-outline w-100"
                  style={{ textAlign: 'center' }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  ✉ CONTACT ME
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
