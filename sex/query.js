const {Client} = require("pg");

const obtenerProductos = async () => {
  const client = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'postgres',
    port: '5432',
  });
  await client.connect();

  const res = await client.query("SELECT * FROM test")

  const result = res.rows[0]
  await client.end();
  return result;
}

obtenerProductos().then((result) => {
  console.log(result);

})
