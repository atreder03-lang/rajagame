import { getWallet, updateWallet } from "./config.js";

let balance = 0;

async function loadWallet() {
  balance = await getWallet();
  document.getElementById("wallet").innerText = balance;
}

export async function placeBet(amount) {
  if (balance < amount) {
    alert("Not enough balance!");
    return false;
  }

  balance -= amount;
  await updateWallet(-amount);
  document.getElementById("wallet").innerText = balance;
  return true;
}

export async function addWin(amount) {
  balance += amount;
  await updateWallet(amount);
  document.getElementById("wallet").innerText = balance;
}

window.onload = loadWallet;
