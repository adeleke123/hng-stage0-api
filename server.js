const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

const MY_EMAIL = "bakare1234@gmail.com";         
const MY_NAME = "Bakare Muideen Adeleke";                   
const MY_STACK = "Backend";                


const CAT_FACTS_API_URL = 'https://catfact.ninja/fact';

/**
 * Fetches a random cat fact from the Cat Facts API.
 * Uses a try...catch block to handle network errors and timeouts gracefully.
 * @returns {Promise<string>} The fetched cat fact or a fallback message.
 */
async function fetchCatFact() {
    try {
        const response = await axios.get(CAT_FACTS_API_URL, { timeout: 5000 });
        
        return response.data.fact;

    } catch (error) {
        
        console.error("Error fetching cat fact:", error.message);
        
        return "Couldn't fetch a cat fact right now (API error). Cats are often believed to have nine lives.";
    }
}

app.get('/me', async (req, res) => {
    
    const fact = await fetchCatFact();

    const currentTimestamp = new Date().toISOString();
    
    const responseData = {
        "status": "success", /* Required static string value */
        "user": {
            "email": MY_EMAIL,
            "name": MY_NAME,
            "stack": MY_STACK
        },
        "timestamp": currentTimestamp, 
        "fact": fact 
    };

    res.status(200).json(responseData);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    console.log(`Test endpoint: http://localhost:${port}/me`);
});
