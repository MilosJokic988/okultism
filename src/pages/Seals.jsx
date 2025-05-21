import React from "react";
import { useNavigate } from "react-router-dom";
import './Seals.css';

const seals = [
  {
    name: "Seal of Lucifer",
    description: "Symbolizes pride, enlightenment and rebellion against divine order. Often used in rituals invoking inner power.",
    image: "/seals/lucifer.png"
  },
  {
    name: "Seal of Beelzebub",
    description: "Represents gluttony and decay. Used to call upon destructive forces and to cleanse spiritual blockages.",
    image: "/seals/beelzebub.png"
  },
  {
    name: "Seal of Asmodeus",
    description: "Associated with lust and passion. A powerful talisman for attraction and influence over desires.",
    image: "/seals/asmodeus.png"
  },
  {
    name: "Seal of Leviathan",
    description: "Embodies envy and chaos. Utilized in rituals involving water and transformation.",
    image: "/seals/leviathan.png"
  },
  {
    name: "Seal of Paimon",
    description: "Seal of knowledge and secrets. Used to summon wisdom and reveal hidden truths.",
    image: "/seals/paimon.png"
  }
];

const Seals = () => {
  const navigate = useNavigate();

  return (
    <div className="seals-container">
      <h1>Occult Seals</h1>
      <p>Powerful sigils that channel demonic forces and hidden energies.</p>

      <div className="seals-grid">
        {seals.map((seal, idx) => (
          <div key={idx} className="seal-card">
            <img src={seal.image} alt={`${seal.name} Seal`} className="seal-image" />
            <h2>{seal.name}</h2>
            <p>{seal.description}</p>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Seals;
