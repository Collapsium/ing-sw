const express = require('express')
const productsRoutes = require('./routes');
const cors = require('cors')
const app = express()

//Middleware
app.use(express.json());
app.use(cors());


//info que captará el front end, este es un ej de como tomamos info de la ruta api/productos
app.get("/", (req,res) =>{
  res.set('Access-Control-Allow-Origin', '*');
  res.send("api result")
})

//usará esa dirección
app.use('/api/products', productsRoutes);



app.listen(5000, () => {console.log("Pescando puerto 5000!!!!")})