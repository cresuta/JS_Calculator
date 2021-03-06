const addBtn = document.querySelector('.addition');
const subtractBtn = document.querySelector('.subtraction');
const multiplyBtn = document.querySelector('.multiplication');
const divideBtn = document.querySelector('.division');
const num7 = document.querySelector('.seven');
const num8 = document.querySelector('.eight');
const num9 = document.querySelector('.nine');
const equalsBtn = document.querySelector('.equals');
const num4 = document.querySelector('.four');
const num5 = document.querySelector('.five');
const num6 = document.querySelector('.six');
const num1 = document.querySelector('.one');
const num2 = document.querySelector('.two');
const num3 = document.querySelector('.three');
const num0 = document.querySelector('.zero');
const decimalBtn = document.querySelector('.decimal');
const clearBtn = document.querySelector('.clear');
const display = document.querySelector('.display');
let resultDisplayed = false;

const btnNumbers = [num0,num1,num2,num3,num4,num5,num6,num7,
num8,num9,decimalBtn,clearBtn];

const btnOperators = [addBtn,subtractBtn,multiplyBtn,divideBtn];


for(let btn of btnNumbers) {
    btn.addEventListener('click', (e) => {
        let currentNum = display.innerHTML;
        let lastNum = currentNum[currentNum.length - 1];
        if (resultDisplayed === false) {
            display.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed && lastNum === "+" || lastNum === "-" || lastNum === "×" 
        || lastNum === "÷") {
            resultDisplayed = false;
            display.innerHTML += e.target.innerHTML;
        } else {
            resultDisplayed = false;
            display.innerHTML = '';
            display.innerHTML += e.target.innerHTML;
        }
    })
}

for(let btn of btnOperators) {
    btn.addEventListener('click', (e) => {
        let currentNum = display.innerHTML;
        let lastNum = currentNum[currentNum.length - 1];
        if (lastNum === "+" || lastNum === "-" || lastNum === "" 
        || lastNum === "÷") {
            let newNum = currentNum.substring(0, currentNum.length - 1) +
            e.target.innerHTML;
            display.innerHTML = newNum;
        } else if (currentNum.length === 0) {
            console.log('please enter a number')
        } else {
            display.innerHTML += e.target.innerHTML;
        }
    })
}

equalsBtn.addEventListener('click', () => {
    let inputCalculation = display.innerHTML;
    let numbers = inputCalculation.split(/\+|\-|\×|\÷/);
    let operators = inputCalculation.replace(/[0-9]|\./g, "").split("");
    
    // Addition
    let add = operators.indexOf("+");
    while(add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        operators.splice(add, 1);
        add = operators.indexOf("+");
    }
    // Subtraction
    let subtract = operators.indexOf("-");
    while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
        operators.splice(subtract, 1);
        subtract = operators.indexOf("÷");
    }
    // Multiplication
    let multiply = operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
    }
    // Division
    let divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
    }

    display.innerHTML = numbers[0];
    resultDisplayed = true;
})

clearBtn.addEventListener('click', () => {
    display.innerHTML = '';
})
