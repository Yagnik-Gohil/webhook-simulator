const axios = require('axios');
const db = require('./db');
const BASE_URL = 'http://localhost:3000/api/webhook';

function getRandomKey(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}

async function sendWebhookRandomly() {
    try {
        const service = getRandomKey(db);
        const eventType = getRandomKey(db[service]);
        const eventData = db[service][eventType];

        console.log(`Sending event: ${eventType} for service: ${service}`);

        // Send POST request to webhook endpoint
        const response = await axios.post(BASE_URL, {
            source: service,
            event: eventData.event,
            payload: eventData.payload,
        });

        console.log(`Event sent successfully! Response:`, response.data);
    } catch (error) {
        console.error('Error sending webhook event:', error.message);
    }
}

function startSimulation() {
    console.log('Starting webhook simulation...');
    setInterval(() => {
        sendWebhookRandomly();
    }, 5000); // Trigger every 5 seconds
}

startSimulation();
