import React from "react";
import { useNavigate } from "react-router-dom";
import './Rituals.css';

const rituals = [
  {
    name: "Summoning Circle",
    description: "A sacred circle drawn with salt or chalk, used to protect the practitioner and contain the summoned entity.",
    steps: [
      "Draw a perfect circle on the ground.",
      "Place protective symbols around the circle.",
      "Light candles at the cardinal points.",
      "Invoke the spirit using the correct incantation."
    ]
  },
  {
    name: "Blood Pact",
    description: "A binding ritual where participants share their blood to seal an unbreakable agreement.",
    steps: [
      "Cleanse the area with sage smoke.",
      "Make small cuts on fingers using a ceremonial dagger.",
      "Press wounds together while reciting the pact.",
      "Seal the pact with a symbolic gesture."
    ]
  },
  {
    name: "Night of the Full Moon",
    description: "A ritual to harness lunar energies for divination and empowerment.",
    steps: [
      "Prepare an altar with silver and white candles.",
      "Meditate under the full moon’s light.",
      "Use a crystal ball or tarot cards for insight.",
      "Charge talismans with moonlight energy."
    ]
  },
  {
    name: "Sigil Creation",
    description: "Designing and charging a symbol to manifest a specific intent.",
    steps: [
      "Write down your desire clearly.",
      "Simplify the phrase into a unique glyph.",
      "Draw the sigil on parchment or an object.",
      "Charge the sigil with focused energy."
    ]
  },
  {
    name: "Spirit Invocation",
    description: "Calling upon spirits or entities to seek guidance or power.",
    steps: [
      "Prepare an offering for the spirit.",
      "Light incense and ring bells.",
      "Recite invocation chants.",
      "Open a trance to communicate."
    ]
  }
];

const Rituals = () => {
  const navigate = useNavigate();

  return (
    <div className="rituals-container">
      <h1>Rituals of the Occult</h1>
      <p>Explore the dark ceremonies that bind the veil between worlds.</p>

      <div className="rituals-list">
        {rituals.map((ritual, idx) => (
          <div key={idx} className="ritual-card">
            <h2>{ritual.name}</h2>
            <p>{ritual.description}</p>
            <ol>
              {ritual.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default Rituals;
