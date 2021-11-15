'use strict';
const mongoose = require("mongoose");
const { Schema } = mongoose

const Category = mongoose.model(
    "Setting",
    new Schema({
        name: String,
        discount: String,
        tax: String,
        valuehour: Number
    }, { timestamps: true })
);

module.exports = Category;