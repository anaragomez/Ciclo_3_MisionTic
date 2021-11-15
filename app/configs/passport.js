const bcrypt = require("bcryptjs")
const jwtConfig = require("./jwtConfig")
const passport = require("passport")
const Strategy = require("passport-local").Strategy

const db = require('../models')
const User = db.user

passport.use(
    'login',
    new Strategy({
        username: 'username',
        password: 'password',
        session: false
    }, (username, password, done) => {
        console.log(username)
        try {
            User.findOne({ username: username})
                .then(user => {
                    console.log(user)
                    if (!user) {
                        return done(null, false, {
                            status: 'fallido',
                            message: '¡Usuario no encontrado!'
                        })
                    }

                    const passwordValid = bcrypt.compareSync(
                        password,
                        user.password
                    );
                    if (!passwordValid) {
                        return done(null, false, {
                            status: 'fallido',
                            message: '¡Contraseña incorrecta!'
                        })
                    }

                    return done(null, {
                        status: 'éxito',
                        message: 'Inicio de sesión exitoso!',
                        user: user
                    })
                })
        } catch (err) {
            return done(err)
        }
    })
)

