const prodCtrl={};
const prodModel= require ("../models/prod-model");

prodCtrl.getProds= async (request,response)=> {
    const prods= await prodModel.find();
    response.json(prods);

}

prodCtrl.createProd= async (request,response)=> {
    const {Producto, Detalle, Precio, Estado} = request.body;
    const newProd = new prodModel({
        Producto,
        Detalle,
        Precio,
        Estado
      });
    await newProd.save();
    response.json({message: "Producto Creado"})
};


prodCtrl.getProd = async (request,response)=> {
    const prod = await prodModel.findById(request.params.id);
    response.json(prod)
}   


prodCtrl.updateProd =  async (request,response)=> {
    const {Producto, Detalle, Precio, Estado} = request.body;
    await prodModel.findByIdAndUpdate(request.params.id,{
        Producto,
        Detalle,
        Precio,
        Estado    
    })
    response.json({message: "Producto actualizado"})
}

prodCtrl.deleteProd = async(request,response)=> {
    await prodModel.findByIdAndDelete(request.params.id);
    response.json({message: "Producto eliminado"})
}




module.exports = prodCtrl;