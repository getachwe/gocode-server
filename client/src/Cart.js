import ProductContext from "./ProductContext";
import { useContext } from "react";
import "./CartProducts.css";
import Badge from "@material-ui/core/Badge";
import Button from '@material-ui/core/Button';

import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
// import DeleteIcon from "@material-ui/icons/Delete";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import PaymentIcon from "@material-ui/icons/Payment";
// //import AddIcon from "@material-ui/icons/Add";
// import RemoveIcon from "@material-ui/icons/Remove";
// import FilterVintageOutlinedIcon from "@material-ui/icons/FilterVintageOutlined";
// import RemoveShoppingCartRoundedIcon from "@material-ui/icons/RemoveShoppingCartRounded";





//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function Cart() {
  const { cart } = useContext(ProductContext);
  const { totalPrice } = useContext(ProductContext);
  const { totalItem } = useContext(ProductContext);
   const { addToCart } = useContext(ProductContext);
  // const { removeFromCart } = useContext(ProductContext);
  // const { removeAll } = useContext(ProductContext);
  // const { deleteItem } = useContext(ProductContext);

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

  const cartItem = (
    <ol className="cart-items">
      {cart.map((item) => (
        <li>
          <img src={item.image} />
          <br />
          <span className="price">title:</span>
          <br />
          {item.title} <br />
          <span className="price">price:</span>
          {item.price}$<br />
          <br />
          
        </li>
      ))}
    </ol>
  );



  return (
    <div className="cart">
      <span className="mycart">
        <br />
        My Cart
      </span>
      {cartItem}
      <div className="total">
        <span>Total Amount:</span>
        <span>{totalPrice}$</span>
      </div>
      <div className="total">
        <span>Total Items:</span>
        <span>{totalItem}</span>
      </div>
      <div className="actions">
        <Button className="button--alt" color="primary" >Close</Button>
        <Button className="button" color="primary"  >Order</Button>
      </div>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="secondary"></StyledBadge>
      </IconButton>
    </div>
  );
}
export default Cart;
