import { useContext, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../../context";
import "./detail.style.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: "GET_PRODUCT", payload: +id });
  }, [dispatch, id]);

  return (
    <>
      <Container className="details-area">
        <Button
          className="btn btn-light custom-btn d-flex justify-content-center"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </Button>
        <br/>
        <Row className="py-5">
          <div className="col-12 col-md-6 ">
            <div className="image-area pe-0 pe-md-5 d-flex align-items-center">
              <img
                src={state?.selectedProduct?.image}
                loading="lazy"
                alt={state?.selectedProduct?.title}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 px-4 px-md-0">
            <h2 className="pb-3 font-bold mt-4 mt-md-0">
              {state?.selectedProduct?.title}
            </h2>
            <div className="d-flex flex-md-row align-items-start">
              <div className="pb-2">
                  <small className="px-1">
                    {state?.selectedProduct?.description}
                  </small>
              </div>
            </div>
            <hr/>
            <div className="d-flex flex-column align-items-start">
                <div className="pb-2">
                  <small className="px-1">
                    <b>Category: </b>
                  </small>
                  <small className="px-1">
                    {state?.selectedProduct?.category}
                  </small>
                </div>
                <div className="pb-2">
                  <small className="px-1">
                    <b>Price: </b>
                  </small>
                  <small> {state?.selectedProduct?.price}$</small>
                </div>
                <div className="pb-2">
                  <small className="px-1">
                    <b>Rate: </b>
                  </small>
                  <small className="px-1">
                    {" "}
                    {state?.selectedProduct?.rating.rate}
                  </small>
                </div>
                <div className="pb-2">
                  <small className="px-1">
                    <b>Count: </b>
                  </small>
                  <small className="px-1">
                    {" "}
                    {state?.selectedProduct?.rating.count}
                  </small>
                </div>
              </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
