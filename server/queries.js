const getProducts = "SELECT * FROM test";
const checkEmailExist ="SELECT s FROM usuarios s WHERE s.mail =$1";
const registrarUsuario="INSERT INTO usuarios (nombre, apellido, correo, comuna, region, password) VALUES ($1, $2, $3, $4, $5,$6)";
const authLogin="SELECT * FROM usurios WHERE correo=$1 AND password=$2"

module.exports = {
  getProducts,
  checkEmailExist,
  registrarUsuario,
  authLogin,
}