import Link from "next/link";
import ProductRating from "../product-rating";
import axios from "axios";



function ProductSimpleCard(props) {


  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="ratio ratio-1x1">
        <img
          className="card-img-top"
          src={props.imagen}
          alt="Product image."
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <Link href={{
          pathname: `/product/[id]`,
          query:{
            tittle: props.id,
        },
        }}as={`/product/${props.id}`}>
          <a className="mb-1 text-dark text-decoration-none stretched-link">
            {props.nombre}
          </a>
        </Link>

        

        <h6 className="mb-0 fw-semibold mt-2">${props.precio}</h6>
      </div>
    </div>
  );

}

export default ProductSimpleCard;
