import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA9onouFQRkhRm40_CaP3WtPzSQGGERP8Y",
  authDomain: "tarangini-b7fa0.firebaseapp.com",
  projectId: "tarangini-b7fa0",
  storageBucket: "tarangini-b7fa0.appspot.com",
  messagingSenderId: "129185514747",
  appId: "1:129185514747:web:daa03d4ec8a904e41f1c5e",
  measurementId: "G-41K900R7E4"
};





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signOutUser = () => signOut(auth);
export const db = getFirestore(app);
