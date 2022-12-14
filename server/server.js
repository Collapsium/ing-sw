const express = require('express')
const routes = require('./routes');
const cors = require('cors')
const app = express()

//Middleware
app.use(express.json());
app.use(cors());


//info que captará el front end, este es un ej de como tomamos info de la ruta api/productos
app.get("/", (req,res) =>{
  //res.set('Access-Control-Allow-Origin', '*');
  res.send("api result")
})

//usará esa dirección
app.use('/api', routes.getProducts);

app.use('/api',routes.getCart);

app.use('/api',routes.putCart);

app.use('api',routes.deleteItem);

app.use('api',routes.getPay);

app.listen(5000, () => {console.log("Pescando puerto 5000!!!!")})