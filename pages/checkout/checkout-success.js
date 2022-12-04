import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function CheckoutSuccess() {
  return (
    <div className="container py-4 h-100">
      <div className="row h-100">
        <div className="col-md-12 h-100">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body mt-5">
              <div className="d-flex justify-content-center mb-3">
                <FontAwesomeIcon
                  icon={("fas", "check-circle")}
                  size="5x"
                  className="text-success"
                />
              </div>
              <h3 className="text-center">Gracias por tu compra.</h3>
              <p className="text-center">
                Recibimos tu pedido. Puedes revisar su estado
                en&nbsp;
                <Link href="/account/current-orders">
                  <a>ajustes de cuenta</a>
                </Link>
                .
              </p>
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

export default CheckoutSuccess;
