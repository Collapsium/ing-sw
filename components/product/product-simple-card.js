import Link from "next/link";
import ProductRating from "../product-rating";
import axios from "axios";



function ProductSimpleCard(props) {


  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="ratio ratio-1x1">
        <img
          className="card-img-top"
          src="/images/product.jpg"
          alt="Product image."
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <Link href="/product/1">
          <a className="mb-1 text-dark text-decoration-none stretched-link">
            {props.title}
          </a>
        </Link>

        <ProductRating />

        <h6 className="mb-0 fw-semibold mt-2">{props.price}</h6>
      </div>
    </div>
  );

}

export default ProductSimpleCard;
