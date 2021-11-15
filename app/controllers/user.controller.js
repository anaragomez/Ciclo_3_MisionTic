'use strict';
const bcrypt = require("bcryptjs");
const { validationResult }  = require('express-validator');
const { UserSort } = require('../constants/sort');
const db = require('../models');
const User = db.user

// Create default data
exports.check = () => {
    User.find().then(result => {
        if (result.length === 0) {
            const user = new User({
                username: 'admin',
                email: 'admin@email.com',
                password: 'skyn3t2021',
                fullname: 'Admin',
                role: 'Admin',
                statusu: '1'
            })
            User(user).save()
        }
    })
}

// Get all data
exports.findAll  = (req, res) => {
    // Sort : old, new, name
    // Filter : role, keyword, page
    const { role, keyword, sort, page, limit } = req.query
    let aggregate = []

    if (keyword || role) {
        let matches = {}
        let match = {
            'deletedAt': { '$exists': false }
        }
        if (keyword) match["$text"] = {"$search": keyword}
        if (role && role !== 'all') match['role'] = role

        matches['$match'] = match
        aggregate.push(matches)
    }

    if (sort) {
        let sorts = {}
        let sortBy = { 'createdAt': 1 }
        sortBy['createdAt'] = sort['newest'] ? -1 : 1
        switch (sort) {
            case UserSort.NEWEST:
                sortBy['createdAt'] = -1
                break
            case UserSort.OLDEST:
                sortBy['createdAt'] = 1
                break
            case UserSort.EMAIL:
                sortBy['email'] = -1
                break
            case UserSort.LAST_ACTIVE:
                sortBy['lastActive'] = -1
                break
            default:
                return;
        }

        sorts['$sort'] = sortBy
        aggregate.push(sorts)
    }

    if (limit) {
        aggregate.push({ "$skip": page ? limit * page : 0 })
        aggregate.push({ "$limit": parseInt(limit) })
    }

    aggregate.push({
        "$lookup": {
            from: User.collection.name,
            localField: 'User',
            foreignField: '_id',
            as: 'User'
        }
    })

    User.aggregate(aggregate).then(result => {

        console.log("result", result)
        User.countDocuments({ 'deletedAt': { '$exists': false } }).then(count => {
            const lastPage = Math.ceil(count/limit) - 1
            const data = {
                users: result,
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
            res.status(500).send({
                message: error.message || "Something error!"
            })
        })
};

// Create new data
exports.create = (req, res) => {
    let user = req.body
    user.password = user.password
    user.statusu = '0'
    user.lastActive = new Date()

    const err = validationResult(req)
    if (!err.isEmpty()) {
        return res.send({
            status: 'failed',
            message: err,
        })
    }

    User.find({
        username: user.username
    }).then(result => {
        if (result.length !== 0) {
            return res.send({
                status: 'failed',
                message: {
                    errors: [
                        {
                            "value": "",
                            "msg": "Please choose another username",
                            "param": "username",
                            "location": "body"
                        }
                    ]
                },
            })
        } else {
            User(user).save()
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
        }
    })
};

// Get single data
exports.findById = (req, res) => {
    const id = req.params.id;

    User.findById(id)
        .then(result => {
            const user = {
                fullname: result.fullname,
                username: result.username,
                password: result.password,
                email: result.email,
                role: result.role,
                statusu: result.statusu
            }
            res.send({
                status: 'success',
                message: 'Successfully get a data!',
                data: user
            })
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Something error!"
            })
        })
};

// Get single data
exports.findbyEmail = (req, res) => {
    const email = req.params.email

    console.log("User email", email);

    User.find({email: email
        }).then(result => {

            console.log("result", result);

            if (result.length == 0) {
                return res.send({
                    status: 'failed',
                    message: {
                        errors: [
                            {
                                "msg": "No existe!!",
               
                            }
                        ]
                    },
                })
            }else{
                    let user = {

                        status: 'success',
                        message: 'Successfully get a data!',
                        fullname: result[0].fullname,
                        username: result[0].username,
                        password: result[0].password,
                        email: result[0].email,
                        role: result[0].role,
                        statusu: result[0].statusu
                    }

                    res.send(
                        
                        user)
         }
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
    let user = req.body
    user.lastActive = new Date()

    User.findByIdAndUpdate(id, user, { useFindAndModify: false })
        .then(result => {
            if (!result) {
                res.status(404).send({
                    status: 'failed',
                    message: 'Unable to retrieve the item!',
                });
            } else {
                res.send({
                    status: 'success',
                    message: 'Successfully updated data!',
                    data: result
                })
            }
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || "Something error!"
            })
        });
};

// Delete permanent data
exports.deletePermanent = (req, res) => {
    const id = req.params.id;

    User.findByIdAndRemove(id)
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
            res.status(500).send({
                status: 'failed',
                message: error.message || "Something error!"
            })
        });
};

// Delete temporary data
exports.delete = (req, res) => {
    const id = req.params.id;

    User.findByIdAndUpdate(
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
    User.deleteMany({})
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