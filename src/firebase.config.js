import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "1:629576441165:web:00bf7856ed4f6c6e49ab04",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
