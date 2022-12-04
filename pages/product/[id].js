import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductRating from "../../components/product-rating";
import ProductSimpleHorizontal from "../../components/product/product-simple-horizontal";

function ProductDetail() {
  const images = [2, 4, 6, 8, 1];

  return (
    <div className="vstack">
      <div className="bg-secondary">
        <div className="container">
          <div className="row py-4 px-2">
            <nav aria-label="breadcrumb col-12">
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <a href="#">Todos los productos</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Accesorios</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Nombre de producto
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white mb-4">
        <div className="container py-4">
          <div className="row gy-3 gx-4">
            <div className="col-lg-5">
              <div className="row">
                <div className="col-12">
                  <div className="ratio ratio-1x1">
                    <img
                      className="rounded"
                      src="/images/product.jpg"
                      width={300}
                      height={300}
                      alt="Product image."
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3 d-none d-lg-block">
                <div className="col-12 d-flex justify-content-center">
                  {images.map((e) => {
                    return (
                      <div
                        key={e}
                        style={{ width: 60 }}
                        className="me-2 ratio ratio-1x1"
                      >
                        <img
                          className="rounded"
                          src="/images/product.jpg"
                          width={60}
                          height={60}
                          alt="Product image."
                          key={e}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="d-flex">
                <div className="d-inline h2 mb-0 fw-semibold me-3">
                  Nombre de producto
                </div>
                {/*<div className="ms-auto">
                  <button
                    className="btn btn-outline-secondary text-primary border"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Add to wish list"
                  >
                    <FontAwesomeIcon icon={["far", "heart"]} size="lg" />
                  </button>
                </div>*/}
              </div>

              <div className="vstack">
                <div className="d-flex mb-3 gap-2">
                  <ProductRating />
                  <span className="text-muted small">5 reseñas</span>
                  <span className="text-success small">
                    <FontAwesomeIcon icon={["fas", "check-circle"]} />
                    &nbsp;Hay existencias
                  </span>
                </div>
                <h4 className="fw-semibold">$100.000</h4>
                <p className="fw-light">
                  Descripción del producto
                </p>
                <dl className="row mb-0">
                  <dt className="col-sm-3 fw-semibold">Código #</dt>
                  <dd className="col-sm-9">123</dd>
                  <dt className="col-sm-3 fw-semibold">Stock</dt>
                  <dd className="col-sm-9">10</dd>
                </dl>
                <hr className="text-muted" />
                {/*<dl className="row gy-2 mb-4">
                  <dt className="col-12 fw-semibold">Color</dt>
                  <dd className="col-12">
                    <div className="hstack gap-2">
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="color1"
                          id="c1"
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="c1"
                        >
                          Red
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="color2"
                          id="c2"
                          checked
                          onChange={() => {}}
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="c2"
                        >
                          Green
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="color3"
                          id="c3"
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="c3"
                        >
                          Blue
                        </label>
                      </div>
                    </div>
                  </dd>

                  <dt className="col-12 fw-semibold">Size</dt>
                  <dd className="col-12">
                    <div className="hstack gap-2">
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="size1"
                          id="s1"
                          checked
                          onChange={() => {}}
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="s1"
                        >
                          Small
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="size2"
                          id="s2"
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="s2"
                        >
                          Medium
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="size3"
                          id="s3"
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="c3"
                        >
                          Large
                        </label>
                      </div>
                    </div>
                  </dd>
                </dl>*/}

                <div className="d-flex">
                  <a
                    href="#"
                    className="btn btn-primary px-md-4 col col-md-auto me-2"
                  >
                    Comprar
                  </a>
                  <button className="btn btn-outline-primary col col-md-auto">
                    <FontAwesomeIcon icon={["fas", "cart-plus"]} />
                    &nbsp;Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-3">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div
                className="px-3 d-flex border-bottom overflow-auto"
                style={{ height: 70 }}
              >
                <ul className="nav nav-pills my-auto flex-nowrap">
                  <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="true">
                      Descripción
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Especificaciones
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis ultricies lacus sed turpis tincidunt. Urna cursus eget
                  nunc scelerisque.
                </p>
              </div>
              <div className="card-footer py-3">
                <small>
                  <FontAwesomeIcon
                    icon={["fas", "truck"]}
                    className="text-success me-2"
                  />
                  Envío entre 1 y 2 semanas.
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="px-3 d-flex border-bottom" style={{ height: 70 }}>
                <h5 className="my-auto fw-semibold">Productos relacionados</h5>
              </div>
              <div className="card-body">
                <ProductSimpleHorizontal id={1} />
                <ProductSimpleHorizontal id={2} />
                <ProductSimpleHorizontal id={3} />
                <ProductSimpleHorizontal id={4} />
                <ProductSimpleHorizontal id={5} />
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

export default ProductDetail;
