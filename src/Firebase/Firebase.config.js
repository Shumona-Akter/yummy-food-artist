// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe0ABxspNpeWXK9hh0r4BoNU-NL0DLcUc",
  authDomain: "yummy-food-artist.firebaseapp.com",
  projectId: "yummy-food-artist",
  storageBucket: "yummy-food-artist.appspot.com",
  messagingSenderId: "77529569946",
  appId: "1:77529569946:web:71bbfb6512d412ae645d23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app