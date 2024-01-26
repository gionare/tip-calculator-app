let billInput = document.querySelector(".bill");
let peopleInput = document.querySelector(".people");
let buttons = document.querySelectorAll(".select-btn button");
let customInput = document.getElementById("custom-tip");
let tipAmount = document.querySelector("#tip");
let getTotal = document.querySelector("#total");
// console.log(tipAmount);
// console.log(buttons); // returns a NodeList
console.log("CUSTOM INPUT: ", customInput);

let reset = document.querySelector(".reset");

// ________________________ billInput.value _________________
let billValue = 0;
// Log the value when the input changes
billInput.addEventListener("input", function () {
  // Retrieve the value from the input field
  billValue = parseInt(billInput.value);
  console.log("Bill:", billValue);
  calculate();
});

// better option
// event.target and billInput is same
// billInput.addEventListener("input", (event) => {
//   billValue = NUmber(event.target.value);
// });

// ________________________ peopleInput.value _________________
let peopleValue = 1;
peopleInput.addEventListener("input", function () {
  // Retrieve the value from the input field
  peopleValue = parseInt(peopleInput.value);
  console.log("Number of People:", peopleValue);
  calculate();
});
// ________________________ reset _________________
reset.addEventListener("click", function () {
  billInput.value = 0;
  peopleInput.value = 1;

  buttons.forEach((btn) => {
    btn.style.backgroundColor = "";
  });

  customInput.value = 0;
  tipAmount.textContent = `$0.00`;
  getTotal.textContent = `$0.00`;
});
// ________________________ percentValue _________________
let percentValue = 0;
// add event listeners, on NodeList
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // Prevent the default behavior of the button click
    event.preventDefault();

    // Remove background color from all buttons

    buttons.forEach((btn) => {
      btn.style.backgroundColor = "";
    });

    // Set background color for the clicked button
    button.style.backgroundColor = "#26c2ae";

    percentValue = parseInt(event.target.textContent);
    console.log("Button clicked:", percentValue);
    calculate();
  });
});
// Add a separate event listener for the "Custom" Custom-tip input
customInput.addEventListener("change", (event) => {
  percentValue = Number(event.target.value);
  calculate();
});

// ________________________ calculations _________________
function calculate() {
  let tip =
    (parseInt(billInput.value) * percentValue) /
    100 /
    parseInt(peopleInput.value);

  let total = parseInt(billInput.value) / parseInt(peopleInput.value) + tip;
  console.log(
    "billValue is: ",
    parseInt(billInput.value),
    "tip is: ",
    tip,
    "peopleValue is :",
    peopleValue
  );
  console.log(percentValue);
  if (billInput.value && peopleInput.value && percentValue && tip != Infinity) {
    tipAmount.textContent = `$${tip.toFixed(2)}`;
    getTotal.textContent = `$${total.toFixed(2)}`;
  } else {
    tipAmount.textContent = `$0.00`;
    getTotal.textContent = `$0.00`;
  }
}
