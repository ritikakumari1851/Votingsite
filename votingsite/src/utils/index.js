// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh4CaeYp_L-9zACbxGz3crzNZUKK8JGa8",
  authDomain: "voteonclick.firebaseapp.com",
  projectId: "voteonclick",
  storageBucket: "voteonclick.appspot.com",
  messagingSenderId: "655528303511",
  appId: "1:655528303511:web:81c4b58700134a12c1c2d2",
  measurementId: "G-MVZ96EDNVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {analytics}