const getProducts = "SELECT * FROM productos";
const getProductDetail = "SELECT * FROM productos where id = $1";
const checkEmailExist ="SELECT correo FROM usuario WHERE correo  =$1";
const registrarUsuario="INSERT INTO usuario (nombre, correo, password) VALUES ($1, $2, $3)";
const authLogin="SELECT id FROM usuario WHERE correo=$1 AND password=$2"

module.exports = {
  getProducts,
  getProductDetail,
  checkEmailExist,
  registrarUsuario,
  authLogin,
}