import React from "react";
import useProducts from "../../hooks/useProducts";

const ManageProduct = () => {
  const [Items] = useProducts();

  const totalPrice = Items.reduce(
    (previousValue, currentValue) => +previousValue + +currentValue.price,
    0
  );
  const totalQuantity = Items.reduce(
    (previousValue, currentValue) => +previousValue + +currentValue.quantity,
    0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      <div className="bg-blue-500 text-center p-6 rounded-lg">
        <i className="text-2xl text-white fa-solid fa-cart-arrow-down"></i>
        <h1 className="text-xl font-bold text-white">Total Items</h1>
        <p className="text-white text-2xl ">{Items.length}</p>
      </div>

      <div className="bg-orange-400 text-center p-6 rounded-lg">
        <i className="text-2xl text-white fa-solid fa-credit-card"></i>
        <h1 className="text-xl font-bold text-white">Total quantity</h1>
        <p className="text-white text-2xl ">{totalQuantity}</p>
      </div>

      <div className="bg-green-400 text-center p-6 rounded-lg">
        <i className="text-2xl text-white fa-solid fa-hand-holding-dollar"></i>
        <h1 className="text-xl font-bold text-white">Total Price</h1>
        <p className="text-white text-2xl ">
          {parseInt(totalPrice.toFixed(2)) * parseInt(totalQuantity)}&#x09F3;
        </p>
      </div>
    </div>
  );
};

export default ManageProduct;
