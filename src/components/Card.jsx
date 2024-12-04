function Card() {
  return (
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
  );
}
