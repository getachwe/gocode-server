import Header from "./Header";
import CartProducts from "./Cart";
import "./Product.css";
import Products from "./Products";
import "./App.css";
import Button from '@material-ui/core/Button';
import { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import { Route, Switch } from "react-router";
import ProductDetails from "./views/ProductDetails";
import { Link,  BrowserRouter as Router } from "react-router-dom";
import Home from "./views/Home";
function App() {
  // const [products, setproducts] = useState([]);
  // const [choice, setchoice] = useState("All categories");
  // const groupBy = (xs, key) =>
  //   xs.reduce((rv, x) => {
  //     rv[x[key]] = true || [];
  //     return rv;
  //   }, {});


  const [choice, setChoice] = useState("All categories");
  const [products, setProducts] = useState([]);
  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});

  const categories = Object.keys(groupBy(products, "category"));


  function myChoice(category) {
    setChoice(category);
  }

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // function change(val) {
  //   setchoice(val);
  // }
  // function fetchproducts() {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((response) => response.json())
  //     .then((data) => setproducts(data));
  // }
  // useEffect(() => {
  //   fetchproducts();
  // }, []);

  // const [cart, setCart] = useState([]);
  // const [totalPrice, settotalPrice] = useState(0);
  // const [totalItem, settotalItem] = useState(0);

  
  const [cart, setCart] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


  function addToCart(title) {
    const myProduct = products.find((p) => p.title === title);
    if (cart.find((p) => p.title === myProduct.title)) {
      setCart(
        cart.map((p) =>
          p.title === myProduct.title ? { ...p, quantity: ++p.quantity } : p
        )
      );
    } else {
      setCart([...cart, { ...myProduct, quantity: 1 }]);
    }
    setTotalItem(totalItem + 1);
    setTotalPrice(totalPrice + myProduct.price);
  }

  function removeFromCart(title) {
    const myProduct = cart.find((p) => p.title === title);
    if (myProduct.quantity > 1) {
      setCart(
        cart.map((p) =>
          p.title === myProduct.title ? { ...p, quantity: --p.quantity } : p
        )
      );
    } else {
      --myProduct.quantity;
      setCart(cart.filter((p) => p.title !== myProduct.title));
    }
    setTotalItem(totalItem - 1);
    setTotalPrice(totalPrice - myProduct.price);
  }

  function deleteItem(title) {
    const myProduct = cart.find((p) => p.title === title);
    setTotalItem(totalItem - myProduct.quantity);
    setTotalPrice(totalPrice - myProduct.price * myProduct.quantity);
    myProduct.quantity = 0;
    setCart(cart.filter((p) => p.title !== myProduct.title));
  }

  function quantityP(title) {
    let myProduct = cart.find((p) => p.title === title);
    if (myProduct) {
      return myProduct.quantity;
    } else {
      return 0;
    }
  }

  function removeAll() {
    setCart([]);
    setTotalItem(0);
    setTotalPrice(0);
  }

  function choiceCategory(choice) {
    const productOfCategory = products.filter(
      (p) => p.category === choice || choice === "All categories"
    );
    return productOfCategory;
  }

  const productCategory = choiceCategory(choice);
  const priceCategory = productCategory.map((p) => p.price);
  const minPrice = Math.min(...priceCategory);
  const maxPrice = Math.max(...priceCategory);
  const [value, setValue] = useState([minPrice, maxPrice]);
  const [isShown, setIsShown] = useState(false);

  return (
    <ProductContext.Provider
      value={{
        addToCart,
        totalItem,
        totalPrice,
        cart,
        removeFromCart,
        quantityP,
        setCart,
        deleteItem,
        removeAll,
        minPrice,
        maxPrice,
        value,
        setValue,
        categories,
        myChoice,
        productCategory,
        isShown,
        products,
      }}
    >
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsShown(!isShown)}>
              <div className="App">
                <br />
                <br />
                <br />
                {!isShown ? "HOME" : ""}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Router>
          <Switch>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </ProductContext.Provider>
  );
}





//   function addProduct(title) {
//     const arrProduct = products.filter((p) => p.title === title);
//     const MyProducts = {
//       id: cart.length + 1,
//       title: arrProduct[0].title,
//       price: arrProduct[0].price,
//       Image: arrProduct[0].Image,
//       description: arrProduct[0].description,
//       category: arrProduct[0].category,
//     };
//     setCart([...cart, MyProducts]);
//     settotalItem(cart.length + 1);
//     settotalPrice(totalPrice + MyProducts.price);
//   }
//   const productCategory = choiceCategory(choice);
//   const priceCategory = productCategory.map((p) => p.price);
//   const minPrice = Math.min(...priceCategory);
//   const maxPrice = Math.max(...priceCategory);
//   const [value, setValue] = useState([minPrice, maxPrice]);
//   const [isShown, setIsShown] = useState(false);
//   return (
//     <ProductContext.Provider
//       value={{ addProduct, totalPrice, totalItem, cart }}
//     >
//       <div className="App">
//         <Switch>
//           <Route path="/products/:id">
//             <ProductDetais />
//           </Route>
//         </Switch>
//         <CartProducts />
//         <Header categories={categories} change={change} />

//         <Products
//           products={products.filter(
//             (prop) => prop.category === choice || choice === "All categories"
//           )}
//         />
//       </div>
//     </ProductContext.Provider>
//   );
// }
export default App;
