import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    };

    getData();
  }, []);

  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <Products cart={cart} data={data} setCart={setCart} />
    </>
  );
}

export default App;
