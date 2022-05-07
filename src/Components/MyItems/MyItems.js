import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";

const MyItems = () => {
  const [Items] = useProducts();
  const [user] = useAuthState(auth);
  const myItems = Items.filter((allItems) => allItems.email === user.email);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-xl text-blue-500 text-center">My Items</h2>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {myItems.map((items) => (
          <div key={items._id} className="text-center">
            <img src={items.img} alt={items.name} />
            <p className="text-lg text-blue-400">{items.name}</p>
            <p>Price: {items.price}</p>
            <p>Quantity : {items.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
