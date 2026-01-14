import { db } from "./config.js";
import { doc, getDoc, updateDoc } 
from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const userId = "user"; // temp

// GET USER BALANCE
export async function getWallet() {
  const snap = await getDoc(doc(db, "users", userId));
  return snap.data().balance;
}

// UPDATE WALLET
export async function updateWallet(amount) {
  const userRef = doc(db, "users", userId);
  const snap = await getDoc(userRef);
  const newBal = snap.data().balance + amount;
  await updateDoc(userRef, { balance: newBal });
  return newBal;
}
