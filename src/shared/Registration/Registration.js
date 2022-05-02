import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";

const Registration = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const handelSignUp = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="w-full md:w-2/4 mx-auto my-10 md:my-20 p-10 shadow-lg rounded-lg hover:shadow-2xl">
        <h1 className="text-xl text-blue-400 font-bold text-center mb-10">
          WelCome To Login
        </h1>

        <p className="text-center text-orange-500 mb-4">
          {error && error?.message}
        </p>
        <form onSubmit={handelSignUp}>
          <div className="text-center mb-4">
            <input
              className="w-full  outline-blue-300 border-2 h-10 rounded-lg px-4"
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="text-center">
            <input
              className="w-full  outline-blue-300 border-2 h-10 rounded-lg px-4"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="text-center my-4">
            <input
              className="w-full  outline-blue-300 border-2 h-10 rounded-lg px-4"
              type="password"
              name="password"
              placeholder="Password "
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-400 text-white h-12 w-32 rounded-full cursor-pointer hover:bg-blue-500"
            >
              {loading ? "Please wait ... " : " Registration"}
            </button>
          </div>
        </form>

        <div className="text-center mt-2">
          <p className="text-slate-400">
            Already have an account?
            <Link className="text-orange-400 hover:text-orange-500" to="/login">
              Login Now!
            </Link>{" "}
          </p>
        </div>

        <hr className="my-6"></hr>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Registration;
