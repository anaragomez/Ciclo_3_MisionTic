
const{ Router } = require('express')

const { usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosDelete

} = require('../controllers/user-controller')


const router = Router()

router.get('/', usuariosGet)
router.post('/', usuariosPost)
router.Put('/:id', usuariosPut)
router.Delete('/:id', usuariosDelete)

module.exports= router