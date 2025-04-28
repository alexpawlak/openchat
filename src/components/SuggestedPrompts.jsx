import React from 'react';
import './SuggestedPrompts.css';

const prompts = [
  'Summarize this article',
  'Write an email draft',
  'Help me debug code',
  'Explain a concept simply'
];

const SuggestedPrompts = ({ onSend }) => {
  const handleClick = (prompt) => {
    if (typeof onSend === 'function') {
      onSend({ sender: 'user', text: prompt });
    }
  };
  return (
    <div className="suggested-prompts" aria-label="Suggested Prompts">
      {prompts.map((prompt, idx) => (
        <button
          key={idx}
          className="prompt-btn"
          onClick={() => handleClick(prompt)}
          aria-label={`Use suggestion: ${prompt}`}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
};

export default SuggestedPrompts;
