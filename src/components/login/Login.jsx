import React from "react";

const Login = ({ onClose, onSwitch }) => {
  const handleLogin = (e) => {
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
          &times;
        </button>
        <form onSubmit={handleLogin} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Sign in to get access to the ChatBot
          </h2>
          <h3 className="text-black">
            Don't have an account?{" "}
            <a onClick={handleSwitch} className="underline">
              Sign up
            </a>
          </h3>
          <div>
            <input
              placeholder="Email address"
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              placeholder="Password"
              id="password"
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <a className="text-black">Forgot password?</a>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Sign in
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

export default Login;
