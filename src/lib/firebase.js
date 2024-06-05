import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d7b3e.firebaseapp.com",
  projectId: "reactchat-d7b3e",
  storageBucket: "reactchat-d7b3e.appspot.com",
  messagingSenderId: "191504063446",
  appId: "1:191504063446:web:fd767cc3462d93f38ee277",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
