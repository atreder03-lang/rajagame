// IMPORT FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc } 
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

// INIT APP
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// TEMP FIXED USER ID (Later login will replace)
const userId = "user";

// GET USER WALLET
export async function getWallet() {
  const snap = await getDoc(doc(db, "users", userId));
  return snap.data().balance;
}

// UPDATE WALLET BALANCE
export async function updateWallet(amount) {
  const userRef = doc(db, "users", userId);
  const snap = await getDoc(userRef);
  const newBal = snap.data().balance + amount;
  await updateDoc(userRef, { balance: newBal });
  return newBal;
}
