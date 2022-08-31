// Q. Find 3rd largest element from an array

let arr = [1, 5, 10, 55, 9, 6, 3, 2];

const thirdLargestNumber = (arr) => {
    let firstLarget = secondLarget = thirdLargest = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
        if(firstLarget < arr[i]) {
            firstLarget = arr[i];
        }
    }

    for(let i = 0; i < arr.length; i++) {
        if(secondLarget < arr[i] && arr[i] !== firstLarget) {
            secondLarget = arr[i];
        }
    }

    for(let i = 0; i < arr.length; i++) {
        if(thirdLargest < arr[i] && arr[i] !== firstLarget && arr[i] !== secondLarget) {
            thirdLargest = arr[i];
        }
    }

    return thirdLargest;
}

console.log(thirdLargestNumber(arr));

//Also we can sort an Array and find the third largets
