const { response, request } = require('express')

const productosGet=(req, res)=>{
    const producto= req.body
    res.json({
        msg:"GET"
    })
}

const productosPost=(req, res)=>{
    const producto= req.query
    res.json({
        msg:"POST"
    })
}

const productosPut=(req, res)=>{
    const producto= req.query
    res.json({
        msg:"PUT"
    })
}

const productosDelete=(req, res)=>{
    const producto= req.query
    res.json({
        msg:"DEL"
    })
}
module.exports = {
    productosGet,
    productosPost,
    productosPut,
    productosDelete
}