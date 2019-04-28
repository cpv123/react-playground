const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shopsModel = new Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    coordinates: {
        type: Object
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Shop = mongoose.model('Shop', shopsModel);
module.exports = Shop;