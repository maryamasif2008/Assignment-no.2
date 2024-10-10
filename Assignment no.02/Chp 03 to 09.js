                                               //CHAPTER 03
 
                                            /* Question 01 */ 
var height = 170;
var newHeight = height + 10;

alert(newHeight+ height);

                                           /* Question 02 */
var num1 = 50;
var num2 = 30;

var sum = num1 + num2;

alert(num1 + num2);

                                           /* Question 03 */
var number = 20;
var total = number + 20;

alert(total);

                                           /* Question 04 */
var price = 120;
var tax = price * 0.10;
var totalPrice = price + tax;

alert(totalPrice);

                                           //CHAPTER 04

                                         /* Question 01 */
var myAddress = "Malir Kala Board Karachi";

alert("MY Address:" + " " + myAddress);

                                        /* Question 02 */
var userName = "Maryam Asif";
var userEmail = "maryam.asif@123gmail.com";
var userPassword = "2007mar";              

alert("User Name:" + " " + userName + "\n"+ "User Email:" + " " + userEmail + "\n" + "User Password:"  + " " + userPassword);

                                       /* Question 03 */
var useraddress = " B-225 B-area Malir";
var userAddress = " B-225 B-area Malir";
alert("User Address:" + " " + userAddress);

                                      /* Question 04 */
var rose = " Floribundas";
console.log("Initial Access:" + " " + rose);
console.log("Uppercse Access :" + " " + rose);
                                  
                                          // CHAPTER 05

                                     /* Question 01 */
var num1 = 25;
var num2 = 30;
var sum = num1 + num2;
var veryGoodPerformance = sum;

alert("Performance score is:" + veryGoodPerformance );

                                    /* Question 02 */
var num1 = 25;
var num2 = 5;
var result = num1 + num2;

alert("The sum of" + " " + num1 + " " + "and" + " " + num2 + " :" + result);

                                   /* Question 03 */
var remainder = 27 % 4 ;

alert("Remainder of" + " " + 27 + " " + "devided by" + " " + 4 + " :" + remainder);

                                      //CHAPTER 06
                                     
                                   /* Question 01 */
var num = 3;
var newNum = num++;

alert("Orignal Number:" + " " + num + "\n" + "Result:" + " " + result); 

                                   /* Question 02 */
var counter = 10;
counter++;

alert("Final value of counter:" + " " + counter);

                                  /* Question 03 */
var points = 10;
var postIncrement = points++;
// alert("Post-incremint:", postIncrement);
// alert("Points After post-increment:", points);

var preIncrement = ++points;
// alert("Pre-incremint:", preIncrement);
// alert("Points After pre-increment:", points);


alert("Final value of point:" + " " + points);

                                  /* Question 04 */
var number =  0;
number++;
number++;
number++;

alert("Final Value of number:" , number);

                                      //CHAPTER 07

                                   /* Question 01 */
var calculation = ((20%6) + 10)*2;

alert("Value of calculation:", calculation);

                                   /* Question 02 */
var expression = (6+2) * (5-3);

alert("Value of expresssion:", expression);

                                   /* Question 03 */
var userName = prompt("What is your name?");

alert("Hello, " + userName + "!");

                                   /* Question 04 */
var age = prompt("How old are you?");

if (age === 20) {
    alert("No age provided");
} else {
    alert("You are " + age + " years old.");
}                                           

                                  /* Question 05 */
var pets = prompt("How many pets do you have?");

if (pets === "cat") {
    alert("You didn't enter anything.");
} else {
    alert("You have " + pets + " pets.");
}                                  

                                  /* Question 06 */
var userInput = prompt("Enter a number between 1 and 10");
var number = 8;

if (number >= 1 && number <= 10) {
    var result = number * 2;
    alert("The result is: " + result);
} else {
    alert("Please enter a valid number between 1 and 10.");
}
                                   
                                  /* Question 07 */
var favNum = prompt("What is your favorite number?");

if (favNum === "") {
    favNum = 7; 
}

alert("Your favorite number is: " + favNum);   

                                    //CHAPTER 09

                                  /* Question 01 */
var answer = prompt("What is the capital of France?");

if (answer === "Paris") {
    alert("Correct!");
} else {
    alert("Try again!");
}
                               
                                  /* Question 02 */
var answer = prompt("What is the capital of France?");

if (answer === "Paris") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is Paris.");
}                                  

                                 /* Question 03 */
var answer = prompt("What is the capital of the United Kingdom?");

if (answer === "London" || answer === "The United Kingdom") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is London.");
}                                 

                                 /* Question 04 */
var score = 0;
let answer = prompt("What is the capital of the United Kingdom?");

if (answer === "London" || answer === "The United Kingdom") {
    score++;
    alert("Correct! Your score is now: " + score);
} else {
    alert("Incorrect, the correct answer is London. Your score is: " + score);
}
                           
                                 /* Question 05 */
var capitalAnswer = prompt("What is the capital of Germany?");
var mathAnswer = prompt("What is 10 + 10?");
var score = 0;

if (capitalAnswer === "Berlin") {
    score++;
}

if (mathAnswer === "20") {
    score++;
}

if (score === 2) {
    alert("You got both right!");
} else if (score === 1) {
    alert("You got one correct!");
} else {
    alert("You got none correct.");
}                                 







