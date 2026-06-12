const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p style={{ marginBottom: '6px' }}>
          Built with <span>music</span> using React + Bootstrap
        </p>
        <p>© {new Date().getFullYear()} <span>shiva</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
