require('dotenv').config()

const { Mongoose } = require('mongoose')
const Server = require('./models/server')

const server = new Server()

mongoose.connet(process.env.MONGODB_CONNECT).them(()=> {
    console.log("conectado");
})

server.listen()

module.exports = app;