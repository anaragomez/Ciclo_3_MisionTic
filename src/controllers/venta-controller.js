const { response, request } = require('express')

const usuariosGet=(req, res)=>{
    const venta= req.body
    res.json({
        msg:"GET"
    })
}

const usuariosPost=(req, res)=>{
    const venta= req.query
    res.json({
        msg:"POST"
    })
}

const usuariosPut=(req, res)=>{
    const venta= req.query
    res.json({
        msg:"PUT"
    })
}

const usuariosDelete=(req, res)=>{
    const venta= req.query
    res.json({
        msg:"DEL"
    })
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}