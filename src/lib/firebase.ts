// firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ NEW

const firebaseConfig = {
  apiKey: "AIzaSyDzAbSQYP4bR8Tlr9yH_FC42diTZ90s-yk",
  authDomain: "uplaud-f2066.firebaseapp.com",
  projectId: "uplaud-f2066",
  storageBucket: "uplaud-f2066.appspot.com",
  messagingSenderId: "1005898203396",
  appId: "1:1005898203396:web:24aa4cff54575debc69051",
  measurementId: "G-X3NR7TZV7W"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);

// ✅ Initialize Firestore
const db = getFirestore(app);

export { app, auth, db, analytics }; // ✅ Export db
