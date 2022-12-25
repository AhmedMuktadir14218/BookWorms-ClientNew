// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyB1IONzLLFO0zWor6BJIhC5dP6950jG2Yo",
//   authDomain: "freashvalley2.firebaseapp.com",
//   projectId: "freashvalley2",
//   storageBucket: "freashvalley2.appspot.com",
//   messagingSenderId: "45809925446",
//   appId: "1:45809925446:web:68b71da5027208c517b947"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBq8Lstm-AwCTWsaYsh31-QNMH0o1L1B1k",
  authDomain: "bookworms-51eca.firebaseapp.com",
  projectId: "bookworms-51eca",
  storageBucket: "bookworms-51eca.appspot.com",
  messagingSenderId: "19472998208",
  appId: "1:19472998208:web:24d0b6fa619e543eaa24a5"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;