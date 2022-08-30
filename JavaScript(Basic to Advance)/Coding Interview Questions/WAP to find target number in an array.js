// Q. WAP to find target number in an array?
const arr = [1, 2, 5, 8, 4, 9]
console.log(arr.includes(12));
//Output : false

//Other Method Linear search
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 9) {
        console.log("true");
        break;
    }
}
//Output : true
