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


    console.log(data)



    return (
    <div className="vstack">
      <div className="bg-secondary">
        <div className="container">
          <div className="row py-4 px-2">
            <nav aria-label="breadcrumb col-12">
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <a href="#">Productos</a>
                </li>
              </ol>
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
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                  >
                    Categorias
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body pt-2">
                    <div className="vstack gap-2">
                      <a
                        href="#"
                        className="fw-medium link-dark text-decoration-none"
                      >
                        Accesorios
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-bottom">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                  >
                    Marcas
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body pt-2">
                    <div className="vstack gap-2">
                      <div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">Kawasaki</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          12
                        </span>
                      </div>
                      {/*<div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">Samsung</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          100
                        </span>
                      </div>
                      <div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">Sony</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          30
                        </span>
                      </div>
                      <div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">AOC</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          60
                        </span>
                      </div>*/}
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                  >
                    Rango de Precios
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body pt-0">
                    <form className="row g-3">
                      <div className="col-6">
                        <label className="form-label">Mín</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-6">
                        <label className="form-label">Máx</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100">Aplicar</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hstack justify-content-between mb-3">
              <span className="text-dark">12 productos encontrados</span>
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
                    <ProductGridCard  id={datito.id} title={datito.value} price={datito.numerito} />
                  </div>
                )
              })}

            </div>

            <nav className="float-end mt-3">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previo
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Siguiente
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreProducts;
