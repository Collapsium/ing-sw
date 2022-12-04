import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function PricingCard({ data, pricingOnly, children }) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <div className="vstack gap-2">
          <div className="d-flex justify-content-between">
            <span>Subtotal:</span>
            <span>$100.000</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Descuento:</span>
            <span className="text-danger">-</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Costo de envío:</span>
            <span className="text-success">+$3.000</span>
          </div>

          <hr className="text-muted" />

          <div className="d-flex justify-content-between">
            <span className="h5">Total:</span>
            <span className="fw-bold h5 mb-0">$103.000</span>
          </div>

          {!pricingOnly && (
            <div className="d-grid gap-2 mt-2">
              <Link href="/checkout/delivery-info">
                <a className="btn btn-primary">Pagar</a>
              </Link>
              <Link href="/">
                <a className="btn btn-outline-primary">Seguir comprando</a>
              </Link>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
