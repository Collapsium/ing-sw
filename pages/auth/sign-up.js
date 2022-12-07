import Link from "next/link";
import Layout from "../../components/layout";

const comunas = ["Santiago", "Cerrillos", "Lo Espejo", "Huechuraba"];

const region = ["Metropolitana"];

function SignUp() {
  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body px-4">
              <h4 className="card-title fw-bold mt-2 mb-4">Registrarse</h4>
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Apellido</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" />
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
                <div className="col-md-6">
                  <label className="form-label">Comuna</label>
                  <select className="form-select">
                    {comunas.map((e, i) => {
                      return <option key={i}>{e}</option>;
                    })}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Region</label>
                  <select className="form-select">
                    {region.map((e, i) => {
                      return <option key={i}>{e}</option>;
                    })}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Contraseña</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Confirmar contraseña</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="col-md-12 mt-4">
                  <button className="btn btn-primary w-100">Registrarse</button>
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
