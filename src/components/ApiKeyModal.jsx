import React, { useState } from 'react';
import './ApiKeyModal.css';

const ApiKeyModal = ({ isOpen, onClose, onSave, initialKey }) => {
  const [key, setKey] = useState(initialKey || '');

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(key);
    onClose();
  };

  return (
    <div className="modal-backdrop" tabIndex={-1} aria-modal="true" role="dialog">
      <div className="modal" role="document">
        <h2>Set Hugging Face API Key</h2>
        <input
          type="text"
          className="api-key-input"
          value={key}
          onChange={e => setKey(e.target.value)}
          placeholder="Enter your Hugging Face API key"
          aria-label="Hugging Face API key"
        />
        <div className="modal-actions">
          <button onClick={handleSave} className="save-btn">Save</button>
          <button onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
        <p style={{ fontSize: '0.95rem', marginTop: '1rem', color: '#4a5568' }}>
          Your key is stored in your browser and never sent to our servers.
        </p>
      </div>
    </div>
  );
};

export default ApiKeyModal;
