import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="logo">Elite .Devs</div>
          <div className="nav-items">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact Us</a>
            <a href="">Portfolio</a>
          </div>
        </div>
      </nav>
      <div className="hero">
        <div className="overlay">
          <h1>Hello React World</h1>
          <p>Are you ready for me?</p>
        </div>
      </div>
    </div>
  );
}

export default App;
