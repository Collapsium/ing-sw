import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Footer() {
  return (
    <div className="vstack mt-auto">
      <footer className="py-4 bg-darkblue">
        <div className="container py-3">
          <div className="row g-3">
            <div className="col-md-6 col-lg-4 d-none d-md-block">
              <h5 className="text-light">Contacto</h5>
              <div className="vstack gap-1">
                <small className="d-flex text-light text-opacity-75 gap-2">
                  <FontAwesomeIcon
                    icon={["fas", "map-marker"]}
                    className="mt-1"
                  />
                  <div>Dirección #1234</div>
                </small>
                <small className="d-flex text-light text-opacity-75 gap-2">
                  <FontAwesomeIcon
                    icon={["fas", "envelope"]}
                    className="mt-1"
                  />
                  <div>correo@mail.com</div>
                </small>
                <small className="d-flex text-light text-opacity-75 gap-2">
                  <FontAwesomeIcon icon={["fas", "phone"]} className="mt-1" />
                  <div>(+56) 9 12345678</div>
                </small>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 d-none d-md-block">
              <h5 className="text-light">Información</h5>
              <div className="vstack small gap-2">
                <a href="#" className="footer-link">
                  Sobre nosotros
                </a>
                <a href="#" className="footer-link">
                  Términos y condiciones
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 d-none d-md-block">
              <h5 className="text-light text-center text-md-start">
                Boletín
              </h5>
              <div className="text-light text-opacity-75 mb-3 small text-center text-md-start">
                Suscríbete para recibir promociones y novedades.
              </div>
              <form className="hstack gap-2 justify-content-center justify-content-md-start mb-3">
                <div>
                  <input
                    type="email"
                    className="form-control border border-primary"
                    placeholder="Tu correo electrónico"
                  />
                </div>
                <button className="btn btn-warning">Suscribirse</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 bg-darkerblue">
        <div className="container d-flex">
          <span className="text-light text-opacity-50 my-auto">
            &copy; {new Date().getFullYear()} Up-Grade
          </span>
          <div className="ms-auto hstack gap-4">
            <a href="#" className="ms-auto link-light">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} size="lg" />
            </a>
            <a href="#" className="ms-auto link-light">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
