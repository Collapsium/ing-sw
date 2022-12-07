import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layout";
import { session, signIn } from "next-auth/client";

function Login() {

  const [fields, setFields] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({ email: "", password: ""})

  const router = useRouter()

  const handleValidation = () => {
    let errs = {
      email: "",
      password: ""
    };
    let formIsValid = true;

    // Email validation
    if(!fields["email"]){
      formIsValid = false;
      errs["email"] = "No puede estar vacío";
    }

    if(typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errs["email"] = "Correo inválido";
      }
    }

    setErrors(errs)
    return formIsValid
  }

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (handleValidation()){
      await signIn("credentials", {
        email: fields.email,
        password: fields.password,
        redirect: false
      })
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
                    type="email" name="email" id="email"
                    className="form-control"
                    placeholder="mail@correo.com"
                    onChange={handleChange}
                    required={true}
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Contraseña</label>
                  <input type="password" name="password" id="password"
                         className="form-control"
                         onChange={handleChange}
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
