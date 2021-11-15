
'use strict';
const { check } = require("express-validator");

const validation = [
    check("player1", "Please Enter a valid player1").not().isEmpty(),
    check("player2", "Please Enter a valid player2").not().isEmpty(),
    check("table", "Please enter a valid table").not().isEmpty()
]

module.exports = app => {
    const table = require("../controllers/table.controller.js");

    var router = require("express").Router();

    router.get("/", table.findAll);
    router.post("/", validation, table.create);
    router.get("/:id", table.findById);
    router.put("/:id", table.update);
    router.delete("/:id", table.deletePermanent);
    router.delete("/", table.deleteAll);

    app.use("/api/table", router);
};