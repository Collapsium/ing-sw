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


module.exports = {
  getProducts,
  getProductDetail,

}