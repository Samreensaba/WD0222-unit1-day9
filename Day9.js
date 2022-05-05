/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

console.log("\n***Excercise 1***\n")
let area = function(l1, l2){
    console.log("the area of traingle is:", (l1*l2)/2)
}
area(2, 4)

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("\n***Excercise 2***\n")
let crazySum = function(x, y){
    if (x != y){
        console.log("The sum og the values is:", x+y);
    }
    else{
        console.log("the sum of the values is:", (x+y)*3)
    }
}
crazySum(7, 7)

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("\n***Excercise 3***\n")
let crazyDiff = function(a){
    if(a<=19){
        console.log("the difference is:", 19 - a);
    }
    else{
        console.log("the difference is:", (a - 19)*3);
    }
}
crazyDiff(21)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log("\n***Excercise 5***\n")
let strivify = function(string){
    if (string.slice(0,5) === "strive"){
        console.log(string)
    }
    else{
        console.log("strive"+string)
    }
}
strivify("strivesamreen")

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

console.log("\n***Excercise 6***\n")
let check3and7 = function(x){
    if (x % 3 === 0 && x % 7 === 0){
        console.log("The number is multiple of 3 and 7")
        }
    else if (x % 3 === 0){
    console.log("The number is multiple of 3")
    }
    else if(x % 7 === 0){
        console.log("The number is multiple of 7")
    }
    else{
        console.log("The number is neither a multiple of 3 nor of 7")
    }
}
check3and7(5)

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log("\n***Excercise 7***\n")
let reverseString = function(string){
    console.log(string.split("").reverse().join(""))
}
reverseString("strive")

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
