# OpenChat (Free, Accessible LLM App)

## Overview
OpenChat is an open-source conversational AI web app inspired by ChatGPT and Perplexity, using only free or open-access LLM APIs (e.g., Hugging Face Inference API, OpenRouter, etc.).

## Features
- Clean chat interface with animated message entry (fade/slide-in)
- Sidebar navigation (no title/header, no '+', no microphone)
- Easily start a new chat or restore from chat history (persisted in browser)
- Settings modal for secure API key entry (localStorage only)
- LLM model selector (Hugging Face, OpenRouter, etc.)
- Mobile responsive & accessible (WCAG AA, keyboard, screen reader)
- Bilingual UI: English and French
- All user-facing text available in both languages

## Getting Started
1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app:
   ```bash
   npm start
   ```
4. (Optional) Add your free API key in the app settings modal for more model access

## GitHub Setup
1. Create a new repo on GitHub (or use your own)
2. Initialize git, add remote, and push:
   ```bash
   git init
   git remote add origin https://github.com/yourusername/openchat.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```
3. If you see errors about non-fast-forward, follow the troubleshooting steps in this README or ask for help.

## Documentation
- All documentation is in English (app supports English and French)
- See the `docs/` folder for:
  - `USECASES.md`: Use cases, personas, and user journeys
  - `USER_STORIES.md`: User stories and epics
  - `TODO.md`: Task checklist
  - `PROJECT_PROGRESS.md`: Milestones and status
  - `CHANGELOG.md`: Notable changes

## License
MIT

---

For more details, see the other docs in the `docs/` folder.
