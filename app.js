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

const buttons = [addBtn,subtractBtn,multiplyBtn,divideBtn,num0,
num1,num2,num3,num4,num5,num6,num7,num8,num9,equalsBtn,decimalBtn,
clearBtn];

for(let btn of buttons) {
    btn.addEventListener('click', () => {
        display.innerHTML = btn.innerHTML;
    })
}