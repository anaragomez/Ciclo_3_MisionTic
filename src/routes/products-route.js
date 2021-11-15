const {Router} = require ("express");

const router = Router();

const {getProds, createProd, getProd, updateProd,deleteProd} = require("../controllers/prod-controller");

router.route("/")
    .get(getProds)
    .post(createProd);

    router.route("/:id")
    .get(getProd)
    .put(updateProd)
    .delete(deleteProd)

module.exports= router;