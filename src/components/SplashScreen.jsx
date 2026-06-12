const SplashScreen = () => {
  return (
    <div className="splash">
      <div className="splash-title">WELCOME!</div>
      <div className="splash-terminal">
        <div className="line">&gt; Booting portfolio.exe...</div>
        <div className="line">&gt; Loading awesome projects...</div>
        <div className="line">&gt; Connecting to creativity...</div>
        <div className="line">&gt; Ready! Let's go! <span className="cursor"></span></div>
      </div>
    </div>
  );
};

export default SplashScreen;
