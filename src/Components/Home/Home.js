import React from "react";
import Banner from "./Banner";
import Items from "./Items";
import ManageProduct from "./ManageProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemNotify from "../ItemNotify/ItemNotify";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <ManageProduct></ManageProduct>
      <ItemNotify></ItemNotify>
      <Items></Items>
      <ToastContainer />
    </div>
  );
};

export default Home;
