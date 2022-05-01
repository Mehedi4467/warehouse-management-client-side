import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user, error);
  return (
    <div className="text-center">
      <button
        onClick={() => signInWithGoogle()}
        className="bg-blue-400 hover:ng-blue-500 px-10 py-4 text-white rounded-full "
      >
        <i className="text-white font-xl fa-brands fa-google"></i>{" "}
        {loading ? "Please waite...." : "Sign In With Google"}
      </button>
    </div>
  );
};

export default SocialLogin;
