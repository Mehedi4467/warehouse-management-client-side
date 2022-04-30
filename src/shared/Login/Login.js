import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  return (
    <div className="w-2/4 mx-auto mt-20 p-10 shadow-lg rounded-lg hover:shadow-2xl">
      <h1 className="text-xl text-blue-400 font-bold text-center mb-10">
        WelCome To Login
      </h1>
      <div className="text-center">
        <input
          className="w-full  outline-blue-300 border-2 h-10 rounded-lg px-4"
          type="email"
          placeholder="Your Email"
        />
      </div>
      <div className="text-center my-4">
        <input
          className="w-full  outline-blue-300 border-2 h-10 rounded-lg px-4"
          type="email"
          placeholder="Your Email"
        />
      </div>

      <div className="text-right">
        <button className="text-orange-400">Forgot Password?</button>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-400 text-white h-12 w-32 rounded-full cursor-pointer hover:bg-blue-500"
        >
          Login
        </button>
      </div>

      <div className="text-center mt-2">
        <p className="text-slate-400">
          Don’t have an account?
          <Link className="text-orange-400 hover:text-orange-500" to="/reg">
            Sign Up Now!
          </Link>{" "}
        </p>
      </div>

      <hr className="my-6"></hr>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
