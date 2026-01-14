// IMPORT FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } 
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyCpVYlhWxkGwvbO0NUCXeT9yNYuTYfkF2Q",
  authDomain: "rajagame94-16274.firebaseapp.com",
  projectId: "rajagame94-16274",
  storageBucket: "rajagame94-16274.firebasestorage.app",
  messagingSenderId: "842689918760",
  appId: "1:842689918760:web:262f823e0fbe30ffcac21d"
};

// INIT
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
