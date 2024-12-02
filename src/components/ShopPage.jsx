import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function ShopPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      fetch("https://fakestoreapi.com/products?limit=8")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    };
    fetchProducts();
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <>
      <NavBar />
      <main>
        <h1>Our products:</h1>
        <div className="products-container">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="card-container">
                <p className="card-title">{product.title}</p>
                <div className="image-container">
                  <img src={product.image} alt="Image of a product" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default ShopPage;
