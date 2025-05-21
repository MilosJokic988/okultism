import React from "react";
import { useNavigate } from "react-router-dom";
import './Alchemy.css';

const Alchemy = () => {
  const navigate = useNavigate();

  return (
    <div className="alchemy-container">
      <h1>Alchemy - Secrets of Transformation</h1>
      <p>
        Alchemy is an ancient science and mystical art of transforming matter, seeking the Philosopher's Stone, and
        the transformation of the soul.
      </p>

      <section className="elements-section">
        <h2>The Four Elements</h2>
        <ul>
          <li><strong>Earth</strong> - stability and materiality</li>
          <li><strong>Fire</strong> - energy and transformation</li>
          <li><strong>Water</strong> - empathy and intuition</li>
          <li><strong>Air</strong> - intelligence and spirit</li>
        </ul>
      </section>

      <section className="symbols-section">
        <h2>Key Symbols</h2>
        <ul>
          <li>The Philosopher's Stone - symbol of perfection and immortality</li>
          <li>Ouroboros - a snake eating its own tail, symbol of eternity</li>
          <li>Transmutation - metamorphosis of matter and spirit</li>
        </ul>
      </section>

      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Alchemy;
