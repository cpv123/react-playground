const Shop = require('../models/shopsModel');
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://127.0.0.1:27017/coffee');

exports.getShops = (req, res) => {
    Shop.find((err, shops) => {
        if (err) {
            return next(err);
        } else {
            res.json(shops)
        }
    });
}

exports.getShopById = (req, res) => {
    let myQuery = { _id: req.params._id }
    Shop.findOne(myQuery, (err, shop) => {
        if (err) {
            return next(err);
        } else {
            res.json(shop)
        }
    });
}

exports.postShop = (req, res) => {
    let shop = new Shop(req.body);
    shop.save((err, shop) => {
        if (err) {
            res.status(500);
            return next(err);
        } else {
            res.status(201).send(shop);
        }
    });
}

exports.deleteShop = (req, res) => {
    let myQuery = { _id: req.params._id };
    Shop.deleteOne(myQuery, (err, shop) => {
        if (!shop) {
            res.status(404)
        } else if (err) {
            res.status(500);
            return next(err);
        } else {
            res.send({ success: req.params._id })
        }
    });
}