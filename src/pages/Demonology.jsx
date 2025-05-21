import React, { useState } from "react";
import demonLords  from "../data/demonology";
import { useNavigate } from "react-router-dom";
import DemonModal from "../components/DemonModal"; // 👈 dodaj
import './Demonology.css';

const Demonology = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [selectedDemon, setSelectedDemon] = useState(null); // 👈 za modal

  const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  const filteredDemons = demonLords.filter((demon) => {
    const matchesSearch = demon.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain === "All" || demon.domain === selectedDomain;
    return matchesSearch && matchesDomain;
  });

  const uniqueDomains = ["All", ...new Set(demonLords.map((d) => d.domain))];

  return (
    <div className="demonology-container">
      <h1>Demonology</h1>
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      <div className="filters">
        <input
          type="text"
          placeholder="Search demon name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="domain-select"
        >
          {uniqueDomains.map((domain, index) => (
            <option key={index} value={domain}>{domain}</option>
          ))}
        </select>
      </div>

      <div className="demons-grid">
        {filteredDemons.map((demon, index) => (
          <div
            key={index}
            className="demon-card"
            onMouseEnter={() => playSound(demon.sound)}
            onClick={() => setSelectedDemon(demon)} // 👈 klik otvara modal
          >
            <h2>{demon.name}</h2>
            <h4>{demon.title}</h4>
            <p><strong>Domain:</strong> {demon.domain}</p>
            <p><strong>Legions:</strong> {demon.legions}</p>
            <p>{demon.description}</p>
          </div>
        ))}
        {filteredDemons.length === 0 && (
          <p className="no-results">No demons match your search/filter.</p>
        )}
      </div>

      {/* Modal prikaz */}
      <DemonModal demon={selectedDemon} onClose={() => setSelectedDemon(null)} />
    </div>
  );
};

export default Demonology;
