function variableControl() {
    let name = "John";
    let admin = name; 
}

variableControl();

function nameCall() {
    const Earth = "";
    const userName = ""; 
}

function newUppercase() {
    const birthday = '18.04.1982';
    const age = someCode(birthday);
}

//It would be suitable to apply uppercasing to the const BIRTHDAY variable as this equates to -
// numeral digits, and if the variable was named with digits - this would cause readability issues.

function testNumbers() {
    const myInt = 5;
    const myFloat = 5.6666; 
    console.log(typeof myInt); 
    console.log(typeof myFloat);
}
testNumbers();

function testDecimal () {
    const lotsOfDecimal = 1.766584958675746364;
    lotsOfDecimal;
    const twoDecimalPlaces = lotsOfDecimal.toFixed(1);
    twoDecimalPlaces;
    console.log(lotsOfDecimal);
    console.log(twoDecimalPlaces);
} 
testDecimal();

function testConvert () {
    let str = "64"; 
    str = Number(str) + 3; 
    

    typeof str;
    console.log(typeof str);
}
testConvert();

function examQuestions() {
    //First try enter basic arithmetic operations.
    //Second, manipulate arithmetic operations with variables involved.
    //Third, use some more complex expressions. 

    45 + 64; 
    9 * 8; 
    2 ** 4;
    9 / 3; 
    11 % 2; 

    console.log(45 + 64);  // Output: 109
    console.log(9 * 8);     // Output: 72
    console.log(2 ** 4);    // Output: 16
    console.log(9 / 3);     // Output: 3
    console.log(11 % 2);    // Output: 1

    const num1 = 64; 
    const num2 = 74; 
    return num1 + num2;

    let result = 54; 
    result + 64; 
    return result; 

    const numberOne = "64"; 
    const numberTwo = 13; 

    const outcome = Number(numberOne) - numberTwo;

}
examQuestions();

//

function operatorOrder () {
    //example of operator precedence unwanted 

    const num1 = 50; 
    const num2 = 50; 

    const result = num1 + num2 / 6 + 2; 
    console.log(result);

    return result;
}
operatorOrder();

function operatorPrecedence () {
    const num1 = 50;
    const num2 = 50;

    const result = (num1 + num2) / (6 + 2)
    console.log(result); 
}
operatorPrecedence();

function testIncrement () {
    let num = 49; 
    num++;

    console.log(num);
}
testIncrement();

function assignmentOrder () {
    let num = 2; 
    num += 4;

    console.log(num);


}
assignmentOrder();

//The following functions will consist of answers to some fundamental problems. 

//Problem 1: Variable Declaration and Assignment! 
//Description: Declare variable and assign "hello world" 

function declareVar() {
    let message = "Hello, World!";
    console.log(message)
    return message;
}
declareVar();


//Problem 2: Data Types and Type Conversion!
//Description: convert string "42" to a number and store it in a variable named 'num; 

function stringConvert() {
    const str = "42"; 
    const newStr = Number(str); 
    console.log(newStr);
}
stringConvert();

//Problem 3: Arithmetic Operations! 
//Description: Write expression to calculate the area of a rectangle with a width of '5' units, and -
//height of '8' units. 

function arithmeticOps() {
    const base = 5; 
    const height = 8; 

    const area = base * height; 
    console.log(area); 
}
arithmeticOps();

//Problem 4: Operator Precedence! 
//Description: Evaluate expression, '4 + 3 * 2' and store the result in a variable named 'result1' -
//Then evaluate the expression '(4 + 3) * 2' and store the result in a var named 'result2' 

function operatorEval() {
    const firstExp = 4; 
    const secondExp = 3; 

    const firstResult = firstExp + secondExp * 2; 
    console.log(firstResult);
}
operatorEval();

function secondEval() {
    const firstTerm = 4;
    const secondTerm = 3;

    const secondResult = (firstTerm + secondTerm) * 2;
    console.log(secondResult)
}
secondEval();




