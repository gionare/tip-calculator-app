## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

- My HTML and CSS code is well-structured and organized forms and input sections logically, i have tried to keep it simple and effective. 
- What's happening in script.js 
  * Im getting various DOM elements representing input fields, buttons, and result areas.
  * Variables to store values such as the bill amount, number of people, and tip percentage.
  * Event listeners for input changes (bill and number of people) and button clicks (for    predefined tip percentages and the "Custom" button).
  * When the bill or number of people changes, My code updates corresponding variables and logs the changes.
  * When a button is clicked, it prevents the default behavior, updates the tip amount and total, and logs the selected tip percentage.
  * There's a placeholder event for the "Custom" button click.
  * Two functions (updateTipAmount and updateTotal) are defined to calculate and update the tip and total amounts in the DOM.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

<img src="./screenshot.jpg" alt="image preview" width="500px">

### Links

- Solution URL: [Github source code](https://github.com/gionare/tip-calculator-app)
- Live Site URL: [live site URL](https://gionare.github.io/tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

See this section of my major learnings while working through this project. Providing code samples of areas i want to highlight. Great way to reinforce own knowledge.

```html
 <input type="number" id="green" class="bill" placeholder="0" />
```
```css
label,
input,
button {
  font-family: "Space Mono", monospace !important;
}
```
```js
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
```

### Continued development

continue focusing on in future projects. completely comfortable with useful techniques, want to refine and perfect.

### Useful resources

- - Google - [Google] (https://google.com) - Quite helpful 
- - BitCamp Mentor - [@beqa200] - Helped me for finalizing my code

## Author

- Website - [Giorgi Nareklishvili Portfolio](https://portfolio-giorgi-nareklishvili.vercel.app/)
- LinkedIn - [Giorgi Nareklishvili LinkedIn](https://www.linkedin.com/in/gionare/)
- Github: [Github: ](https://github.com/gionare)

## Acknowledgments

@Bitcamp
@beqa200