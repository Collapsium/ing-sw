const express = require('express')
const productsRoutes = require('./routes');
const cors = require('cors')
const app = express()
const pool = require("./db");
const queries = require("./queries");
const routes = require('./routes');

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

app.post('/api/user/login',(req,res) =>{
  const body = req.body
  //verificar que existe cuenta
  pool.query(queries.authLogin, [body.email, body.password], (error, results)=>{
    if(error) throw error;
    res.status(200).json(results.rows)
  })
})


//usará esa dirección
app.use('/api', routes.getProducts);

app.use('/api',routes.getCart);

app.use('/api',routes.putCart);

app.use('api',routes.deleteItem);

app.use('api',routes.getPay);


app.listen(5000, () => {console.log("Pescando puerto 5000!!!!")})

