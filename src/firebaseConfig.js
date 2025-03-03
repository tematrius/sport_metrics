import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDP7Wu0489r0uucWIuOPWb2AgQGWtca9bY",
    authDomain: "sportmetrics-24607.firebaseapp.com",
    projectId: "sportmetrics-24607",
    storageBucket: "sportmetrics-24607.firebasestorage.app",
    messagingSenderId: "729991242390",
    appId: "1:729991242390:web:c1b2417930bbfb4acf98b7"
  };

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
