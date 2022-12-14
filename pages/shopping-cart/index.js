import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItemRow from "../../components/shopping-cart/cart-item-row";
import PricingCard from "../../components/shopping-cart/pricing-card";
import {useRouter} from 'next/router'
import axios from "axios";
import {useEffect,useState} from "react";
import Cookies from "universal-cookie";


function ShoppingCart() {
  const cookies= new Cookies();
  const id_usuario = cookies.get('id')

  //get info de /api/carrito:id_persona
  const router = useRouter()
  const api = axios.create({
    baseURL: 'http://localhost:5000/api/'
  })



  const [data,setData]=useState([]);

  useEffect(() => {
    const obtenerData = async () => {
      const result = await api.get(`/cart/${id_usuario}`) //id persona
      setData(result.data)

    }

    if(isNaN(id_usuario)){

    }else{
      obtenerData()


    }
  })

  function getPay(){

    const id_usuario=dato[1]
    const id_producto=dato[2]
    api.post('http://localhost:5000/api/products/payment',{
      id_cliente: id_cliente,
      id_producto: id_producto,
      cantidad:1
    })
  }




  //console.log("data", data)
  const dato=[]
  //mappear en:  cart-item-row para tener la info de cada prod de carrito
  //--div--

  let subtotal = 0

  let stocktotal=0
  {data.map((datito,i)=>{
      let aux=0
      dato[0]=datito.id
      dato[1]= datito.id_cliente
      dato[2]= datito.id_producto
      dato[3]= datito.cantidad
      dato[4]= datito.precio
      dato[5]= datito.nombre
      dato[6]= datito.marca
      dato[7]= datito.imagen
      aux=dato[0]
      subtotal += dato[4]*dato[3]

    }

  )}

  //--div--


  //const total = subtotal + 3000;
  //calcular precio total y luego enviar ese dato a  pricing-card
  //get product
  let total = subtotal + 3000;
  //Luego  <PricingCard total={total}/> y poner las props en el componente


  return (
    <div className="container py-4">
      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h5 className="my-2">Carrito de Compras</h5>
            </div>
            <div className="card-body p-2">
              {/* <CartItem />
              <hr className="text-muted my-1" />
              <CartItem />
              <hr className="text-muted my-1" />
              <CartItem /> */}
              <div className="table-responsive">
                <table className="table table-borderless align-middle mb-0">
                  {/* <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col"></th>
                    </tr>
                  </thead> */}
                  <tbody id="cardbody" >

                  {

                  }
                  {data.map((datito,i)=>{
                    return(
                      <div key={i}>
                        <CartItemRow id={datito.id} id_cliente={datito.id_cliente} id_producto={datito.id_producto} stock={datito.cantidad} precio={datito.precio} nombre={datito.nombre} marca={datito.marca} imagen={datito.imagen}/>
                      </div>
                    )
                  })
                  }

                  {/* <tr>
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
            <span className="h5">
            </span>
            <small className="d-flex text-muted" style={{ fontSize: 12 }}>
              <span>Detalle</span>
              ,&nbsp;
              <span>Detalle</span>
            </small>
          </div>
        </div>
      </td>
      <td>
        <h6 className="mb-0">{dato[3]*dato[2]}</h6>
      </td>
      <td>
        <div className="d-flex">

        </div>
      </td>
      <td>
        <button className="btn btn-sm btn-danger" type="button">
          <FontAwesomeIcon icon={["fas", "trash-alt"]} />
        </button>
      </td>

                </tr> */}

                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer py-3">
              <small>
                <FontAwesomeIcon
                  icon={["fas", "truck"]}
                  className="text-success me-2"
                />
                Despachos entre 1 y 2 semanas
              </small>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          {/*<div className="card mb-3 border-0 shadow-sm">
            <div className="card-body">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Coupon code here"
                />
                <button type="button" className="btn btn-primary">
                  Apply
                </button>
              </div>
            </div>
          </div>*/}
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="vstack gap-2">
                <div className="d-flex justify-content-between">
                  <span>Subtotal:</span>
                  <span>{subtotal}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Costo de envío:</span>
                  <span className="text-success">+$3.000</span>
                </div>

                <hr className="text-muted" />

                <div className="d-flex justify-content-between">
                  <span className="h5">Total:</span>
                  <span className="fw-bold h5 mb-0">${total}</span>
                </div>

                <div className="d-grid gap-2 mt-2">
                  <a href="/checkout/delivery-info">
                    <button onClick={getPay} className="btn btn-primary">Pagar</button>
                  </a>

                </div>

              </div>
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


export default ShoppingCart;