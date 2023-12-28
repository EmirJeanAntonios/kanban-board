import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWS_KZMH7Ey5_XlnEihp9mRLkOW5USbZg",
  authDomain: "react-kanban-board-633ef.firebaseapp.com",
  projectId: "react-kanban-board-633ef",
  storageBucket: "react-kanban-board-633ef.appspot.com",
  messagingSenderId: "798142054401",
  appId: "1:798142054401:web:4973d1a15baf955689c000",
  measurementId: "G-HZECQBZFL7"
};


export const firebaseApp = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp);






