# Frontend Mentor - Interactive rating component

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## What I learned

1. for of loop
```js
let rate_btns = document.querySelectorAll('#rate_btn');
for (const i of rate_btns) {
    i.addEventListener('click', (event) => {
        sessionStorage.setItem("rate", event.target.value);
    });
}
```
