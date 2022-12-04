import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ProductSimpleHorizontal({ id }) {
  return (
    <div className="d-flex py-2">
      <div className="flex-shink-0" style={{ height: 80 }}>
        <img
          className="rounded"
          src="/images/product.jpg"
          width={80}
          height={80}
          alt="Product image."
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="d-flex flex-column flex-grow-1 ms-3">
        <Link href="/product/1">
          <a className="text-dark text-decoration-none">Nombre de producto</a>
        </Link>
        <h6 className="mb-0 fw-semibold">$100.000</h6>
        <div className="mt-auto">
          <button className="btn btn-sm btn-secondary text-primary rounded-3">
            <FontAwesomeIcon icon={("fas", "cart-plus")} />
            &nbsp;Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductSimpleHorizontal;
