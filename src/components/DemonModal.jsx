import React from "react";
import "./DemonModal.css";

const DemonModal = ({ demon, onClose }) => {
  if (!demon) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        <h2>{demon.name}</h2>
        <h4>{demon.title}</h4>
        <p><strong>Domain:</strong> {demon.domain}</p>
        <p><strong>Legions:</strong> {demon.legions}</p>
        <p>{demon.description}</p>
        {/* Buduće mesto za animacije, simboliku, itd. */}
      </div>
    </div>
  );
};

export default DemonModal;
