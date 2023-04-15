import "./products.css";

const Products = ({ cart, data, setCart }) => {
  const addToCart = (id) => {
    const find = data.find((d) => d.id === id);
    setCart([...cart, find]);
  };

  return (
    <div className="container">
      {data.map((d) => {
        return (
          <div className="card">
            <img src={d.image} alt="" />
            <div className="content">
              <h1>{d.title}</h1>
              <span>{d.price}</span>
            </div>
            <p className="desc">{d.description}</p>
            <div className="category">
              <h4>{d.category}</h4>
              <button onClick={() => addToCart(d.id)}>Add To Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
