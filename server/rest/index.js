const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shopsController = require('./controllers/shopsController');

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

app.get('/shops', shopsController.getShops);
app.get('/shops/:_id', shopsController.getShopById);
app.post('/shops', shopsController.postShop);
app.delete('/shops/:_id', shopsController.deleteShop);

app.listen(port, () => console.log(`Listening on port ${port}`));