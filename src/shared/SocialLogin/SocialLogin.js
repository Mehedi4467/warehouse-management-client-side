import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const SocialLogin = () => {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="text-center">
      <p className="text-center text-orange-500 mb-4">
        {error && error?.message}
      </p>
      <button
        onClick={() => signInWithGoogle()}
        className="bg-blue-400 hover:ng-blue-500 px-10 py-4 text-white rounded-full "
      >
        <i className="text-white font-xl fa-brands fa-google"></i>{" "}
        {loading ? "Please wait...." : "Sign In With Google"}
      </button>
    </div>
  );
};

export default SocialLogin;
