import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCs7KP1nDpDok6colmzhA03HmYiXFxxW4E",
  authDomain: "fiverr-clone-f3161.firebaseapp.com",
  projectId: "fiverr-clone-f3161",
  storageBucket: "fiverr-clone-f3161.appspot.com",
  messagingSenderId: "367280215836",
  appId: "1:367280215836:web:3f23a561fb36ca6b68ccd9"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
