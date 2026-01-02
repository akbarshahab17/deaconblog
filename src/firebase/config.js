import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD-69agjAbKpwlX5hrZXAyT9-3PV0Wp8U",
  authDomain: "deacon-blog.firebaseapp.com",
  projectId: "deacon-blog",
  storageBucket: "deacon-blog.firebasestorage.app",
  messagingSenderId: "914670148892",
  appId: "1:914670148892:web:718d8db5b02cb49559eed9"
};

const app = initializeApp(firebaseConfig);      

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();