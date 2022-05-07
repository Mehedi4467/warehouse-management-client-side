import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useProducts from "../../hooks/useProducts";

const ItemNotify = () => {
  const [Items] = useProducts();
  const lowQuantity = Items.find((item) => item.quantity <= 1);
  console.log(lowQuantity);
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="shadow-lg p-4 rounded-lg flex justify-center text-center">
          <div>
            <p className="text-lg text-blue-400">Low Quantity product</p>
            <div>
              <img
                className="flex justify-center mx-auto"
                src={lowQuantity?.img}
                width="100px"
                alt=""
              />
              <p className="text-blue-300">Price: {lowQuantity?.price}</p>
              <p className="text-blue-300">Quantity: {lowQuantity?.quantity}</p>
            </div>
          </div>
        </div>
        <div className="shadow-lg p-4 rounded-lg flex justify-center text-center">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={Items}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="quantity"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ItemNotify;
