//  _______________________  documnet.queryseletor(". / #") section ______________________
 // Select the bill input tag/element
let billInput = document.querySelector(".bill");
console.log(billInput);

let peopleInput = document.querySelector(".people");
console.log(peopleInput);

let tipPercent = document.querySelector(".select-btn");
console.log(tipPercent);
// Get all buttons with the class "select-btn"
let buttons = document.querySelectorAll(".select-btn button")
console.log(buttons);

let tipAmount = document.querySelector("#tip");
console.log(tipAmount);

let total = document.querySelector("#total");
console.log(total);

let reset = document.querySelector(".reset");

// ________________________ document.addEventListener("", fuction) section _________________

let billValue = 0;
// Log the value when the input changes
billInput.addEventListener("input", function() {
    // Retrieve the value from the input field
    billValue = billInput.value;
    console.log("Bill:", billValue);
});

let peopleValue = 1;
peopleInput.addEventListener("input", function() {
    // Retrieve the value from the input field
    peopleValue = peopleInput.value
    console.log("Number of People:", peopleValue);
});

buttons.forEach(button => {
    button.addEventListener('click', function(){
        let percentage = parseInt(button.textContent)
        console.log("percentage: ", percentage);
    });
});

let percentValue = 0;
tipPercent.addEventListener("click", function(){
    percentValue = parseInt(tipPercent.value);
    console.log(percentValue);
});





