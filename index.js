const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'));
app.use(express.json());

app.post('/api/log-web-vitals', (req, res) => {
    console.log('Received Web Vitals:', req.body);
    res.status(200).send('Web Vitals received');
});

app.listen(port, () => {
    console.log(`Listening in port ${port}`);
})