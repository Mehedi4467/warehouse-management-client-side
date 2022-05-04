import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { _id, name, img, price, supplier, description, quantity } = product;

  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
      <div className=" flex justify-center">
        <div className="shadow-lg rounded-lg py-4 px-6 w-2/4">
          <div className="w-1/2 mx-auto">
            <img src={img} alt={name}></img>
          </div>
          <div className="my-6">
            <p className="text-center text-orange-500 text-xl">{name}</p>
            <p className="text-blue-500">ID: {_id}</p>
            <p className="text-lg">Quantity: {quantity}</p>
            <p className="text-lg">Price : {price}&#x09F3;</p>
            <p className="text-slate-400">{description}</p>
          </div>
          <div className="flex justify-center">
            <button className="px-16 rounded-lg py-4 bg-blue-400 text-white hover:bg-blue-500">
              Delivered
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl text-blue-500">Restock the item</h2>
        <form className="mt-10 justify-center">
          <input
            class="block w-1/2 bg-gray-200 text-gray-700
          border border-red-500 rounded py-3 px-4 mb-3 leading-tight
          focus:outline-none focus:bg-white"
            type="number"
            placeholder="Restock"
          />

          <button className="px-16 rounded-lg py-4 bg-blue-400 text-white hover:bg-blue-500">
            Restock
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inventory;
