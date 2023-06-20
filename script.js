let firstValue = '';
let secondValue = '';
let operator;

const displayExpression = document.getElementById('exp');
const displayMemo = document.getElementById('memo');

const btnEqual = document.getElementById('eq');
const btn = document.querySelectorAll('.key');
const operatorsBtn = document.querySelectorAll(".operator");

btn.forEach(b => {
    b.addEventListener('click', () => {
        if (operator) {
            if (b.dataset.value === '.' && secondValue.includes('.')) return
            secondValue += b.dataset.value
            displayExpression.textContent = secondValue
            displayMemo.textContent = firstValue + ' ' + operator
        } else {
            if (b.dataset.value === '.' && firstValue.includes('.')) return
            firstValue += b.dataset.value
            displayExpression.textContent = firstValue
        }
    })
})

operatorsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.operator == 'c') {
            displayExpression.textContent = '0';
            displayMemo.textContent = '';
            reset()
            return
        }
        if (firstValue && firstValue !== '.' && secondValue == '') {
            if (btn.dataset.operator == 'x') {
                operator = '×';
            } else if (btn.dataset.operator == '-') {
                operator = '-';
            } else if (btn.dataset.operator == '+') {
                operator = '+';
            } else if (btn.dataset.operator == '/') {
                operator = '÷';
            }
            displayExpression.textContent = operator;
        }
        displayMemo.textContent = operator ? firstValue + ' ' + operator: firstValue;
    })
})

btnEqual.addEventListener('click', () => {
    if (firstValue && secondValue && secondValue !== '.') {
        displayExpression.textContent = figure(firstValue, secondValue, operator);
        displayMemo.textContent = firstValue + ' ' + operator + ' ' + secondValue;
        reset()
    }
})

function figure(firstValue, secondValue, operator){
    let result;
    operator === '+' ? result = Number(firstValue) + Number(secondValue) : null
    operator === '-' ? result = Number(firstValue) - Number(secondValue) : null
    operator === '×' ? result = Number(firstValue) * Number(secondValue) : null
    operator === '÷' ? result = Number(firstValue) / Number(secondValue) : null
    return result
}

function reset(){
    firstValue = '';
    secondValue = '';
    operator = null;
}