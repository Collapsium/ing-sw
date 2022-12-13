import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartItemRow from "../../components/shopping-cart/cart-item-row";
import PricingCard from "../../components/shopping-cart/pricing-card";
import {useRouter} from 'next/router'
import axios from "axios";
import {useEffect} from "react";

function ShoppingCart() {
/*
  //get info de /api/carrito:id_persona

  const api = axios.create({
    baseURL: 'http://localhost:5000/api/'
  })

  useEffect(() => {
    const id_persona = 1
    const obtenerData = async () => {
      const result = await api.get(`/carrito/${id_persona}`) //id persona
      setData(result.data)
    }
    if(isNaN(id_persona)){

    }else{
      obtenerData()
    }
  },[id_persona])

  console.log("data", data)

  //mappear en:  cart-item-row para tener la info de cada prod de carrito
  --div--
  {data.map((datito,i)=>{
                return(
                  <div key={i}>
                    <CartItemRow id_cliente={datito.id_cliente} id_producto={datito.id_producto} stock={1} />
                  </div>
                )
              })}
  --div--
  const subtotal = 0
  const total = subtotal + 3000;
  //calcular precio total y luego enviar ese dato a  pricing-card
  //get products
  {data.map((datito,i)=>{
                subtotal += datito.precio
              })}
  const total = subtotal + 3000;
  Luego  <PricingCard total={total}/> y poner las props en el componente
*/

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
                  <tbody>
                    <CartItemRow />

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
          <PricingCard />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default ShoppingCart;
