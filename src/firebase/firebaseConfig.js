import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFNnchwA-JmmCBrTot3VNF2MpS9EZSJmo",
  authDomain: "portfolio-e472d.firebaseapp.com",
  projectId: "portfolio-e472d",
  storageBucket: "portfolio-e472d.firebasestorage.app",
  messagingSenderId: "31464580943",
  appId: "1:31464580943:web:e34440d5983a3fcb2bc73a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
