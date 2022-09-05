const numbersDisplayed = document.getElementById('numbers-displayed');
const button0 = document.getElementById('button-0');
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const button7 = document.getElementById('button-7');
const button8 = document.getElementById('button-8');
const button9 = document.getElementById('button-9');
const buttonPeriod = document.getElementById('button-period');
const buttonMultiply = document.getElementById('button-multiply');
const buttonDivide = document.getElementById('button-divide');
const buttonSubtract = document.getElementById('button-subtract');
const buttonAdd = document.getElementById('button-add');
const buttonEquals = document.getElementById('button-equals');
const buttonClear = document.getElementById('button-clear');
const buttonBackspace = document.getElementById('button-backspace');
let displayed = '';
let arrayDisplayed = [];
let num = 0;
let numAdd = 0;
let numSubtract = 0;
let numMultiply = 0;
let numDivide = 0;
let number1 = '';
let op = '';
let answer = '';
const numbers = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9, buttonPeriod];

const add = (a, b) => {
   return +a + +b;
};



const subtract = (a, b) => {
    return +a - +b;
};



const multiply = (a, b) => {
    return +a * +b;
};



const divide = (a, b) => {
    return +a / +b;
};


const operate = (a, b, operator) => {
    console.log('a is ' + a);
    console.log('b is ' + b);
    console.log('operator is ' + operator);
    if (operator === '+') {
        console.log('result is: ' + add(a, b));
        numbersDisplayed.textContent = add(a, b);
        if (numbersDisplayed.textContent.length >= 9) {
            answer = numbersDisplayed.textContent.slice(0, 9);
            numbersDisplayed.textContent = answer;
        } else {
            answer = add(a, b);
        }
        for (i = 0; i < numbers.length; i++) {
            numbers[i].disabled = true;
        }
        buttonBackspace.disabled = true;
    } 
    if (operator === '-') {
        console.log(subtract(a, b));
        numbersDisplayed.textContent = subtract(a, b);
        if (numbersDisplayed.textContent.length >= 9) {
            answer = numbersDisplayed.textContent.slice(0, 9);
            numbersDisplayed.textContent = answer;
        } else {
            answer = subtract(a, b);
        }
        for (i = 0; i < numbers.length; i++) {
            numbers[i].disabled = true;
        }
        buttonBackspace.disabled = true;
    }
    if (operator === '*') {
        console.log(multiply(a, b));
        numbersDisplayed.textContent = multiply(a, b);
        if (numbersDisplayed.textContent.length >= 9) {
            answer = numbersDisplayed.textContent.slice(0, 9);
            numbersDisplayed.textContent = answer;
        } else {
            answer = multiply(a, b);
        }
        for (i = 0; i < numbers.length; i++) {
            numbers[i].disabled = true;
        }
        buttonBackspace.disabled = true;
    }
    if (operator === '/' && b != 0) {
        console.log(divide(a, b));
        numbersDisplayed.textContent = divide(a, b);
        if (numbersDisplayed.textContent.length >= 9) {
            answer = numbersDisplayed.textContent.slice(0, 9);
            numbersDisplayed.textContent = answer;
        } else {
            answer = divide(a, b);
        }
        for (i = 0; i < numbers.length; i++) {
            numbers[i].disabled = true;
        }
        buttonBackspace.disabled = true;
    } else if (operator === '/' && b == 0){
        numbersDisplayed.textContent = 'ERROR';
        disableButtons();
    }
    
};

numbers.forEach(number => {
    number.addEventListener('click', () => {
        check3();
        displayed = displayed + number.textContent;
        numbersDisplayed.textContent = displayed;
        arrayDisplayed = displayed.split("");
        console.log(arrayDisplayed);
        check2();
        buttonBackspace.disabled = false;
        console.log(displayed);
    })
})

buttonAdd.addEventListener('click', () => {
    num++
    numAdd++;
    console.log('num is = ' + num);
    console.log('add was clicked ' + numAdd + ' times');
    buttonAdd.classList.add('funcHighlighted');
    check();
    enableButtons();
    op = '+';
    number1 = displayed;
    displayed = '';
    console.log('number 1 is ' + number1);
})

buttonSubtract.addEventListener('click', () => {
    num++;
    numSubtract++;
    console.log('num is = ' + num);
    console.log('subtract was clicked ' + numSubtract + ' times');
    buttonSubtract.classList.add('funcHighlighted');
    check();
    enableButtons();
    op = '-';
    number1 = displayed;
    displayed = '';
    console.log('number 1 is ' + number1);
})

buttonDivide.addEventListener('click', () => {
    num++;
    numDivide++;
    console.log('num is = ' + num);
    console.log('divide was clicked ' + numDivide + ' times');
    buttonDivide.classList.add('funcHighlighted');
    check();
    enableButtons();
    op = '/';
    number1 = displayed;
    displayed = '';
    console.log('number 1 is ' + number1);
})

buttonMultiply.addEventListener('click', () => {
    num++;
    numMultiply++;
    console.log('num is = ' + num);
    console.log('multiply was clicked ' + numMultiply + ' times');
    buttonMultiply.classList.add('funcHighlighted');
    check();
    enableButtons();
    op = '*';
    number1 = displayed;
    displayed = '';
    console.log('number 1 is ' + number1);
})

buttonEquals.addEventListener('click', () => {
    check2();
    operate(number1, displayed, op);
    
})

buttonBackspace.addEventListener('click', () => {
    arrayDisplayed.splice(arrayDisplayed.length - 1, 1);
    displayed = arrayDisplayed.join('');
    console.log(arrayDisplayed);
    check2();
    numbersDisplayed.textContent = arrayDisplayed.join('');
})

buttonClear.addEventListener('click', () => {
    console.log('clear was pressed');
    op = '';
    number1 = '';
    displayed = '';
    numbersDisplayed.textContent = '';
    num = 0;
    numAdd = 0;
    enableButtons();
    check3();
    buttonPeriod.disabled = false;
})

const check = () => {
    if (num == 2) {
        operate(number1, displayed, op);
        num--;
        displayed = answer;
        console.log('answer is = ' + displayed);
    }
}

const check2 = () => {
    if (arrayDisplayed.includes('.') == true) {
        buttonPeriod.disabled = true;
    } else {
        buttonPeriod.disabled = false;
    }
}

const check3 = () => {
    if (document.querySelector('.funcHighlighted')) {
        console.log('highlight spotted');
        buttonAdd.classList.remove('funcHighlighted');
        buttonSubtract.classList.remove('funcHighlighted');
        buttonMultiply.classList.remove('funcHighlighted');
        buttonDivide.classList.remove('funcHighlighted');
    }
}

const disableButtons = () => {
    button0.disabled = true;
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button4.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
    button6.disabled = true;
    button7.disabled = true;
    button8.disabled = true;
    button9.disabled = true;
    buttonPeriod.disabled = true;
    buttonAdd.disabled = true;
    buttonMultiply.disabled = true;
    buttonSubtract.disabled = true;
    buttonEquals.disabled = true;
    buttonDivide.disabled = true;
}

const enableButtons = () => {
    button0.disabled = false;
    button1.disabled = false;
    button2.disabled = false;
    button3.disabled = false;
    button4.disabled = false;
    button4.disabled = false;
    button4.disabled = false;
    button5.disabled = false;
    button6.disabled = false;
    button7.disabled = false;
    button8.disabled = false;
    button9.disabled = false;
    buttonPeriod.disabled = false;
    buttonAdd.disabled = false;
    buttonMultiply.disabled = false;
    buttonSubtract.disabled = false;
    buttonEquals.disabled = false;
    buttonDivide.disabled = false;
}

const addKeyNum = (e) => {
    const key = document.querySelector(`button[data-key = "${e.keyCode}"]`);
    console.log(key);
    if (key == buttonBackspace) {
        arrayDisplayed.splice(arrayDisplayed.length - 1, 1);
        displayed = arrayDisplayed.join('');
        console.log(arrayDisplayed);
        check2();
        numbersDisplayed.textContent = arrayDisplayed.join('');

    } else if (key == buttonEquals) {
        operate(number1, displayed, op);
        check2();

    } else if (key == buttonDivide) {
        num++;
        numDivide++;
        console.log('num is = ' + num);
        console.log('divide was clicked ' + numDivide + ' times');
        buttonDivide.classList.add('funcHighlighted');
        check();
        buttonPeriod.disabled = false;
        op = '/';
        number1 = displayed;
        displayed = '';
        console.log('number 1 is ' + number1);

    }  else if (key == buttonSubtract) {
        num++;
        numSubtract++;
        console.log('num is = ' + num);
        console.log('subtract was clicked ' + numSubtract + ' times');
        buttonSubtract.classList.add('funcHighlighted');
        check();
        buttonPeriod.disabled = false;
        op = '-';
        number1 = displayed;
        displayed = '';
        console.log('number 1 is ' + number1);
    
    } else if (key == buttonPeriod) {
        if (arrayDisplayed.includes('.') == true) {
            
        } else {
            check3();
            displayed = displayed + buttonPeriod.textContent;
            numbersDisplayed.textContent = displayed;
            arrayDisplayed = displayed.split("");
            console.log(arrayDisplayed);
            check2();
            buttonBackspace.disabled = false;
            console.log(displayed);
        }
        
    }
    else if (e.shiftKey) {
        if (key == button8) {
            num++;
            numMultiply++;
            console.log('num is = ' + num);
            console.log('multiply was clicked ' + numMultiply + ' times');
            buttonMultiply.classList.add('funcHighlighted');
            check();
            buttonPeriod.disabled = false;
            op = '*';
            number1 = displayed;
            displayed = '';
            console.log('number 1 is ' + number1);

        } else if (key == buttonAdd) {
            num++;
            numAdd++;
            console.log('num is = ' + num);
            console.log('add was clicked ' + numAdd + ' times');
            buttonAdd.classList.add('funcHighlighted');
            check();
            buttonPeriod.disabled = false;
            op = '+';
            number1 = displayed;
            displayed = '';
            console.log('number 1 is: ' + number1);
    
        }
    } else {
        check3();
        displayed = displayed + key.textContent;
        numbersDisplayed.textContent = displayed;
        arrayDisplayed = displayed.split("");
        console.log(arrayDisplayed);
        check2();
        buttonBackspace.disabled = false;
        console.log(displayed);

    }
}

window.addEventListener('keydown', addKeyNum);

