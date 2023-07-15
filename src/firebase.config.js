import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC31h-s3NmYU_erqqVs74n4_34gr6-xnXc",
  authDomain: "restaurantapp-2be57.firebaseapp.com",
  databaseURL: "https://restaurantapp-2be57-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-2be57",
  storageBucket: "restaurantapp-2be57.appspot.com",
  messagingSenderId: "937892508082",
  appId: "1:937892508082:web:7bc365944538b50304f4ab",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
