// create functions for individual operations
function add(a,b){  //addition
    return a+b;
}
function subtract(a,b){ //subtraction
    return a-b;
}
function multiply(a,b){ //multiplication
    return a*b;
}
function division(a,b){ //division
    return a/b; 
}
function operate(){
    a =Number(firstNumber);
    b= Number(secondNumber);
    switch(currentOperator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return division(a,b);
    }
}
const symbols = {


    'add': '+',
    'subtract': '-',
    'multiply' : '*',
    'divide' : '/',
    'decimal': '.',
    'equals':'=',
};
let firstNumber = '',
    secondNumber = '',
    currentOperator = '';
    number = '';
    decimalEnabled = true;
const display1 = document.querySelector('#text-1');
const display2 = document.querySelector('#text-2');
const equalsTo = document.getElementById('equals');


function displayNum(num){

    number += num;
    display2.textContent = number;
}

function displayOperation(){
    display1.textContent = `${firstNumber} ${currentOperator} ${secondNumber} `;

}

const numBtn = document.querySelectorAll('.numbers');
numBtn.forEach(btn => {
    btn.addEventListener('click',(e) => displayNum(e.target.textContent));
});

const operationBtn = document.querySelectorAll('.operation');
operationBtn.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        decimalEnabled = true;
        setNumber();
        if((e.currentTarget.id === 'equals' && firstNumber.length !== 0 && secondNumber.length !== 0) || (firstNumber.length !== 0 && secondNumber.length !== 0)) {
            let result = operate();
            display2.textContent = result;
            firstNumber = result;
            secondNumber = '';
            displayOperation();
        
        } 
      setCurrentOperation(e);
    });
});

function setNumber(){
    
    if(firstNumber === ''){
        number = number || '0';
        firstNumber = number;
        displayOperation();
    }
    else{
        secondNumber = number; 
        displayOperation();
        
    }
    number ='';
}
function setCurrentOperation(e){
    if(e.target.textContent !== '='){
        currentOperator = e.currentTarget.textContent;
        displayOperation();
    }
    
}
function clearScreen(){
    display1.textContent = '';
    display2.textContent = '0';
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
    number = '';
    decimalEnabled = true;

}
function deleteItem(){
    
    const item = display2.textContent.charAt(display2.textContent.length -1);
    if (item === '.') decimalEnabled = true;
    display2.textContent = display2.textContent.slice(0, display2.textContent.length-1);
    number = number.slice(0,number.length-1);
}
function addDecimal(e){
    if (decimalEnabled === true){
        displayNum(e.target.textContent);
        decimalEnabled = false;
    }
}
