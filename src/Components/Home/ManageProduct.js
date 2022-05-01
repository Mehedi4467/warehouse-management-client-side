import React from "react";

const ManageProduct = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      <div className="bg-blue-500 text-center p-6 rounded-lg">
        <i className="text-2xl text-white fa-solid fa-cart-arrow-down"></i>
        <h1 className="text-xl font-bold text-white">Total Items</h1>
        <p className="text-white text-2xl ">300</p>
      </div>

      <div className="bg-orange-400 text-center p-6 rounded-lg">
        <i className="text-2xl text-white fa-solid fa-credit-card"></i>
        <h1 className="text-xl font-bold text-white">Total quantity</h1>
        <p className="text-white text-2xl ">400</p>
      </div>

      <div className="bg-green-400 text-center p-6 rounded-lg">
        <i className="text-2xl text-white fa-solid fa-hand-holding-dollar"></i>
        <h1 className="text-xl font-bold text-white">Total Price</h1>
        <p className="text-white text-2xl ">20000</p>
      </div>
    </div>
  );
};

export default ManageProduct;
