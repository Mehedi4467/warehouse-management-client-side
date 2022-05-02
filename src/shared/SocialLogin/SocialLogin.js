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
        className="bg-blue-400 hover:ng-blue-500 px-10 py-4  text-white rounded-full "
      >
        <div className="flex justify-between items-center">
          <i className="text-white mr-2 font-xl fa-brands fa-google"></i>
          {loading ? <p>Please Wait ....</p> : <p>Sign In With Google</p>}
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
