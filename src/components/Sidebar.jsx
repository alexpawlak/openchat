import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onNewChat, onSettings, onHistory, onChat }) => (
  <aside className="sidebar" aria-label="Sidebar">

    <nav>
      <ul>
        <li><button onClick={onChat} aria-label="Go to chat">Chat</button></li>
        <li><button onClick={onHistory} aria-label="View chat history">History</button></li>
        <li><button onClick={onSettings} aria-label="Open settings">Settings</button></li>
      </ul>
    </nav>
    <div className="sidebar-footer">
      <button className="new-thread" onClick={onNewChat} aria-label="Start a new chat">New Chat</button>
    </div>
  </aside>
);

export default Sidebar;
