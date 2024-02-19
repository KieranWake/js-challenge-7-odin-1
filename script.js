function variableControl() {
    let name = "John";
    let admin = name; 

    alert(admin); 
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
}
examQuestions();



