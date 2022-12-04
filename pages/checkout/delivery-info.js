import Link from "next/link";
import CheckoutStepper from "../../components/checkout/checkout-stepper";
import PricingCard from "../../components/shopping-cart/pricing-card";
import Layout from "../../components/layout";

function DeliveryInfo() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-12">
          <CheckoutStepper />
        </div>
      </div>
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <form className="row g-3">
                <h4 className="fw-semibold mb-0">Información de Contacto</h4>
                <div className="col-md-6">
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Apellido</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Teléfono</label>
                  <div className="input-group">
                    <div>
                      <select className="form-select rounded-0 rounded-start bg-light">
                        <option>+56</option>
                      </select>
                    </div>
                    <input type="tel" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="mail@correo.com"
                  />
                </div>

                <div className="col-md-12">
                  <hr className="text-muted mb-0" />
                </div>

                <h4 className="fw-semibold mb-0">Información de Envío</h4>
                <div className="col-md-12">
                  <label className="form-label">Dirección</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">Comuna</label>
                  <select className="form-select">
                    <option>Santiago</option>
                    <option>Cerrillos</option>
                    <option>Lo Espejo</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Región</label>
                  <select className="form-select">
                    <option>Santiago</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Código Postal</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-md-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">
                      Guardar esta dirección
                    </label>
                  </div>
                </div>

                <div className="col-md-12 mt-4">
                  <div className="d-grid gap-2 d-flex justify-content-end">
                    <Link href="/shopping-cart">
                      <a className="btn btn-outline-primary">Cancelar</a>
                    </Link>
                    <Link href="/checkout/payment-info">
                      <a className="btn btn-primary">Continuar</a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <PricingCard pricingOnly />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

DeliveryInfo.getLayout = (page) => {
  return <Layout simpleHeader>{page}</Layout>;
};

export default DeliveryInfo;
