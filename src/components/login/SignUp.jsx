import React, { useState, useEffect } from "react";

const SignUp = ({ onClose, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [allowSubmit, setAllowSubmit] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isBadPassword, setIsBadPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (password.length > 5) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  }, [password]);

  useEffect(() => {
    if (checkPassword !== password && checkPassword.length > 0) {
      setIsBadPassword(true);
    } else {
      setIsBadPassword(false);
    }
    if (isValidPassword && checkPassword === password) {
      setAllowSubmit(true);
    } else {
      setAllowSubmit(false);
    }
  }, [checkPassword, password, isValidPassword]);

  const handleSignUp = (e) => {
    e.preventDefault();
    onClose();
  };
  const handleSwitch = (e) => {
    e.preventDefault();
    onClose();
    onSwitch();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <form onSubmit={handleSignUp} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Sign up to get access to the ChatBot
          </h2>
          <h3 className="text-black">
            Already have an account?{" "}
            <a onClick={handleSwitch} className="underline">
              Sign in
            </a>
          </h3>
          <div>
            <label className="block text-sm text-gray-600 mb-1" htmlFor="email">
              Email address
            </label>
            <input
              placeholder="e.g., yourname@mail.com"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1" htmlFor="email">
              Create Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Must have at least 6 characters"
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <label
              className={`block text-sm mb-1 ${
                isBadPassword ? "text-red-500" : "text-gray-600"
              }`}
              htmlFor="email"
            >
              {isBadPassword ? "Password does not match" : "Re-type Password"}
            </label>
            <input
              placeholder="Re-type Password"
              id="checkpassword"
              type="password"
              name="checkpassword"
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isValidPassword}
            />
          </div>
          <button
            type="submit"
            onClick={allowSubmit ? handleSignUp : undefined}
            className={`w-full py-2 rounded ${
              allowSubmit
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
            }`}
            disabled={!allowSubmit}
          >
            Sign up
          </button>
          <div>or</div>
          <button className="border-black px-4 py-2 hover:bg-slate-50">
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
