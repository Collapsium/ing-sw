import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-responsive-carousel";
import ProductSimpleCard from "../components/product/product-simple-card";

import React, {useEffect,useState} from 'react'
import axios from "axios";

export default function Home() {
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
    <div>

      <div className="container py-3">
        <div className="row mb-4">
          <div className="col-12">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              transitionTime={500}
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li className="d-inline-block m-2 text-light">
                      <FontAwesomeIcon icon={["fas", "circle"]} size="xs" />
                    </li>
                  );
                }
                return (
                  <li
                    className="d-inline-block m-2 text-light text-opacity-50"
                    onClick={onClickHandler}
                    key={index}
                    role="button"
                    tabIndex={0}
                  >
                    <FontAwesomeIcon icon={["fas", "circle"]} size="xs" />
                  </li>
                );
              }}
            >
              <div className="ratio ratio-21x9">
                <img
                  src="/images/wall.jpg"
                  alt="Cover image"
                  className="rounded"
                />
              </div>
              <div className="ratio ratio-21x9">
                <img
                  src="/images/wall.jpg"
                  alt="Cover image"
                  className="rounded"
                />
              </div>
              <div className="ratio ratio-21x9">
                <img
                  src="/images/wall.jpg"
                  alt="Cover image"
                  className="rounded"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <figure className="figure card-body mb-0">
                <div
                  className="bg-secondary rounded-circle d-flex mb-2"
                  style={{ width: 50, height: 50 }}
                >
                  <FontAwesomeIcon
                    icon={["fas", "money-bill-alt"]}
                    size="lg"
                    className="text-primary m-auto"
                  />
                </div>
                <h5 className="mb-1 fw-bold">Los mejores precios</h5>
                <figcaption className="figure-caption text-dark">
                  Precios acorde al mercado, con productos de buena calidad traídos del extranjero.
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <figure className="figure card-body mb-0">
                <div
                  className="bg-secondary rounded-circle d-flex mb-2"
                  style={{ width: 50, height: 50 }}
                >
                  <FontAwesomeIcon
                    icon={["fas", "headset"]}
                    size="lg"
                    className="text-primary m-auto"
                  />
                </div>
                <h5 className="mb-1 fw-bold">Atención</h5>
                <figcaption className="figure-caption text-dark">
                  Rápida atención por distintos medios de comunicación, disponible para todos los clientes.
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <figure className="figure card-body mb-0">
                <div
                  className="bg-secondary rounded-circle d-flex mb-2"
                  style={{ width: 50, height: 50 }}
                >
                  <FontAwesomeIcon
                    icon={["fas", "truck"]}
                    size="lg"
                    className="text-primary m-auto"
                  />
                </div>
                <h5 className="mb-1 fw-bold">Envío</h5>
                <figcaption className="figure-caption text-dark">
                  Envíos a domicilio entre 1 a 2 semanas dentro de todo el país.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <h4 className="mb-3 fw-semibold">Últimos productos agregados</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-5">

          {data.map((datito,i)=>{
            return(
              <div key={i}>
                <ProductSimpleCard id={datito.id} title={datito.value} />
              </div>
              )
          } )}
        </div>
      </div>
      {/* <div className="d-flex flex-column align-items-center bg-primary py-5">
        <span className="mb-4 text-light text-opacity-75">
          Subscribe for promotions and wonderful events
        </span>
        <form className="d-flex">
          <div className="me-2">
            <input
              type="email"
              className="form-control"
              placeholder="Your email"
              size="24"
            />
          </div>
          <button className="btn btn-warning">
            <FontAwesomeIcon icon={["fas", "envelope"]} className="me-2" />
            Subscribe
          </button>
        </form>
      </div> */}
    </div>
  );
}
