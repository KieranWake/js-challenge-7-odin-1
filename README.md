<h1>Manipulating Variables!</h1>

<strong>Task 1</strong>

<ol> 
    <li>Declare two variables: admin and name.</li>
    <li>Assign the value "John" to name.</li>
    <li>Copy the value from name to admin.</li>
    <li>Show the value of admin using alert (must output “John”).</li>
</ol>

<strong>Task 2</strong>

<ol> 
    <li>Create a variable with the name of our planet. How would you name such a variable?</li>
    <li>Create a variable to store the name of a current visitor to a website. How would you name that variable?</li>
</ol>
    
<strong>Task 3</strong>

Examine the following code:

const birthday = '18.04.1982';

const age = someCode(birthday);
Here we have a constant birthday for the date, and also the age constant.

The age is calculated from birthday using someCode(), which means a function call that we didn’t explain yet (we will soon!), but the details don’t matter here, the point is that age is calculated somehow based on the birthday.

Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?