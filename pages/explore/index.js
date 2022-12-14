import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductGridCard from "../../components/product/product-grid-card";
import React, {useEffect,useState} from 'react'
import axios from "axios";
import ProductSimpleCard from "../../components/product/product-simple-card";

function ExploreProducts() {

    const [data, setData] = useState([]);

    const api = axios.create({
      baseURL: 'http://localhost:5000/api/'
    })

    useEffect(() => {
      const obtenerData = async () => {
        const result = await api.get('/products')
        setData(result.data)
      }

      obtenerData()

    }, []);



    return (
    <div className="vstack">
      <div className="bg-secondary">
        <div className="container">
          <div className="row py-4 px-2">
            <nav aria-label="breadcrumb col-12">

            </nav>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-lg-3">
            <div className="accordion shadow-sm rounded">
              <div className="accordion-item border-bottom">

                <h2 className="accordion-header">
                  <button
                    className="accordion-button fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                  >
                    Marcas disponibles
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                >

                  <div className="accordion-body pt-2">
                    <div className="vstack gap-2">
                      {data.map((datito,i)=>{
                        return(
                      <div key={i} className="d-flex gap-2">
                        <label className="fw-medium flex-grow-1">{datito.marca}</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          {datito.stock}
                        </span>
                      </div>)})}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-9">
            <div className="hstack justify-content-between mb-3">
              <div className="btn-group" role="group">
                <button className="btn btn-outline-dark">
                  <FontAwesomeIcon icon={["fas", "sort-amount-up"]} />
                </button>
                <button className="btn btn-outline-dark">
                  <FontAwesomeIcon icon={["fas", "th-list"]} />
                </button>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
              {data.map((datito,i)=>{
                return(
                  <div key={i}>
                    <ProductGridCard  id={datito.id} nombre={datito.nombre} precio={datito.costo} imagen={datito.imagen} />
                  </div>
                )
              })}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
