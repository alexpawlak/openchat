import React, { useState } from 'react';
import LLMSelector from './LLMSelector';
import { fetchLLMResponse } from '../api/llm';
import './InputBar.css';

const InputBar = ({ onSend, provider, apiKey }) => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setError('');
    try {
      onSend({ sender: 'user', text: input });
      const response = await fetchLLMResponse(input, provider, apiKey);
      onSend({ sender: 'bot', text: response });
    } catch (err) {
      setError('Error fetching response.');
      onSend({ sender: 'bot', text: 'Sorry, there was an error.' });
    }
    setLoading(false);
    setInput('');
  };

  return (
    <form className="input-bar" aria-label="Chat Input" autoComplete="off" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask anything..."
        aria-label="Ask anything"
        className="chat-input"
        value={input}
        onChange={e => setInput(e.target.value)}
        disabled={loading}
      />
      <LLMSelector disabled={loading} />

      <button type="submit" className="send-btn" aria-label="Send" disabled={loading}>
        {loading ? '...' : 'Send'}
      </button>
      {error && <span className="error-msg" role="alert">{error}</span>}
    </form>
  );
};

export default InputBar;
