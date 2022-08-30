// Q. Write a program to print the sum of factorials of first n terms (Easy)

function findFactorialSum(n){
    let fact = 1, sum = 0;
    for(let i = 1; i <= n; i++){
        fact = fact * i;
        sum += fact;
    }
    return sum;
}
console.log(findFactorialSum(5));
//Output : 153
