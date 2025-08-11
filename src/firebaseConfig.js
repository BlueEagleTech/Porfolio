import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2FmyqFLSUVA1nY38tmljiOfqt_Bd2K_w",
  authDomain: "porfolio-61801.firebaseapp.com",
  projectId: "porfolio-61801",
  storageBucket: "porfolio-61801.appspot.com",  // corrigé
  messagingSenderId: "560168932899",
  appId: "1:560168932899:web:6aaab2a4835fdc1ec10396",
  measurementId: "G-4QGFH31XMS"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
