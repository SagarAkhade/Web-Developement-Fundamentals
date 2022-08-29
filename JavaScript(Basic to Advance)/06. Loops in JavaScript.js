// Loops in JavaScript 

// while loop :-
// dry concept code ->> don't repeat yourself
// Syntax
// while(check_condition){
//     code; 
// }
let i = 0;
while( i <= 3){
    console.log(i);
    i++;
}
// output : 0 1 2 3 ->> generated on next line
// Ex : print sum of first 10 natural numbers
let num = 10;
let total = 0;
let a = 1;
while(a <= num){
    total += a;
    a++;
}
console.log(`Sum of first ${num} natural numbers is ${total}`);
// output : Sum of first 10 natural numbers is 55
// Simple maths formula : (n*(n+1))/2 ->> Sum of first n natural numbers 

// do while loop :-
// do while must be executed once irrespective to condition
let j = 0;
do{
    console.log(j);
    j++;
}while(j <= 3);
// output : 0 1 2 3 ->> generated on next line

// for loop :-
for(let i = 0; i <= 3; i++){
    console.log(i);
}
// output : 0 1 2 3 ->> generated on next line
//Q. Printing Fibonacci series upto given number of terms
// Ex. fibonacci series 0 1 1 2 3 5 8......
function fib(n) {
    if(n == 0){
        return 0;
    }
    if(n == 1 || n == 2){
        return 1;
    } 
    return fib(n - 1) + fib(n - 2);
}
let numberOfTerms = 7;
for(let i = 0; i < numberOfTerms; i++){
    console.log(fib(i));
}
// output : 0 1 1 2 3 5 8 ->> on nextline 

// break keyword :-
// break keyword completes break the loop
for(let i = 1; i <= 10; i++) {
    if( i === 4) {
        break;
    }
    console.log(i);
}
// output : 1 2 3 ->> generated on next line

// continue keyword :-
// after using continue keyword it will bring back to loop and doesnot execute statements below it
for(let i = 1; i <= 5; i++) {
    if( i === 4) {
        continue;
    }
    console.log(i);
}
// output : 1 2 3 5 ->> generated on next line
