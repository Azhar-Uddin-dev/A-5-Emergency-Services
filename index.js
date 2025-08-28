// Heart button click event: increment count by 1++
    let count = 0;
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".myBtn");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        count++;
        display.textContent = count;
      });
    });
    // copy button click event
let copyCount = 0;
    const copyDisplay = document.getElementById("copyDisplay");
    const copyButtons = document.querySelectorAll(".copyBtn");
    copyButtons.forEach(button => {
      button.addEventListener("click", () => {
        copyCount++;
        copyDisplay.textContent = copyCount;
      });
    });
    // Call history
    let balance = 100;
    const balanceDisplay = document.getElementById("coin");
    const buttons2 = document.querySelectorAll(".spendBtn");
    const historyList = document.getElementById("historyList");
    const clearHistoryBtn = document.getElementById("clearHistory");

    // Function to spend $20
    function spend(buttonName) {
      if (balance >= 20) {
        balance -= 20;
        balanceDisplay.textContent = balance;

        // Add to history
        const li = document.createElement("li");
        const now = new Date();
        li.textContent = `${ alert("Calling" + buttonName)} ${buttonName}    ${now.toLocaleString()}`;
        historyList.appendChild(li);
      } else {
        alert("❌ পর্যাপ্ত পরিমাণ কয়েন নেই!");
      }
    }

    // Add click event to all spend buttons
    buttons2.forEach(btn => {
      btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-name"); // get button name
        spend(name);
      });
    });

    // Clear history
    clearHistoryBtn.addEventListener("click", () => {
      historyList.innerHTML = "";
    })



    
  