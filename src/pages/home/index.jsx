import axios from "axios";
import { useContext, useEffect, useState } from "react";
import LoadingComponent from "../../components/Loading/loadingComponent";
import { getStorage } from "../../utility/localstorage";
import Products from "./list";
import { ProductContext } from "../../context";

const Home = () =>
{
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      const products = getStorage("products");
      if (!products || !products.length) {
        setLoading(true);
        try {
          const { data: response } = await axios.get(
            "https://fakestoreapi.com/products"
          );
          dispatch({ type: "SET_PRODUCTS", payload: response });
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      } else {
        if (products) {
          dispatch({ type: "SET_PRODUCTS", payload: products });
        }
      }
    })();
  }, [dispatch]);

  return <>{loading ? <LoadingComponent /> : <Products />}</>;
}

export default Home;