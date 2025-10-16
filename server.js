// server.js

// 1. Import necessary modules
// 'express' is for building the web server and defining routes
const express = require('express');
// 'axios' is a popular, promise-based HTTP client for making API requests
const axios = require('axios');

const app = express();
// Define the port the server will listen on. Use the environment variable PORT 
// for deployment, or default to 3000 for local development.
const port = process.env.PORT || 3000;

// --- YOUR PERSONAL PROFILE DATA ---
// NOTE: Change these placeholder values to your actual details!
const MY_EMAIL = "bakare1234@gmail.com";         // ⬅️ **CHANGE THIS**
const MY_NAME = "Bakare Muideen Adeleke";                   // ⬅️ **CHANGE THIS**
const MY_STACK = "Backend";                 // ⬅️ **CHANGE THIS**

// The endpoint for the external Cat Facts API
const CAT_FACTS_API_URL = 'https://catfact.ninja/fact';

/**
 * Fetches a random cat fact from the Cat Facts API.
 * Uses a try...catch block to handle network errors and timeouts gracefully.
 * @returns {Promise<string>} The fetched cat fact or a fallback message.
 */
async function fetchCatFact() {
    try {
        // Set a timeout of 5000ms (5 seconds) to prevent the request from hanging forever
        // The 'await' pauses execution until the promise (the request) is resolved or rejected
        const response = await axios.get(CAT_FACTS_API_URL, { timeout: 5000 });
        
        // The Cat Facts API returns an object like { fact: "...", length: 100 }
        // We only need the 'fact' field.
        return response.data.fact;

    } catch (error) {
        // Log the actual error for debugging
        console.error("Error fetching cat fact:", error.message);
        
        // Return a clear, static fallback message if the external API fails or times out
        // This addresses the requirement for graceful error handling.
        return "Couldn't fetch a cat fact right now (API error). Cats are often believed to have nine lives.";
    }
}


// 2. Define the core GET /me endpoint
// This route is marked 'async' because it calls the 'fetchCatFact' function, 
// which is an asynchronous operation.
app.get('/me', async (req, res) => {
    
    // 2.1. Fetch the dynamic cat fact
    // 'await' waits for the API call to complete before moving to the next line.
    const fact = await fetchCatFact();

    // 2.2. Get the current UTC timestamp in ISO 8601 format
    // 'new Date()' creates a date object for the current time.
    // '.toISOString()' formats it exactly as required (e.g., "2025-10-15T12:34:56.789Z").
    const currentTimestamp = new Date().toISOString();
    
    // 2.3. Construct the final response object as required by the task
    const responseData = {
        "status": "success", // Required static string value
        "user": {
            "email": MY_EMAIL,
            "name": MY_NAME,
            "stack": MY_STACK
        },
        "timestamp": currentTimestamp, // Dynamic value updated on every request
        "fact": fact // Dynamic value fetched from the external API
    };

    // 2.4. Send the response
    // 'res.status(200)' sets the HTTP status code to 200 (OK).
    // '.json(responseData)' automatically sets the 'Content-Type: application/json' 
    // header and sends the JSON data.
    res.status(200).json(responseData);
});


// 3. Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    console.log(`Test endpoint: http://localhost:${port}/me`);
});

// This is the end of the server.js file
