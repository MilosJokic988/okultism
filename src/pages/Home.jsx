import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Underground</h1>
        <p>
          "Discover the secrets of demons, ancient forces, and occult knowledge.
Explore everything we have gathered from darkness and shadows."
        </p>

        <div className="home-buttons">
          <button onClick={() => navigate("/demonology")}>Demonology</button>
          <button onClick={() => navigate("/signs-and-symbols")}>Knowledge and Symbols</button>
          <button onClick={() => navigate("/alchemy")}>Alchemy</button>
          <button onClick={() => navigate("/rituals")}>Rituals</button>
          <button onClick={() => navigate("/seals")}>Seals</button>
        </div>
      </div>

      <footer className="home-footer">
        <p>© 2025 | Ocullt worlds | Made with 🔥 in React</p>
      </footer>
    </div>
  );
};

export default Home;
