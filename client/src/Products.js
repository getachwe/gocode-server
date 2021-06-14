import "./Product.css";
import Product from "./Product";
import Spinner from "./Spinner"

// const Products = ({ products }) => (
//   <section className="products">
//   {!products.length && <Spinner/>}
//     {products.map(({title,image,id,price,description}) => (
    
//       <Product
//         key={id}
//         title={title}
//         image={image}
//         price={price}
//         description={description}
//       ></Product>
     
//     ))}
//   </section>
// );

function Products({ products }) {
  return (
    <section className="products">
      {!products.length && <Spinner />}
      {products.map(({ id, image, description, title, price, category }) => (
        <Product
          key={id}
          id={id}
          image={image}
          description={description}
          title={title}
          price={price}
          category={category}
        />
      ))}
    </section>
  );
}
export default Products;
