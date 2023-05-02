const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const catogories = require('./data/categories.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is Running...')
})

app.get('/categories', (req, res) => {
    res.send(catogories)
})



app.listen(port, () => {
    console.log(`Dragon API is running on ${port}`)
})

