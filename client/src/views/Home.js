import { useContext } from "react";
import Header from "../Header";
import Products from "../Products";
import Cart from "../Cart";
import ProductContext from "../ProductContext";

function Home() {
  const { categories, myChoice, productCategory, value } =
    useContext(ProductContext);
  const { isShown } = useContext(ProductContext);
  return (
    <div className="myHome">
      {isShown && (
        <div>
          <Header categories={categories} myChoice={myChoice} />
          <div className="shopping-cart">
            <Cart />
          </div>
          <Products
            products={productCategory.filter(
              (p) =>
                p.price >= Math.min(...value) && p.price <= Math.max(...value)
            )}
          />
        </div>
      )}
    </div>
  );
}
export default Home;
