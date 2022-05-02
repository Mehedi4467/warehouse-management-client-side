import React, { useEffect, useState } from "react";
import Item from "./Item";

const Items = () => {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    fetch("fakedb.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  console.log(Items);
  return (
    <div>
      <h2 className="text-2xl text-blue-500 text-center my-10">
        Inventory Items
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {Items.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
