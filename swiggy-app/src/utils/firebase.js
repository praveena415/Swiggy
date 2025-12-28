import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZerQNasRLFWhFRJZtFuT9-63i_Ee_nkw",
  authDomain: "food-delivery-app-b818e.firebaseapp.com",
  databaseURL: "https://food-delivery-app-b818e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "food-delivery-app-b818e",
  storageBucket: "food-delivery-app-b818e.firebasestorage.app",
  messagingSenderId: "340162284452",
  appId: "1:340162284452:web:2d76d222a08d0f0f7a0f31",
  measurementId: "G-1X14D3M99B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};