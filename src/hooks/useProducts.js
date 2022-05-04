import { useEffect, useState } from "react";

const useProducts = () => {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [Items, setItems];
};

export default useProducts;
