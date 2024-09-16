// Get display and history elements
const display = document.getElementById('display');
const history = document.getElementById('history');

// Memory variable
let memory = null;

// Function to append values to display
function appendToDisplay(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Function to clear display
function clearDisplay() {
    display.textContent = '0';
}

// Function to calculate result
function calculate() {
    try {
        // Evaluate the expression
        const result = eval(display.textContent);
        // Update history
        addToHistory(display.textContent + ' = ' + result);
        // Check if result is finite
        if (isFinite(result)) {
            display.textContent = result;
        } else {
            display.textContent = 'Error';
        }
    } catch (e) {
        display.textContent = 'Error';
    }
}

// Function to calculate square root
function calculateSquareRoot() {
    try {
        const result = Math.sqrt(parseFloat(display.textContent));
        if (isFinite(result)) {
            display.textContent = result;
        } else {
            display.textContent = 'Error';
        }
    } catch (e) {
        display.textContent = 'Error';
    }
}

// Function to calculate percentage
function calculatePercentage() {
    try {
        const result = parseFloat(display.textContent) / 100;
        if (isFinite(result)) {
            display.textContent = result;
        } else {
            display.textContent = 'Error';
        }
    } catch (e) {
        display.textContent = 'Error';
    }
}

// Function to store memory
function storeMemory() {
    memory = parseFloat(display.textContent);
}

// Function to recall memory
function recallMemory() {
    if (memory !== null) {
        display.textContent = memory;
    }
}

// Function to show history
function showHistory() {
    history.style.display = history.style.display === 'block' ? 'none' : 'block';
}

// Function to add to history
function addToHistory(entry) {
    history.innerHTML = (history.innerHTML ? history.innerHTML + '<br>' : '') + entry;
}

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || ['/', '*', '-', '+', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.textContent = display.textContent.slice(0, -1) || '0';
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
