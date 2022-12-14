const {Router} = require('express');
const controller = require('./controller');

const router = Router()


const getProducts= router.get('/products', controller.getProducts);
const getProductsDetail= router.get("/products/:id",controller.getProductDetail);
const getCart= router.get("/cart/:id_cliente",controller.getCart);
const putCart= router.post('/cart/add', controller.putCart);
const deleteItem= router.post('/cart/delete',controller.deleteItem);
const getPay= router.post('/products/payment',controller.getPay);
module.exports ={
    getProducts,
    getProductsDetail,
    getCart,
    putCart,
    deleteItem,
    getPay
}; //importaremos en server.js