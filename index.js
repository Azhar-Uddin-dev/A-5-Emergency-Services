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
  