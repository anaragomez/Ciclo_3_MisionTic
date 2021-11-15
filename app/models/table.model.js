'use strict';
const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema({
        player1: String,
        player2: String,
        table: String,
        time: String,
        role: String,
        order: String,
        items: Array,
        products: Array,
        subtotal: Number,
        grandtotal: Number
}, { timestamps: true })

const Table = mongoose.model(
    "Table", TableSchema
)

Table.collection.createIndex(
    {
        table: "text",
    }
)

module.exports = Table;