import { useEffect, useState } from "react";

function Card({ product }) {
  const [quantity, setQuantity] = useState(0);

  function handleInputChange(e) {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setQuantity(newValue);
    }
  }
  function increment() {
    setQuantity((prevQuantity) => {
      return prevQuantity + 1;
    });
  }
  function decrement() {
    quantity > 0
      ? setQuantity((prevQuantity) => {
          return prevQuantity - 1;
        })
      : null;
  }
  useEffect(() => {
    console.log(quantity);
  }, [quantity]);

  return (
    <div className="card">
      <div className="card-container">
        <p className="card-title">
          {product.title} <br></br>Price:{product.price}${" "}
        </p>
        <div className="image-container">
          <img src={product.image} alt="Image of a product" />
        </div>
        <div className="buttons">
          <button className="minus-button" onClick={decrement}>
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleInputChange(e)}
          />
          <button className="plus-button" onClick={increment}>
            +
          </button>
        </div>
        <div className="add-container">
          <button className="add">Add</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
