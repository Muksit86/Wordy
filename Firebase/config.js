import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_xchfU9Ci9sTTmk7nqy9YZIk7N43WToU",
  authDomain: "wordy-afd75.firebaseapp.com",
  projectId: "wordy-afd75",
  storageBucket: "wordy-afd75.firebasestorage.app",
  messagingSenderId: "602705414735",
  appId: "1:602705414735:web:cd6bcdf91b87b7c224383a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
