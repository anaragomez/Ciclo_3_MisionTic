const express = require('express')

class Server {
    constructor(){
        this.app-express()
        this.port=process.removeListener.PORT//process.env.PORT
        this.usuarioPath='api/usuarios'


        //midlewares
        this.app.use(express.json(){
            
        })
        //rutas de la APP
       

        //CORS
      }
routes(){
    this.app.use(this.usuarioPath, require('../routes/usuarios'))
}

    this.app.use

        }
    }
}
module.exports= Server