import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
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
  function handleInputChange(e) {
    setQuantity(e.target.value);
  }
  function increment() {
    setQuantity((prevQuantity) => {
      prevQuantity++;
    });
    console.log(quantity);
  }
  function decrement() {
    quantity > 0
      ? setQuantity((prevQuantity) => {
          prevQuantity--;
        })
      : null;
  }

  return (
    <>
      <NavBar />
      <main>
        <h1>Our products:</h1>
        <div className="products-container">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <div className="card-container">
                <p className="card-title">
                  {product.title} <br></br>Price:{product.price}${" "}
                </p>
                <div className="image-container">
                  <img src={product.image} alt="Image of a product" />
                </div>
                <div className="buttons">
                  <button
                    className="minus-button"
                    onClick={() => {
                      decrement();
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    onChange={(e) => handleInputChange(e)}
                    value={quantity}
                  />
                  <button
                    className="plus-button"
                    onClick={() => {
                      increment();
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="add-container">
                  <button className="add">Add</button>
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
