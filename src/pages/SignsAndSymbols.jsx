import React from "react";
import { useNavigate } from "react-router-dom";
import './SignsAndSymbols.css';

const symbols = [
  {
    name: "Pentagram",
    description: "Petokraka zvezda koja simbolizuje zaštitu, ravnotežu i četiri elementa sa duhom u centru."
  },
  {
    name: "Ankh",
    description: "Egipatski simbol života i besmrtnosti."
  },
  {
    name: "Eye of Horus",
    description: "Simbol zaštite, zdravlja i moći."
  },
  {
    name: "Triquetra",
    description: "Keltski simbol trojstva: života, smrti i ponovnog rađanja."
  },
  {
    name: "Hexagram",
    description: "Zvezda od šest krakova, simbol jedinstva suprotnosti i božanske harmonije."
  },
  {
    name: "Caduceus",
    description: "Simbol medicine i ravnoteže, sa dva zmijska štapa."
  },
  {
    name: "Sigil of Lucifer",
    description: "Simbol povezan sa Lucifernim arhetipom i slobodom."
  },
  {
    name: "Alchemy Symbol for Gold",
    description: "Simbolizuje savršenstvo i pročišćenje."
  },
  {
    name: "Eye of Providence",
    description: "Oko u trouglu koje simbolizuje božansko nadgledanje."
  }
];

const SignsAndSymbols = () => {
  const navigate = useNavigate();

  return (
    <div className="symbols-container">
      <h1>Signs & Symbols</h1>
      <p>Okultni simboli i njihova značenja kroz vekove.</p>

      <div className="symbols-grid">
        {symbols.map((symbol, index) => (
          <div key={index} className="symbol-card">
            <h3>{symbol.name}</h3>
            <p>{symbol.description}</p>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
};

export default SignsAndSymbols;
