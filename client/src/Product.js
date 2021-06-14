import { useContext } from "react";
import "./Product.css";
import ProductContext from "./ProductContext";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from "@material-ui/core";
function Product({ title, image, id, price, description }) {
  const {  addToCart  } = useContext(ProductContext);
  const {  quantityP } = useContext(ProductContext);
  return (

   
      <div className="product-card">  
        
        <div className="product-image">
          {" "}
         <h3> <img src={image} alt={title} title={description} /></h3>
        </div>

       
       <div className="product-info">
        <Link to={`products/${id}`}>
          <h5>{title}</h5>
          </Link>
  
          <h6>{price}$</h6>
  
         
          <br />
          <span className="strong">
            {" "}
            quantity at <br /> cart :
          </span>
          {quantityP(title)}
          <Button  variant="contained" color="primary"  onClick={() => addToCart (title)}>add product</Button>
        </div>
        
        
      </div>
    );

  //   <div class="product-card">
    
  //     <div class="product-image">
  //       <img src={image} alt={title} title={description} />
  //     </div>
      
  //       <div class="product-info">
  //       <Link to={`/products/${id}`}>
  //         <h5>{title}</h5>
  //         </Link>

  //         <h6>${price}</h6>
  //       </div>
      
  //     <button onClick={() => addProduct(title)}>add product</button>
  //   </div>
  // );
}
export default Product;
