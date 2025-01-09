import { useState } from "react";
import { login } from "../../firebase/handleAauth.js";

const Login = ({ onClose, onSwitch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFailedLogin, setIsFailedLogin] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(
      email,
      setEmail,
      password,
      setPassword,
      setIsFailedLogin
    );
    if (success) {
      onClose();
    }
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
        <form onSubmit={handleLogin} className="space-y-4">
          {isFailedLogin && (
            <p className="text-red-600 font-bold">Invalid email or password</p>
          )}
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
            <label className="block text-sm text-gray-600 mb-1" htmlFor="email">
              Email address
            </label>
            <input
              placeholder="e.g., yourname@mail.com"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1" htmlFor="email">
              Password
            </label>
            <input
              placeholder="Must have at least 6 characters"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
