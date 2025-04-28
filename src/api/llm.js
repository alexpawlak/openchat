// llm.js - Handles LLM API requests for OpenChat

/**
 * Send a prompt to the selected LLM API and return the response.
 * @param {string} prompt - The user's input message.
 * @param {string} provider - The selected LLM provider (e.g., 'huggingface', 'openrouter').
 * @param {string} apiKey - Optional API key for the provider.
 * @returns {Promise<string>} - The generated response.
 */
export async function fetchLLMResponse(prompt, provider, apiKey = '') {
  if (provider === 'huggingface') {
    // Use .env key as default if apiKey not provided (secure for local/cloud)
    const key = apiKey || process.env.REACT_APP_HF_API_KEY;
    // Use gpt2 for more reliable free tier testing
    const HF_API_URL =
      'https://api-inference.huggingface.co/models/gpt2';
    const res = await fetch(HF_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(key && { Authorization: `Bearer ${key}` })
      },
      body: JSON.stringify({ inputs: prompt })
    });
    if (!res.ok) {
      const errorText = await res.text();
      console.error('LLM API error:', errorText);
      throw new Error('LLM API error');
    }
    const data = await res.json();
    return data[0]?.generated_text || 'No response.';
  }
  // Add more providers (e.g., OpenRouter) as needed
  throw new Error('Unsupported LLM provider');
}
