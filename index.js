const express = require('express');
const { jwt, schemas } = require('./middlewares');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', jwt, schemas, rootController);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


const rootController = (req, res) => {
    res.send('Hello World');
};

