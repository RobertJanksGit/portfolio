import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

//Setting up login function
const login = async (
  email,
  setEmail,
  password,
  setPassword,
  setIsFailedLogin
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    setEmail("");
    setPassword("");
    setIsFailedLogin("");
    return true;
  } catch (error) {
    setIsFailedLogin(true);
    console.error(`Log in error: ${error.message}`);
    return false;
  }
};

export { login };
