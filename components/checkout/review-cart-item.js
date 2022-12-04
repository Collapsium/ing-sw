import Link from "next/link";

function ReviewCartItem({ id }) {
  return (
    <div className="d-flex">
      <div className="flex-shink-0">
        <img
          className="rounded"
          src="/images/product.jpg"
          width={80}
          height={80}
          alt="Product image."
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex-grow-1 ms-3 h-100">
        <div className="vstack">
          <Link href="/product/1">
            <a className="text-dark text-decoration-none">Nombre de producto</a>
          </Link>
          <small className="text-muted mb-2" style={{ fontSize: 12 }}>
            <span>Detalle</span>
            ,&nbsp;
            <span>Detalle</span>
          </small>
          <h6 className="mb-0">1 &times; $100.000</h6>
        </div>
      </div>
    </div>
  );
}

export default ReviewCartItem;
