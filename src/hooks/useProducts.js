import { useEffect, useState } from "react";

const useProducts = () => {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://gentle-bayou-07991.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [Items, setItems];
};

export default useProducts;
