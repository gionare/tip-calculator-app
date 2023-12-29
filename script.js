//  _______________________  documnet.queryseletor(". / #") section ______________________
// Select the bill input tag/element
let billInput = document.querySelector(".bill");
// console.log(billInput);

let peopleInput = document.querySelector(".people");
// console.log(peopleInput);

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

  calculate();
});

let peopleValue = 1;
peopleInput.addEventListener("input", function () {
  // Retrieve the value from the input field
  peopleValue = parseInt(peopleInput.value);
  console.log("Number of People:", peopleValue);

  calculate();
});

reset.addEventListener("click", function() {
  billInput.value = 0;
  peopleInput.value = 1;
  tipAmount.textContent = `$0.00`;
  getTotal.textContent = `$0.00`;
})

let percentValue = 0;
// add event listeners, on NodeList
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // Prevent the default behavior of the button click
    event.preventDefault();
    percentValue = parseInt(event.target.textContent);
    // let percentage = parseInt(button.textContent)
    // console.log("percentage: ", percentage);
    console.log("Button clicked:", percentValue);

    // call updateTipAmount function to update #tip

    //call updateTotal function to update #total
    calculate();
  });
});

// Add a separate event listener for the "Custom" button
const customButton = document.getElementById("Custom");
customButton.addEventListener("click", function () {
  console.log("Custom button clicked!");
});

// #tip , tipAmount


//#total , getTotal
function calculate() {
  let tip = (parseInt(billInput.value) * percentValue) / 100 / parseInt(peopleInput.value);

  let total = parseInt(billInput.value) / parseInt(peopleInput.value) + tip 
  console.log("billValue is: ", parseInt(billInput.value), "tip is: ", tip, "peopleValue is :", peopleValue);
console.log(percentValue);
  if(billInput.value && peopleInput.value && percentValue && tip != Infinity){ 
  tipAmount.textContent = `$${tip.toFixed(2)}`;
  getTotal.textContent = `$${total.toFixed(2)}`;
  } else {
    tipAmount.textContent = `$0.00`;
  getTotal.textContent = `$0.00`;
  }
}

