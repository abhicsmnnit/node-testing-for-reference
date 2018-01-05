const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hare Krishna!');
});

app.get('/error', (req, res) => {
    res.status(404).send({
        error: 'Page not found.'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Krishna',
            age: 16
        }, {
            name: 'Abhinav',
            age: 27
        }, {
            name: 'Radharani',
            age: 15
        }
    ]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}.`);
});

module.exports.app = app;