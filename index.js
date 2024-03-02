const express = require('express');

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/health', (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        Timestamp: Date.now()
    };

    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
})

app.listen(port, () => {
    console.log(`Server Started on ${port} ... `)
})