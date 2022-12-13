const pool = require("./db");
const queries = require("./queries");


//info sacada que usaremos en routes

const getProducts = (req, res) => {
  pool.query(queries.getProducts, (error, results) =>{
    if(error) throw error;
    res.status(200).json(results.rows) //resulto bien la query
  })
}

const getProductDetail = (req, res) => {
  const id = parseInt(req.params.id)
  pool.query(queries.getProductDetail, [id], (error, results) =>{
    if(error) throw error;
    res.status(200).json(results.rows) //resulto bien la query
  })
}
const login =(req, res)=>{
  const{correo, password}=req.body
  //verificar que existe cuenta
  pool.query(queries.authLogin, [correo, password], (error, results)=>{
    if(!results.rows.lengh){
      res.send("Mail o contraseña incorrecto")
    }
    //cookie

  })
}

const registrar=(req, res)=>{
  const{nombre, apellido, correo, comuna, region, password} =req.body
  //verificar correo
  pool.query(queries.checkEmailExist, [correo], (error,results)=>{
    if(results.rows.length){
      res.send("Mail ya registrado")
    }

    pool.query(queries.registrarUsuario, [nombre, apellido, correo, comuna, region, password], (error, results)=>{
      if(error) throw error;
      res.status(201).send("Usuario registrado de manera existosa")
    })
  });
};


module.exports = {
  getProducts,
  getProductDetail,
  login,
  registrar,

}