import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-e0Z1IF0igOsiH1BNJcNPbX1cS18-iaQ",
    authDomain: "musashi-store.firebaseapp.com",
    projectId: "musashi-store",
    storageBucket: "musashi-store.appspot.com",
    messagingSenderId: "174057325615",
    appId: "1:174057325615:web:d91ee811565a9345a272da"
  };
  
   const app = initializeApp(firebaseConfig);
  
   export const db = getFirestore(app)