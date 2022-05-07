import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="text-center">
      <p className="text-center text-orange-500 mb-4">
        {error && error?.message}
      </p>

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
          onClick={() => signInWithGoogle()}
          className="bg-blue-400 hover:bg-blue-500 px-10 py-4  text-white rounded-full "
        >
          <div className="flex justify-between items-center">
            <i className="text-white mr-2 font-xl fa-brands fa-google"></i>
            <p>Sign In With Google</p>
          </div>
        </button>
      )}
    </div>
  );
};

export default SocialLogin;
