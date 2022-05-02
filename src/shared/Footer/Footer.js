import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-10 bg-slate-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto text-center  justify-center">
          <div className="flex justify-center items-center">
            <Link
              className="text-2xl flex items-center justify-center text-blue-500 font-bold shadow-2xl w-1/2 p-4 rounded-full"
              to="/"
            >
              Electronic Store
            </Link>
          </div>

          <div className="my-10 md:my-0">
            <h1 className="text-xl pb-3">Useful Link</h1>
            <Link className="block hover:text-orange-500" to="/">
              Home
            </Link>
            <Link className="block hover:text-orange-500" to="/blogs">
              Blogs
            </Link>
            <Link className="block hover:text-orange-500" to="/login">
              Login
            </Link>
            <Link className="block hover:text-orange-500" to="/reg">
              Registration
            </Link>
          </div>
          <div className="">
            <h1 className="text-xl pb-3">Contact</h1>
            <p>
              <b>Email :</b> mehedihassan4467@gmail.com
            </p>
            <p>
              <b>Address :</b> Shewrapara,Mirpur-10, Dhaka
            </p>
            <p>
              <b>Phone :</b> 01784452434
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
