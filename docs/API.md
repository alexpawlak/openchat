# LLM API Integration for OpenChat

## Hugging Face Inference API
- **API Endpoint:**
  - `https://api-inference.huggingface.co/models/bigscience/bloomz-560m`
- **Docs:** [Hugging Face Inference API](https://huggingface.co/docs/api-inference/index)
- **How to get a free API key:**
  1. Sign up at https://huggingface.co/join
  2. Go to https://huggingface.co/settings/tokens
  3. Create a new token (read access)
  4. Use this as your `REACT_APP_HF_API_KEY`

## Setting API Keys Securely
- **Local development:**
  - Copy `.env.example` to `.env` and add your secret key.
- **Windsurf deployment:**
  - In your Windsurf dashboard, add `REACT_APP_HF_API_KEY` as an environment variable.
  - The key will be injected securely at build time and is never committed to GitHub.

## Usage in Code
```js
const apiKey = process.env.REACT_APP_HF_API_KEY;
```

## Supported Models
- You can swap the model in the endpoint URL to use other free Hugging Face models (see [model hub](https://huggingface.co/models?pipeline_tag=text-generation&sort=downloads)).
