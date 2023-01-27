import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context";
import './productItem.style.scss';


const ProductItem = ({ productInfo }) => {
  const navigate = useNavigate();
  const { image, title, description, id, price, rating } = productInfo;
  const { dispatch } = useContext(ProductContext);

  const removeItem = () => {
    dispatch({ type: "DELETE_PRODUCT", payload: +id });
  }
  return (
    <>
      <div className="h-100">
        <Card key={id} className="h-100 card-area">
          <div className="image-area">
            <img
                src={image}
                loading="lazy"
                alt={title}
              />
            {/* <Card.Img variant="top" src={image} /> */}
          </div>
          <Card.Body className="px-3">
            <Card.Title className="font-bold title-area">
              <b> {title}</b>
            </Card.Title>
            <Card.Text className="description-area">
              {description}
            </Card.Text>
            <div>
              <ul key={title} className="p-0">
                <li>
                  <b>Price:</b> {price}$
                </li>
                <li>
                  <b>Rating:</b> {rating.rate}
                </li>
              </ul>
            </div>
            <Button variant="primary"  className="ms-2" onClick={() => navigate(`/details/${id}`)}>details</Button>
            <Button variant="danger" className="ms-2" onClick={() => removeItem()}>remove</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ProductItem;
