const exp = require("constants");
const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
myBudget: [
    {
        title: 'Eat out',
        budget: 50
    },
    {
        title: 'Rent',
        budget:150
    },
    {
        title: 'Grocery',
        budget: 200
    }
    ]

};

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () =>
{
    console.log(`Example app listening at http://localhost:${port}`);
});