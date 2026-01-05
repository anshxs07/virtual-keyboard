const output = document.getElementById("output");
const keys = document.querySelectorAll("#keyboard button");

let isShift = false;

// Add event listener for each button
keys.forEach(key => {
  key.addEventListener("click", () => {
    const value = key.textContent;

    if (value === "Shift") {
      // Toggle Shift
      isShift = !isShift;
      key.classList.toggle("active");
    } 
    else if (value === "Space") {
      output.value += " ";
    } 
    else if (value === "Backspace") {
      output.value = output.value.slice(0, -1);
    } 
    else {
      // Add letter (upper or lower)
      const letter = isShift ? value.toUpperCase() : value.toLowerCase();
      output.value += letter;
    }
  });
});
