import React from "react";
import banner from "../../Images/banner.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4 mt-10">
      <div>
        <h1 className="text-center my-6 text-3xl text-blue-400">
          Inventory of electronic store
        </h1>
        <p className="text-md text-slate-400 p-10 shadow-lg rounded-full">
          Here we handle our products properly and with the utmost care. All our
          product information is well managed. The quantity and price of all the
          products are managed very carefully. So the products here are safe and
          secure
        </p>
      </div>
      <div className="rounded-lg">
        <img
          className="rounded-lg w-full"
          src={banner}
          alt="electronic store banner"
        />
      </div>
    </div>
  );
};

export default Banner;
