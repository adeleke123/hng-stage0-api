const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000; // Choose a port for local development

// Basic route to check if the server is running
app.get('/', (req, res) => {
    res.send('HNG Stage 0 API is running!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

/**
 * Fetches a random cat fact from the Cat Facts API.
 * Handles API errors with a fallback message.
 */
async function fetchCatFact() {
    const CAT_FACTS_API_URL = 'https://catfact.ninja/fact';
    try {
        // Set a timeout of 5 seconds (5000 ms) for the request
        const response = await axios.get(CAT_FACTS_API_URL, { timeout: 5000 });

        // The API returns { fact: "...", length: ... }
        return response.data.fact;

    } catch (error) {
        console.error("Error fetching cat fact:", error.message);

        // Handle a network error/timeout gracefully with a fallback message
        return "Couldn't fetch a cat fact right now. Here's a placeholder fact: Cats sleep for about 70% of their lives.";
    }
}
