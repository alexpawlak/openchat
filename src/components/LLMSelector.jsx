import React from 'react';

const LLMSelector = () => (
  <select className="llm-selector" aria-label="Select LLM Model">
    <option value="huggingface">Hugging Face</option>
    <option value="openrouter">OpenRouter</option>
    {/* Add more free LLM providers here */}
  </select>
);

export default LLMSelector;
