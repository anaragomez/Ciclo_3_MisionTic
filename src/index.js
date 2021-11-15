require ("dotenv").config();
const app = require("./app");
require ("./database");

app.listen(app.get("port"), function(){console.log ("Servidor en el puerto 4000")}); 
