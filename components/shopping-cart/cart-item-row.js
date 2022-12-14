import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { isInteger } from "formik";
function CartItemRow(props) {


  const api= axios.create({
    baseURL: 'http://localhost:5000/api'
  })
  const deleteItem=(event)=>{
    event.preventDefault()
    const id= props.id
    const id_producto= props.id_producto
    api.post('http://localhost:5000/api/cart/delete',{
      id: id,
      id_producto:id_producto
    })

  }





  return (
    <form onSubmit={deleteItem}>
      <tr>
        <td scope="row">
          <div className="hstack">
            <img
              className="rounded"
              src={props.imagen}
              width={80}
              height={80}
              alt="Product image."
              style={{ objectFit: "cover" }}
            />
            <div className="ms-3">
            <span className="h5">
              <Link href="/product/1">
                <a className="link-dark text-decoration-none">
                  {props.nombre}
                </a>
              </Link>
            </span>
              <small className="d-flex text-muted" style={{ fontSize: 12 }}>
                <span>{props.marca}</span>


              </small>
            </div>
          </div>
        </td>
        <td>
          <h6 className="mb-0">${props.precio}</h6>
        </td>
        <td>
          <div className="d-flex">
            <div>
              <div className="input-group input-group-sm" style={{ width: 30, marginLeft:15, marginRight:15 }}>

                <input
                  type="text"
                  className="form-control text-center border-primary"
                  placeholder=""
                  defaultValue="1"
                  size="2"
                />

              </div>
            </div>
          </div>
        </td>
        <td>
          <button className="btn btn-sm btn-danger" type="submit">
            <FontAwesomeIcon icon={["fas", "trash-alt"]} />
          </button>
        </td>
      </tr>
    </form>
  );
}

export default CartItemRow;