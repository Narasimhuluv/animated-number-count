let count = document.querySelector(".count");
let initialValue = 0;

// Update the counter with setInterval
let updateCounter = setInterval(() => {
 initialValue++;
 count.textContent = initialValue;

 // Stop when the counter reaches 985
 if (initialValue >= 250) {
  clearInterval(updateCounter);
 }
}, 1);

// let count = document.querySelector(".count");
// let initialValue = 0;
// let targetValue = 985;

// function updateCounter() {
//  if (initialValue < targetValue) {
//   initialValue++;
//   count.textContent = initialValue;
//   requestAnimationFrame(updateCounter);
//  }
// }

// updateCounter();
