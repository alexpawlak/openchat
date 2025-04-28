import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import InputBar from './components/InputBar';
import SuggestedPrompts from './components/SuggestedPrompts';
import './App.css';
import ApiKeyModal from './components/ApiKeyModal';

function App() {
  const [view, setView] = useState('chat');
  // Chat history: array of sessions { id, messages, createdAt }
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('openchat_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('openchat_messages');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [provider, setProvider] = useState('huggingface');
  // Use localStorage for API key
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('openchat_api_key') || '');
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Save messages to localStorage on change
  React.useEffect(() => {
    localStorage.setItem('openchat_messages', JSON.stringify(messages));
  }, [messages]);

  // Save history to localStorage on change
  React.useEffect(() => {
    localStorage.setItem('openchat_history', JSON.stringify(history));
  }, [history]);

  // Save API key to localStorage on change
  React.useEffect(() => {
    if (apiKey) {
      localStorage.setItem('openchat_api_key', apiKey);
    }
  }, [apiKey]);

  // Add a message to the chat
  const handleSend = async (msg) => {
    setMessages((prev) => [...prev, msg]);
    setLoading(true);
    setError('');
    try {
      // Simulate waiting for LLM response (replace with actual API call in InputBar if needed)
      // If InputBar already handles loading, remove this block and just setLoading(false) in InputBar after response
      // await fetchLLMResponse(...)
    } catch (e) {
      setError('Failed to get a response from the language model.');
    } finally {
      setLoading(false);
    }
  };

  // Start a new chat (save current to history, then clear messages)
  const handleNewChat = () => {
    if (messages.length > 0) {
      const session = {
        id: Date.now(),
        messages,
        createdAt: new Date().toISOString()
      };
      setHistory((prev) => [session, ...prev]);
    }
    setMessages([]);
  };

  // Restore a chat session from history
  const handleRestoreChat = (session) => {
    setMessages(session.messages);
    setView('chat');
  };


  return (
    <div className="app-container">
      <Sidebar
        onNewChat={handleNewChat}
        onSettings={() => setShowApiKeyModal(true)}
        onHistory={() => setView('history')}
        onChat={() => setView('chat')}
      />
      <div className="main-content">
        <header style={{ marginBottom: '1rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <h1 style={{ fontWeight: 700, color: '#2563eb', fontSize: '2rem', margin: 0 }}>OpenChat</h1>
        </header>
        <ApiKeyModal
          isOpen={showApiKeyModal}
          onClose={() => setShowApiKeyModal(false)}
          onSave={setApiKey}
          initialKey={apiKey}
        />
        {view === 'history' ? (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2>Chat History</h2>
            {history.length === 0 ? (
              <p>No previous chats found.</p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {history.map((session) => (
                  <li key={session.id} style={{ marginBottom: '1rem' }}>
                    <button
                      style={{ padding: '0.6rem 1.2rem', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#f1f5f9', cursor: 'pointer' }}
                      onClick={() => handleRestoreChat(session)}
                      aria-label={`Restore chat from ${new Date(session.createdAt).toLocaleString()}`}
                    >
                      {new Date(session.createdAt).toLocaleString()} ({session.messages.length} messages)
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button onClick={() => setView('chat')} style={{ marginTop: '1rem' }}>Back to Chat</button>
          </div>
        ) : (
          <>
            {error && (
              <div role="alert" style={{ color: '#fff', background: '#ef4444', padding: '0.75rem', borderRadius: '7px', marginBottom: '1rem', width: '100%', maxWidth: 600, textAlign: 'center' }}>
                {error}
              </div>
            )}
            {loading && (
              <div style={{ marginBottom: '1rem' }}>
                <span className="spinner" aria-label="Loading" style={{ display: 'inline-block', width: 32, height: 32, border: '4px solid #2563eb', borderTop: '4px solid #fff', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></span>
              </div>
            )}
            <ChatWindow messages={messages} />
            <InputBar onSend={handleSend} provider={provider} apiKey={apiKey} />
            <SuggestedPrompts onSend={handleSend} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
