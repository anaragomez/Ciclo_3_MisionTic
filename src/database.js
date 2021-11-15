const mongoose = require ("mongoose");
const mongoUrl = process.env.MONGODB;
const db = mongoose.connect(mongoUrl, {  },
    (error) => {
        if (error) {
            console.log("Error - No se pudo conectar a la BD ");}
        else {console.log("Conectado a MongoDB");
    }
});
module.exports = db;