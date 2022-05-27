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
//function to display operations
function displayOperation(val){
    const screen = document.querySelector('#text-1');
    const content = document.createTextNode(val);
    screen.appendChild(content);
}
//function to display result of calculation
function resultDisplay(str){
    const result = document.querySelector('#text-2');
    result.textContent = str;
}
let numArr = [],
    operatorArr = [],
    number = '',
    numCount = 0,
    operationCount =0;

const btns = document.querySelectorAll('button')
btns.forEach(btn => {
    btn.addEventListener('click',(e) => {
        if(e.currentTarget.value){
            getNumber(e);
            displayOperation(e.currentTarget.value);
        }
        else{
            console.log(numArr,operatorArr,numCount,operationCount);
            if (number.length > 0) storeNumber();
            if(e.currentTarget.id !== 'equals'){
                storeOperation(e);
                displayOperation(symbols[e.currentTarget.id])
            }
            
            if(e.currentTarget.id === 'equals'){

                let result = operate(numArr[numCount-2],numArr[numCount-1],operatorArr[operationCount-1]);
                resultDisplay(result);
                numArr.push(result);
                numCount++;
            } 

            else if(numArr.length % 2 ===0){
                let result = operate(numArr[numCount-2],numArr[numCount-1],operatorArr[operationCount-2]);
                resultDisplay(result);
                numArr.push(result);
                numCount++;
            }

        }
        
    });
});
function getNumber(e){
    number+=e.currentTarget.value;
}
function storeNumber(){
    console.log(number);
    numArr.push(parseInt(number));
    console.log(numArr);
    numCount++;
    number ='' ;
}
function storeOperation(e){
    operatorArr.push(e.currentTarget.id);
    operationCount++;
}
function operate(a,b,operator){
    switch(operator){
        case 'add':
            return add(a,b);
        case 'subtract':
            return subtract(a,b);
        case 'multiply':
            return multiply(a,b);
        case 'divide':
            return division(a,b);
    }
}
//console.log(number);
function clearScreen(){
    const screen = document.querySelector('#text-1');
    screen.textContent = '';
}

const symbols = {
    'add': '+',
    'subtract': '-',
    'multiply' : '*',
    'divide' : '/',
    'decimal': '.',
    'equals':'=',
};

