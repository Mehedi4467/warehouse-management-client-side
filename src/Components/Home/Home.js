import React from "react";
import Banner from "./Banner";
import Items from "./Items";
import ManageProduct from "./ManageProduct";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <ManageProduct></ManageProduct>
      <Items></Items>
    </div>
  );
};

export default Home;
