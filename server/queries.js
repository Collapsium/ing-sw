const getProducts = "SELECT * FROM productos";
const getProductDetail = "SELECT * FROM productos where id = $1";
module.exports = {
  getProducts,
  getProductDetail
}