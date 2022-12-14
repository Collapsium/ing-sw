import Link from "next/link";
import Layout from "../../components/layout";
import {useState} from 'react';
import axios from "axios";

const comunas = ["Santiago", "Cerrillos", "Lo Espejo", "Huechuraba"];

const region = ["Metropolitana"];

function SignUp() {
  const api = axios.create({
    baseURL: 'http://localhost:5000/api/'
  })

//datos:
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = [name, email, password]
  console.log(data)

//cuando se aprieta en registrarse: notar como en server.js se ve la ruta y envia la respuesta
  const handleSubmit = (event) =>{
    console.log("ola")
    event.preventDefault();
      api.post('http://localhost:5000/api/user/registrer',
        {
          name: {name},
          email: {email},
          password: {password}
        }).then(res => console.log(res)).catch(err => console.log(err))
  }
  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body px-4">
              <h4 className="card-title fw-bold mt-2 mb-4">Registrarse</h4>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-12">
                  <label className="form-label">Nombre</label>
                  <input type="text"value={name}
                         onChange={(e)=> setName(e.target.value)}
                         className="form-control" />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Correo electrónico</label>
                  <input type="email"
                         value={email}
                         onChange={(e)=> setEmail(e.target.value)}
                         className="form-control" />
                </div>
                {/*<div className="col-md-12">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" />
                    <label className="form-check-label"></label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>*/}
               
                <div className="col-md-12">
                  <label className="form-label">Contraseña</label>
                  <input type="password"
                         value={password}
                         onChange={(e)=> setPassword(e.target.value)}
                         className="form-control" />
                </div>
                <div className="col-md-12 mt-4">
                  <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                </div>
                <div className="col-md-12">
                  <div className="text-muted bg-light rounded p-3 border small">
                    Al apretar el botón de &lsquo;Registrase&lsquo;, aceptas nuestros {" "}
                    <a href="#">Términos y Condiciones</a>.
                  </div>
                </div>
              </form>
              <hr className="text-muted" />
              <div className="text-center">
                Ya tienes una cuenta?{" "}
                <Link href="/auth/login">
                  <a className="text-decoration-none fw-medium">Iniciar Sesión</a>
                </Link>
              </div>
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

SignUp.getLayout = (page) => {
  return (
    <Layout simpleHeader hideAuth>
      {page}
    </Layout>
  );
};

export default SignUp;
