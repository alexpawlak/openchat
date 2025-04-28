import React, { useEffect, useRef } from 'react';
import './ChatWindow.css';

const ChatWindow = ({ messages = [] }) => {
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <main className="chat-window" aria-label="Chat Window">
      <div className="chat-messages" role="log" aria-live="polite">
        {messages.length === 0 && (
          <div className="chat-placeholder" style={{ color: '#a0aec0', textAlign: 'center', marginTop: '2rem' }}>
            <p>What do you want to know?</p>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message ${msg.sender} animate-in`}
            aria-label={msg.sender === 'user' ? 'You' : 'OpenChat'}
            style={{
              background: msg.sender === 'user' ? '#e2e8f0' : '#f4f6fa',
              color: '#2d3748',
              borderRadius: '8px',
              padding: '0.7rem 1rem',
              margin: '0.5rem 0',
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%',
              fontWeight: msg.sender === 'user' ? 600 : 400,
              animation: 'fadeInUp 0.5s',
              willChange: 'transform, opacity',
            }}
          >
            <span style={{ fontSize: '0.95rem' }}>{msg.text}</span>
          </div>
        ))}
        <div ref={endRef} />
      </div>
    </main>
  );
};

export default ChatWindow;
