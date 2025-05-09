# Frontend Mentor - Calculator App Solution

This is my solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Live Demo](#live-demo)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [How To Use](#how-to-use)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- Perform basic mathematical operations (addition, subtraction, multiplication, division)
- See the size of elements adjust based on their device's screen size
- Switch between three different color themes
- Have their initial theme preference detected using `prefers-color-scheme`
- Have theme preferences saved in the browser for future visits

### Features

- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Theme Switching**: Three distinct color themes to choose from
- **Memory Function**: Remembers your theme preference
- **Keyboard Support**: Use your keyboard for calculations
- **Error Handling**: Prevents division by zero and handles other errors

### Screenshots

Theme 1 (Default/Dark):
![Theme 1](./design/desktop-design-theme-1.jpg)

Theme 2 (Light):
![Theme 2](./design/desktop-design-theme-2.jpg)

Theme 3 (Purple):
![Theme 3](./design/desktop-design-theme-3.jpg)

### Live Demo

- [Live Site URL](https://ayokanmi-adejola.github.io/Calculator-App/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- Local Storage API

### What I Learned

This project helped me strengthen my understanding of:

- CSS custom properties for theme switching
- JavaScript calculator logic
- Responsive design principles
- User preference detection with `prefers-color-scheme`
- Local storage for saving user preferences

Some code highlights:

```css
/* Theme switching with CSS variables */
:root {
  /* Theme variables defined here */
}

.theme-1 {
  background-color: var(--main-bg-1);
  color: var(--text-light-1);
}
```

```js
// Theme preference detection
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const storedTheme = localStorage.getItem('calculator-theme');

if (storedTheme) {
  body.className = storedTheme;
} else if (prefersDarkScheme.matches) {
  body.className = 'theme-1';
} else {
  body.className = 'theme-2';
}
```

### Continued Development

In future projects, I'd like to focus on:

- Adding more advanced calculator functions
- Implementing keyboard shortcuts
- Improving accessibility features
- Adding animation effects for better user experience

## How To Use

1. **Basic Calculations**:
   - Click the number buttons to input values
   - Use operation buttons (+, -, ×, /) to perform calculations
   - Press "=" to see the result
   - "RESET" clears all values
   - "DEL" removes the last digit

2. **Theme Switching**:
   - Click the toggle switch at the top to cycle through themes
   - Your preference will be saved for future visits

3. **Keyboard Support**:
   - Use number keys (0-9) for input
   - Operations: +, -, *, /
   - Enter key for equals
   - Backspace for delete
   - Escape key for reset

## Author

- Website - [Ayokanmi Adejola](https://ayokanmi-adejola-portfolio.netlify.app/)
- Frontend Mentor - [@Ayokanmi-Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)
- Twitter - [@AyokanmiAdejola](https://x.com/AyoAdejola100)

## Acknowledgments

Thanks to Frontend Mentor for providing this challenge and to the FM community for their feedback and support.

Special thanks to [League Spartan](https://fonts.google.com/specimen/League+Spartan) for the beautiful font used in this project.
