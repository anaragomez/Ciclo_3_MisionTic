'use strict';
const { check } = require("express-validator");

const validation = [
    check("table", "Please Enter a Valid Table").not().isEmpty(),
]

module.exports = app => {
    const player = require("../controllers/player.controller.js");

    var router = require("express").Router();

    router.post("/login", validation, player.player)

    app.use("/api/player", router);
};