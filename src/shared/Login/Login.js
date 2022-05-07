import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../Spinner/Spinner";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [resetEmail, setresetEmail] = useState("");
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handelLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="w-full md:w-2/4 mx-auto my-10 md:my-20 p-10 shadow-lg rounded-lg hover:shadow-2xl">
      <h1 className="text-xl text-blue-400 font-bold text-center mb-10">
        WelCome To Login
      </h1>
      <p className="text-center text-orange-500 mb-4">
        {error && error?.message}
      </p>
      <form onSubmit={handelLogIn}>
        <div className="text-center">
          <input
            className="w-full  outline-blue-300 border-2 h-10 rounded-lg px-4"
            type="email"
            placeholder="Your Email"
            name="email"
            required
            onChange={(e) => setresetEmail(e.target.value)}
          />
        </div>
        <div className="text-center my-4">
          <input
            className="w-full  outline-blue-300 border-2 h-10 rounded-lg px-4"
            type="password"
            placeholder="Password "
            name="password"
            required
          />
        </div>

        <div className="text-right">
          <button
            onClick={async () => {
              if (resetEmail !== "") {
                await sendPasswordResetEmail(resetEmail);
                toast("Sent email");
              }
            }}
            className="text-orange-400"
          >
            Forgot Password?
          </button>
        </div>

        <div className="text-center">
          {loading ? (
            <button
              disabled
              className="bg-blue-400 hover:bg-blue-500 px-10 cursor-not-allowed py-4 text-white rounded-full "
            >
              <div className="flex justify-between items-center">
                <Spinner height={"h-2"} />
                <p> Processing...</p>
              </div>
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-400 text-white h-12 w-32 rounded-full cursor-pointer hover:bg-blue-500"
            >
              Login
            </button>
          )}
        </div>
      </form>

      <div className="text-center mt-2">
        <p className="text-slate-400">
          Don’t have an account?
          <Link className="text-orange-400 hover:text-orange-500" to="/reg">
            Sign Up Now!
          </Link>
        </p>
      </div>
      <ToastContainer />
      <hr className="my-6"></hr>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
