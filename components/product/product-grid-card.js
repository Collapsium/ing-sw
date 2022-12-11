import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function ProductGridCard(props) {

/*
  let price = 10000;
  let percentOff;
  let offPrice = `${price}`;

  if (off && off > 0) {
    percentOff = (
      <div
        className="badge bg-dark opacity-75 py-2 text-white position-absolute"
        style={{ top: "0.5rem", right: "0.5rem" }}
      >
        {off}% OFF
      </div>
    );

    offPrice = (
      <>
        ${price - (off * price) / 100}&nbsp;
        <del className="text-muted small fw-normal">${price}</del>
      </>
    );
  }
   */
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="card-body">
        <div className="vstack gap-2">
          <Link href={{
            pathname: `/product/[id]`,
            query:{
              tittle: props.id,
            },
          }}as={`/product/${props.id}`}>
            <a className="mb-1 text-dark text-decoration-none stretched-link">
              {props.nombre}
              <div className="ratio ratio-1x1">
                <img
                  className="card-img-top "
                  src={props.imagen}
                  alt="Product image."
                  style={{ objectFit: "cover" }}
                />
              </div>
            </a>
          </Link>

          <h6 className="fw-semibold">{props.precio}</h6>

          <div className="hstack gap-2">
            <button className="btn btn-secondary text-primary flex-grow-1 d-md-block d-lg-none">
              <FontAwesomeIcon icon={["fas", "cart-plus"]} />
              &nbsp;Añadir al carrito
            </button>
            <button className="btn btn-outline-secondary text-primary border d-md-block d-lg-none">
              <FontAwesomeIcon icon={["far", "heart"]} />
            </button>

            <button className="btn btn-sm btn-secondary text-primary flex-grow-1 d-none d-lg-block">
              <FontAwesomeIcon icon={["fas", "cart-plus"]} />
              &nbsp;Añadir al carrito
            </button>
            <button className="btn btn-sm btn-outline-secondary text-primary border d-none d-lg-block">
              <FontAwesomeIcon icon={["far", "heart"]} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGridCard;
