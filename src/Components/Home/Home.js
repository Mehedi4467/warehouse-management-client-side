import React from "react";
import Banner from "./Banner";
import Items from "./Items";
import ManageProduct from "./ManageProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <ManageProduct></ManageProduct>
      <Items></Items>
      <ToastContainer />
    </div>
  );
};

export default Home;
