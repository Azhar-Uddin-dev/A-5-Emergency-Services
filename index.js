// Heart button
let count = 0;
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".myBtn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    count++;
    display.textContent = count;
  });
});

// Copy button
let copyCount = 0;
const copyDisplay = document.getElementById("copyDisplay");
const copyButtons = document.querySelectorAll(".copyBtn");

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const number = button.getAttribute("data-number");
    navigator.clipboard.writeText(number);

    copyCount++;
    copyDisplay.textContent = copyCount;

    alert("Copied Number: " + number);
  });
});

// Call history
let balance = 100;
const balanceDisplay = document.getElementById("coin");
const buttons2 = document.querySelectorAll(".spendBtn");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

function spend(buttonName) {
  if (balance >= 20) {
    balance -= 20;
    balanceDisplay.textContent = balance;

    alert("📞 Calling " + buttonName);

    const li = document.createElement("li");
    const now = new Date();
    li.textContent = `${buttonName}    ${now.toLocaleString()}`;
    historyList.appendChild(li);
  } else {
    alert("❌ পর্যাপ্ত কয়েন নেই!");
  }
}

buttons2.forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-name");
    spend(name);
  });
});

clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
