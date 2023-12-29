//  _______________________  documnet.queryseletor(". / #") section ______________________
// Select the bill input tag/element
let billInput = document.querySelector(".bill");
// console.log(billInput);

let peopleInput = document.querySelector(".people");
// console.log(peopleInput);

let tipPercent = document.querySelector(".select-btn");
// console.log(tipPercent);
// Get all buttons with the class "select-btn", returns a NodeList
let buttons = document.querySelectorAll(".select-btn button");
// console.log(buttons);

let tipAmount = document.querySelector("#tip");
// console.log(tipAmount);

let getTotal = document.querySelector("#total");
// console.log(total);

let reset = document.querySelector(".reset");

// ________________________ document.addEventListener("", fuction) section _________________

let billValue = 0;
// Log the value when the input changes
billInput.addEventListener("input", function () {
  // Retrieve the value from the input field
  billValue = parseInt(billInput.value);
  console.log("Bill:", billValue);
});

let peopleValue = 1;
peopleInput.addEventListener("input", function () {
  // Retrieve the value from the input field
  peopleValue = peopleInput.value;
  console.log("Number of People:", peopleValue);
});

let percentValue = 0;
// add event listeners, on NodeList
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // Prevent the default behavior of the button click
    event.preventDefault();
    percentValue = parseInt(button.textContent);
    // let percentage = parseInt(button.textContent)
    // console.log("percentage: ", percentage);
    console.log("Button clicked:", percentValue);

    // call updateTipAmount function to update #tip
    updateTipAmount();

    //call updateTotal function to update #total
    updateTotal();
  });
});

// Add a separate event listener for the "Custom" button
const customButton = document.getElementById("Custom");
customButton.addEventListener("click", function () {
  console.log("Custom button clicked!");
});

// #tip , tipAmount
function updateTipAmount() {
  let tip = (billValue * percentValue) / 100 / peopleValue;
  tipAmount.textContent = `$${tip.toFixed(2)}`;
  return tip;
}

//#total , getTotal
function updateTotal() {
  let tip = (billValue * percentValue) / 100;
  billValue = billInput.value;
  peopleValue = peopleInput.value;
  console.log("billValue is: ", billValue, "tip is: ", tip, "peopleValue is :", peopleValue);
  
  let total = parseInt(billValue) + parseInt(tip) / parseInt(peopleValue);
  console.log(typeof(parseInt(peopleValue)));
  console.log("total is: ", total);
  getTotal.textContent = `$${total}`;
  return total;
}

