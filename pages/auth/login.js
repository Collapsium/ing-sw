import Link from "next/link";
import Layout from "../../components/layout";
import {useEffect, useState} from 'react';
import axios from "axios";
import Cookies from 'universal-cookie';
function Login() {

  const cookies= new Cookies();

  const api = axios.create({
    baseURL: 'http://localhost:5000/api/'
  })

//datos:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = [email, password]
  console.log(data)
  const [id_serial, setId_serial] = useState(0);
//cuando se aprieta en registrarse: notar como en server.js se ve la ruta y envia la respuesta
  const handleSubmit = (event) =>{
    event.preventDefault();

    api.post('http://localhost:5000/api/user/login',
      {
        email: data[0],
        password: data[1]
      }).then(res =>setId_serial(res.data[0])
    ).catch(err => console.log(err))
    if(id_serial){
    cookies.set('id', id_serial['id_serial'] ,{path: '/'})
    window.location.reload(false);
    }
    }

  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body px-4">
              <h4 className="card-title fw-bold mt-2 mb-4">Iniciar Sesión</h4>
              <form className="row g-2"
                    onSubmit={handleSubmit}
              >
                <div className="col-md-12">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email" value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    className="form-control"
                    placeholder="mail@correo.com"
                    required={true}
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Contraseña</label>
                  <input type="password"
                         value={password}
                         onChange={(e)=> setPassword(e.target.value)}
                         className="form-control"
                         required={true}
                  />
                </div>
                <div className="col-md-12">
                  <Link href="/auth/forgot-password">
                    <a className="text-decoration-none">Olvidaste tu contraseña?</a>
                  </Link>
                </div>
                <div className="col-md-12 mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

Login.getLayout = (page) => {
  return (
    <Layout simpleHeader hideAuth>
      {page}
    </Layout>
  );
};

export default Login;