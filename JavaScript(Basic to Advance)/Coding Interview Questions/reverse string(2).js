// Q. reverse string
// let str = "Geeks for Geeks"
// Output: "skeeG rof skeeG"

let string = "Geeks for Geeks"
 
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(string));

//Output : "skeeG rof skeeG"
