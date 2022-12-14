const getProducts = "SELECT * FROM productos";
const getProductDetail = "SELECT * FROM productos where id = $1";
const getCart= "SELECT * FROM carrito where id_cliente= $1";
const putCart= "INSERT INTO carrito (id_cliente,id_producto,cantidad,precio,nombre,marca,imagen) VALUES ($1, $2, $3, $4, $5, $6 , $7)";
const deleteItem="DELETE FROM carrito WHERE id=$1"
const getPay="INSERT INTO ventas (id_usuario,estado) VALUES($1,'Confirmado')"
const deleteCart="DELETE FROM carrito WHERE id_cliente=$1"
const reStock="UPDATE productos SET stock=stock+1 WHERE id=$1"
const reduceStock="UPDATE productos SET stock=stock-1 WHERE id=$1"

module.exports = {
  getProducts,
  getProductDetail,
  getCart,
  putCart,
  deleteItem,
  getPay,
  deleteCart,
  reStock,
  reduceStock
}