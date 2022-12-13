const express = require('express')
const productsRoutes = require('./routes');
const cors = require('cors')
const app = express()
const pool = require("./db");
const queries = require("./queries");

//Middleware
app.use(express.json());
app.use(cors());


//info que captará el front end, este es un ej de como tomamos info de la ruta api/productos
app.get("/", (req,res) =>{
  res.set('Access-Control-Allow-Origin', '*');
  res.send("api result")
})

//datos enviados a esta ruta, falta el use con las funciones respectivas
app.post('/api/user/registrer',(req,res) =>{
  const body = req.body
  pool.query(queries.registrarUsuario, [ body.name, body.email, body.password], (error, results)=>{
    if(error) throw error;
    res.status(201).send("Usuario registrado de manera existosa")
  })

})


//usará esa dirección
app.use('/api/products', productsRoutes);



app.listen(5000, () => {console.log("Pescando puerto 5000!!!!")})

