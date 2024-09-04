// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMs8jM8VAM3TEqjpKzykOy7I_nMXPmelY",
  authDomain: "e-commerce-ee388.firebaseapp.com",
  projectId: "e-commerce-ee388",
  storageBucket: "e-commerce-ee388.appspot.com",
  messagingSenderId: "991090168819",
  appId: "1:991090168819:web:dbeab142009fbc0a523886",
  measurementId: "G-26199S87YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);