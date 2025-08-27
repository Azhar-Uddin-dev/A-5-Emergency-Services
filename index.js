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
        li.textContent = `${buttonName} clicked | Spent $20 | Remaining: ${balance} | ${now.toLocaleString()}`;
        historyList.appendChild(li);
      } else {
        alert("❌ Not enough balance!");
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



    
  