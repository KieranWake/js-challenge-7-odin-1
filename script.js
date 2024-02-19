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
    str += 3; 

    typeof str;
    console.log(typeof str);
}
testConvert();

