import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context";



const ProductItem = ({ productInfo }) => {
  const navigate = useNavigate();
  const { image, title, description, id } = productInfo;
  const { dispatch } = useContext(ProductContext);

  const removeItem = () => {
    dispatch({ type: "DELETE_PRODUCT", payload: +id });
  }
  return (
    <>
      <div className="h-100">
        <Card key={id} className="h-100">
          <div className="">
            <Card.Img variant="top" src={image} />
          </div>
          <Card.Body className="px-3">
            <Card.Title className="font-bold">
              <b> {title}</b>
            </Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary" onClick={() => navigate(`/details/${id}`)}>details</Button>
            <Button variant="danger" onClick={() => removeItem()}>remove</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ProductItem;
