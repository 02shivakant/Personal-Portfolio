const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar-custom">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
        <span className="navbar-brand-text">PORTFOLIO</span>
        <div className="d-flex flex-wrap gap-2">
          {['about', 'education', 'skills', 'projects'].map((item) => (
            <button
              key={item}
              className="nav-pill"
              onClick={() => scrollTo(item)}
            >
              {item.toUpperCase()}
            </button>
          ))}
          <button
            className="nav-pill contact-pill"
            onClick={() => scrollTo('contact')}
          >
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
