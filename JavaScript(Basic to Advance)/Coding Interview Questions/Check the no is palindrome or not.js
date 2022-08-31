// Q. Check the no is palindrome or not

let num = 1221;

function reverse(num) {
    let reverseNum = 0;
    while(num > 0) {
        reverseNum = reverseNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reverseNum;
}
let revNum = reverse(num);

function isPalindrome(num, revNum){
    if(num === revNum) {
        return true;
    }
    return false;
}

console.log(isPalindrome(num, revNum));
//Output : true
