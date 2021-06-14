import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Grid } from "@material-ui/core";
function ProductDetais() {
  const [productsdetais, setproductsdetais] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchproducts();
  }, []);

  function fetchproducts() {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setproductsdetais(data));
  }
  return (
    // <div>
    // {productsdetais.id}
    // {productsdetais.title}
    // {productsdetais.image}
    // {productsdetais.price}
    // </div>
    
    <div className="detail">
    <h1>{productsdetais.title}</h1>
    <img src={productsdetais.image} alt={productsdetais.title} width="300" />
    <p className="price">Price: ${productsdetais.price}</p>
    <p>{productsdetais.description}</p>
  </div>
  


    
  );
}
export default ProductDetais;
