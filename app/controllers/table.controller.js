'use strict';
const { validationResult }  = require('express-validator');
const { TableSort } = require('../constants/sort');
const db = require('../models');
const Table = db.table
const moment = require('moment');


// Create default data
exports.check = () => {
    Table.find().then(result => {
        if (result.length === 0) {
            const table = new Table({
                player1: 'Luis',
                player2: 'Jorge',
                table: '1',
                time:  moment(Date()).format('HH:mm:ss'),
                role: 'Player',
                order: '0',
                items: [],
                products: [],
                subtotal: 0,
                grandtotal: 0
            })
            Table(table).save()
        }
    })
}

// Get all data
exports.findAll  = (req, res) => {
    // Sort : old, new, name
    // Filter : keyword, page, limit
    const { keyword, sort, page, limit } = req.query
    let aggregate = []

    let matches = {}
    let match = {
        'deletedAt': { '$exists': false }
    }
    if (keyword) match["$text"] = {"$search": keyword}
    matches['$match'] = match
    aggregate.push(matches)

    if (sort) {
        let sorts = {
            '$sort': {}
        }
        switch (sort) {
            case TableSort.NEWEST:
                sorts['$sort']['createdAt'] = -1
                break
            case TableSort.OLDEST:
                sorts['$sort']['createdAt'] = 1
                break
            case TableSort.NAME:
                sorts['$sort']['name'] = 1
                break
            default:
                return;
        }
        aggregate.push(sorts)
    }

    if (limit) {
        aggregate.push({ "$skip": page ? limit * page : 0 })
        aggregate.push({ "$limit": parseInt(limit) })
    }
    aggregate.push({
        "$lookup": {
            from: Table.collection.name,
            localField: 'Table',
            foreignField: '_id',
            as: 'Table'
        }
    })

    Table.aggregate(aggregate).then(result => {
        Table.countDocuments({ 'deletedAt': { '$exists': false } }).then(count => {
            const lastPage = Math.ceil(count/limit) - 1
            const data = {
                tables: result,
                pagination: {
                    perPage: limit,
                    page,
                    lastPage: parseInt(page) === lastPage
                }
            }
            res.send({
                status: 'success',
                message: 'Successfully fetch data!',
                data
            })
        })
        })
        .catch(error => {
            res.send({
                message: error.message || "Something error!"
            })
        })
};


// Create new data
exports.create = (req, res) => {
    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.send({
            status: 'failed',
            message: err,
        })
    }

    const requestBody = req.body;
    const table = new Table({
        parent: requestBody.parent,
        player1: requestBody.player1,
        player2: requestBody.player2,
        table: requestBody.table,
        time:  moment(Date()).format('HH:mm:ss'),
        role: 'Player',
        order: 0,
        items: requestBody.items,
        products: requestBody.products,
        subtotal: requestBody.subtotal,
        grandtotal: requestBody.grandtotal
        
    });

    table
        .save(table)
        .then(result => {
            return res.send({
                status: 'success',
                message: 'Successfully added data!',
                data: result
            })
        })
        .catch(error => {
            return res.status(500).send({
                message: error.message || "Something error!"
            })
        })
};

// Get single data
exports.findById = (req, res) => {
    const id = req.params.id;

    Table.findById(id).populate('parent')
        .then(result => {
            res.send({
                status: 'success',
                message: 'Successfully get a data!',
                data: result
            })
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Something error!"
            })
        })
};

// Update data
exports.update = (req, res) => {
    const id = req.params.id;
    const err = validationResult(req)
    if (!err.isEmpty()) {
        res.send({
            status: 'failed',
            message: err,
        })
    }

    Table.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(result => {
            if (!result) {
                res.send({
                    status: 'failed',
                    message: 'Unable to retrieve the item!',
                });
            } else {
                res.send({
                    status: 'success',
                    message: 'Successfully updated data!',
                })
            }
        })
        .catch(error => {
            res.send({
                message: error.message || "Something error!"
            })
        });
};

// Delete permanent data
exports.deletePermanent = (req, res) => {
    const id = req.params.id;

    Table.findByIdAndRemove(id)
        .then(result => {
            if (!result) {
                res.send({
                    status: 'failed',
                    message: 'Unable to retrieve the item!',
                });
            } else {
                Table.deleteMany({
                    parent: result._id
                }).then(() => {
                    res.send({
                        status: 'success',
                        message: 'Successfully deleted data!',
                    })
                })
            }
        })
        .catch(error => {
            res.send({
                message: error.message || "Something error!"
            })
        });
}

// Delete temporary data
exports.delete = (req, res) => {
    const id = req.params.id;

    Table.findByIdAndUpdate(
                id,
        { deletedAt: new Date()},
        { useFindAndModify: false })
        .then(result => {
            if (!result) {
                res.send({
                    status: 'failed',
                    message: 'Unable to retrieve the item!',
                });
            } else {
                res.send({
                    status: 'success',
                    message: 'Successfully deleted data!',
                })
            }
        })
        .catch(error => {
            res.send({
                message: error.message || "Something error!"
            })
        });
};

// Delete all data
exports.deleteAll = (req, res) => {
    Table.deleteMany({})
        .then(result => {
            res.send({
                status: 'success',
                message: 'Successfully deleted all data!',
            })
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Something error!"
            })
        })
};