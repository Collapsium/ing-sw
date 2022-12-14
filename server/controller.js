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


const getCart = (req, res) => {
  const id_cliente= parseInt(req.params.id_cliente)
  pool.query(queries.getCart, [id_cliente] ,(error, results) =>{
    if(error) throw error;
    res.status(200).json(results.rows) //resulto bien la query
  })
}

const putCart=(req,res)=>{
  const {id_cliente,id_producto,cantidad,precio,nombre,marca,imagen}=req.body
  pool.query(queries.putCart,[id_cliente,id_producto,cantidad,precio,nombre,marca,imagen],(error,results)=>{
    if(error) throw error;
    res.send(200)
  })
  pool.query(queries.reduceStock,[id_producto],(error,results)=>{
    if(error) throw error;
  })
}

const deleteItem=(req,res)=>{
  const {id,id_producto}=req.body
  pool.query(queries.deleteItem,[id],(error,results)=>{
    if(error) throw error;
    res.send(200)
  })
  pool.query(queries.reStock,[id_producto],(error,results)=>{
    if(error) throw error;
  })
}

const getPay=(req,res)=>{
  const {id_cliente,id_producto,cantidad}=req.body
  pool.query(queries.getPay,[id_cliente],(error,results)=>{
    if(error) throw error;

  })
  pool.query(queries.deleteCart,[id_cliente],(error,results)=>{
    if(error) throw error;

  })

}


module.exports = {
  getProducts,
  getProductDetail,
  login,
  registrar,
  getCart,
  putCart,
  deleteItem,
  getPay,
}