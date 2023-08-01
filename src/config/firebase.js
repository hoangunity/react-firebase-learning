import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDRZxdfoeI1bgRL6FxdezXFYDzL_nrBIR4",
  authDomain: "fir-course-98d6d.firebaseapp.com",
  projectId: "fir-course-98d6d",
  storageBucket: "fir-course-98d6d.appspot.com",
  messagingSenderId: "898626708139",
  appId: "1:898626708139:web:e79866bffe9f4efa404dee",
  measurementId: "G-98KKQWNT7R",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
