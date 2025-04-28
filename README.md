# LLM Chat App (React)

A free, accessible, and open-source chat application inspired by ChatGPT and Perplexity, using free LLM APIs.

## Features
- Clean chat UI with sidebar and history
- LLM model selector (Hugging Face, OpenRouter, etc.)
- Mobile responsive & accessible (WCAG AA)
- User can add API key for more models

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npm start
   ```

## Project Structure
```
/src
  /components
    Sidebar.jsx
    ChatWindow.jsx
    InputBar.jsx
    LLMSelector.jsx
    SuggestedPrompts.jsx
  /api
    llm.js
  /styles
    (CSS/SCSS files)
  App.jsx
  index.js
```

## Linting & Formatting
- Run `npm run lint` for ESLint checks.
- Run `npm run format` for Prettier formatting.

## Documentation
See the `docs/` folder for use cases, user stories, wireframes, and more.

## License
MIT
