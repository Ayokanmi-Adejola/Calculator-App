// DOM Elements
const display = document.getElementById('result');
const keys = document.querySelectorAll('.key');
const toggle = document.querySelector('.toggle');
const body = document.body;

// Calculator state
let currentValue = '0';
let previousValue = null;
let operation = null;
let resetInput = false;

// Theme handling
// Check for user's preferred color scheme
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const storedTheme = localStorage.getItem('calculator-theme');

if (storedTheme) {
  body.className = storedTheme;
} else if (prefersDarkScheme.matches) {
  body.className = 'theme-1';
} else {
  body.className = 'theme-2';
}

toggle.addEventListener('click', () => {
  if (body.classList.contains('theme-1')) {
    body.className = 'theme-2';
    localStorage.setItem('calculator-theme', 'theme-2');
  } else if (body.classList.contains('theme-2')) {
    body.className = 'theme-3';
    localStorage.setItem('calculator-theme', 'theme-3');
  } else {
    body.className = 'theme-1';
    localStorage.setItem('calculator-theme', 'theme-1');
  }
});

// Calculator functionality
function updateDisplay() {
  display.textContent = currentValue;
}

function appendNumber(number) {
  if (currentValue === '0' || resetInput) {
    currentValue = number;
    resetInput = false;
  } else {
    // Limit the number of digits to prevent overflow
    if (currentValue.length < 16) {
      currentValue += number;
    }
  }
}

function appendDecimal() {
  if (resetInput) {
    currentValue = '0.';
    resetInput = false;
    return;
  }
  
  if (!currentValue.includes('.')) {
    currentValue += '.';
  }
}

function handleOperation(op) {
  if (previousValue === null) {
    previousValue = parseFloat(currentValue);
  } else if (operation) {
    calculate();
  }
  
  operation = op;
  resetInput = true;
}

function calculate() {
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  let result;
  
  switch (operation) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '×':
      result = previous * current;
      break;
    case '/':
      if (current === 0) {
        alert("Cannot divide by zero");
        reset();
        return;
      }
      result = previous / current;
      break;
    default:
      return;
  }
  
  // Format the result to avoid long decimals
  currentValue = result.toString();
  if (currentValue.includes('.') && currentValue.split('.')[1].length > 8) {
    currentValue = result.toFixed(8).replace(/\.?0+$/, '');
  }
  
  operation = null;
  previousValue = null;
  resetInput = true;
}

function reset() {
  currentValue = '0';
  previousValue = null;
  operation = null;
  resetInput = false;
}

function deleteLastChar() {
  if (currentValue.length === 1 || (currentValue.length === 2 && currentValue.startsWith('-'))) {
    currentValue = '0';
  } else {
    currentValue = currentValue.slice(0, -1);
  }
}

// Event listeners for keys
keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.textContent;
    
    // Handle numbers
    if (!isNaN(keyValue) || keyValue === '.') {
      if (keyValue === '.') {
        appendDecimal();
      } else {
        appendNumber(keyValue);
      }
      updateDisplay();
      return;
    }
    
    // Handle operations
    switch (keyValue) {
      case 'RESET':
        reset();
        break;
      case 'DEL':
        deleteLastChar();
        break;
      case '=':
        if (operation && previousValue !== null) {
          calculate();
        }
        break;
      case '+':
      case '-':
      case '×':
      case '/':
        handleOperation(keyValue);
        break;
    }
    
    updateDisplay();
  });
});

// Keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;
  
  // Handle numbers and decimal
  if (!isNaN(key) || key === '.') {
    if (key === '.') {
      appendDecimal();
    } else {
      appendNumber(key);
    }
    updateDisplay();
    return;
  }
  
  // Handle operations
  switch (key) {
    case 'Enter':
      if (operation && previousValue !== null) {
        calculate();
      }
      break;
    case 'Escape':
      reset();
      break;
    case 'Backspace':
      deleteLastChar();
      break;
    case '+':
    case '-':
      handleOperation(key);
      break;
    case '*':
      handleOperation('×');
      break;
    case '/':
      handleOperation('/');
      break;
  }
  
  updateDisplay();
});

// Initialize display
updateDisplay();