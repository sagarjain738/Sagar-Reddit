// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"; // Fore creating App
import { getAuth } from "firebase/auth"; // Firebase authentication
import { getFirestore } from "firebase/firestore"; // Used for Json data
import { getStorage } from "firebase/storage"; // Used for Storing Image & Videos

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
// In NextJS we use SSR thats why we dont want to initialize the Firebase on bothe server side &
// Client side so what we will do is check if the App already exist or not and then only we will proceed
// further

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
