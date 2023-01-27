import { useContext} from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../../../components/ProductItem";
import { ProductContext } from "../../../context";
import "./list.style.scss";

const Products = () => {
  const { state } = useContext(ProductContext);
  return (
    <>
      <div className="home-page">
        <Container>
          <Row>
            {state?.products?.map((item, index) => (
              <Col className="pb-5 " key={index} xs={12} md={3}>
                <ProductItem productInfo={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Products;
