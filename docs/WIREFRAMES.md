# UI Wireframes (Markdown Sketch)

## Main Chat Interface

```
---------------------------------------------------
| Sidebar      |   What do you want to know?      |
| (Chats,      |  -----------------------------   |
|  Spaces,     |  | Ask anything...           |   |
|  Library)    |  -----------------------------   |
|              |  [LLM ▼] [Mic]                   |
|              |                                   |
|--------------|-------------------------------   |
|              |  Suggested Prompts/News Cards    |
|              |  [Prompt 1] [Prompt 2] [Prompt3] |
---------------------------------------------------
```

### Key UI Elements
- **Sidebar:** Navigation, chat history, spaces, library
- **Main Area:**
  - Large prompt ("What do you want to know?")
  - Input box with LLM selector and microphone button
  - Suggested prompts/news cards below input

### Accessibility & Responsiveness
- All interactive elements keyboard accessible
- Focus trapping in modals
- ESC key closes modals
- Responsive layout for mobile and desktop

---

## Notes
- LLM selector allows switching between free APIs (e.g., Hugging Face, OpenRouter)
- No French language support (per user request)
- UI inspired by Perplexity/ChatGPT
