import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const { _id, name, price, img, supplier, description, quantity } = item;
  const navigate = useNavigate();
  const navigateToService = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
      <div className="py-10">
        <div className="h-50 max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-[300px] h-[380px] mx-auto" src={img} alt={name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
              {description.slice(0, 150)}
            </p>
          </div>
          <div className="px-6 pb-2">
            <p className="text-blue-400 text-xl">Price - {price}&#x09F3;</p>
            <p className="text-blue-400 text-lg">Quantity - {quantity}</p>
            <p className="p-3 shadow-lg text-center rounded-full text-orange-500 font-bold">
              Supplier - {supplier}
            </p>
          </div>
          <button
            onClick={() => navigateToService(_id)}
            className="bg-blue-400 hover:bg-blue-500 w-full py-2 text-white font-bold"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
