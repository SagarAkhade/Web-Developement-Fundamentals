// Q. reverse string
let string = "ab cd"
 
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(string));

//Output : dc ba
