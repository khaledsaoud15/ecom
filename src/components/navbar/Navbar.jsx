import "./navbar.css";
import carttt from "../../images/empty.png";
import { useState } from "react";

const Navbar = ({ cart, setCart }) => {
  const [active, setActive] = useState(false);

  const deleteFromCart = (id) => {
    const find = cart.find((c) => c.id === id);
    const index = cart.indexOf(find);
    cart.splice(index, 1);
    setCart([...cart]);
    if (cart.length < 1) {
      const shop = document.querySelector(".shopContainer");
      console.log(shop.classList.remove("active"));
    }
  };

  return (
    <div className="navbar">
      <h1 className="logo">Store</h1>
      <div className="links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
      </div>
      <div className="cart">
        <div className="shop">
          <img src={carttt} alt="" onClick={() => setActive(!active)} />
          <h3>{cart.length}</h3>
          <div className={active ? "shopContainer active" : " shopContainer"}>
            {cart.map((c) => {
              return (
                <div className="shopCard">
                  <img src={c.image} alt="" />
                  <div className="shopContent">
                    <h1>{c.category}</h1>
                    <p>{c.price}</p>
                    <button onClick={() => deleteFromCart(c.id)}>Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
