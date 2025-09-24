const express = require('express');
const app = express();
const port = 3000;

// Homepage route
app.get('/', (req, res) => {
    res.send('<h1>Hello from Jenkins deployed app!</h1><p>Welcome to your website.</p>');
});

// Start server
app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});
