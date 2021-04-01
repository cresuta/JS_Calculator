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
        if (lastNum === "+" || lastNum === "-" || lastNum === "×" 
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
    console.log(numbers)
    console.log(operators)
})

clearBtn.addEventListener('click', () => {
    display.innerHTML = '';
})
