import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import axios from "axios";
function ProductGridCard(props) {

  const api = axios.create({
    baseURL: 'http://localhost:5000/api/'
  })

  let count=0
  function addCart(){
    const id_producto= props.id
    const precio= props.precio
    const nombre= props.nombre
    const marca= props.marca
    const imagen=props.imagen
    api.post('http://localhost:5000/api/cart/add',{
      id_cliente: 4,
      id_producto: id_producto,
      cantidad: 1,
      precio: precio,
      nombre: nombre,
      marca: marca,
      imagen: imagen
    })
    count+=1
    console.log("done")
  }
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
          <div className="d-flex mb-3 gap-2">


                      <span className="text-success small">
                      <FontAwesomeIcon icon={["fas", "circle"]} />
                        &nbsp;{props.stock} Unidades disponibles
                    </span>




          </div>
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

          <h6 className="fw-semibold">${props.precio}</h6>

          <div className="hstack gap-2">
            <form onSubmit={addCart}>
              <button type="submit" className="btn btn-sm btn-secondary text-primary flex-grow-1 d-none d-lg-block">
                <FontAwesomeIcon icon={["fas", "cart-plus"]} />
                &nbsp;Ir al producto
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGridCard;