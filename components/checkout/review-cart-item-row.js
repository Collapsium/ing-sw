import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

function ReviewCartItemRow() {
  return (
    <tr>
      <td scope="row">
        <div className="hstack">
          <img
            className="rounded"
            src="/images/product.jpg"
            width={80}
            height={80}
            alt="Product image."
            style={{ objectFit: "cover" }}
          />
          <div className="ms-3">
            <span className="h5">Nombre de producto</span>
            <small className="d-flex text-muted" style={{ fontSize: 12 }}>
              <span>Detalle</span>
              ,&nbsp;
              <span>Detalle</span>
            </small>
          </div>
        </div>
      </td>
      <td className="text-end">
        <span>1 &times; $100.000</span>
      </td>
    </tr>
  );
}

export default ReviewCartItemRow;
