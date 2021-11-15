'use strict';
const { validationResult} = require("express-validator");
const db = require('../models')
const jwt = require("jsonwebtoken");

const jwtConfig = require('../configs/jwtConfig')
const Table = db.table

exports.player = (req, res) => {
    const errors = validationResult(req);

    let errorMessage = [];
    if (!errors.isEmpty()) {
        errors.array().forEach(item => {
            errorMessage.push({
                field: item['param'],
                message: item['msg']
            });
        });
        return res.status(400).json({
            status: 'failed',
            errors: errorMessage
        });
    }

    Table.findOneAndUpdate(
        { table: req.body.table, 'deletedAt': { '$exists': false } },
        { lastActive: new Date() },
        { useFindAndModify: false })
        .then(result => {
            if (!result) {
                return res.send({
                    status: 'failed',
                    message: 'User not found!'
                })
            }

            const token = jwt.sign(
                { id: result._id },
                jwtConfig.secret);

            return res.send({
                status: 'success',
                message: 'Successfully logged in!',
                token: token,
                user: result
            })
        })
}
