const {Router} = require('express');
const controller = require('./controller');

const router = Router()


router.get('/', controller.getProducts);
router.get("/:id",controller.getProductDetail);
//router.post('/carrito:id', controller.agregarAlCarrito);
module.exports = router; //importaremos en server.js