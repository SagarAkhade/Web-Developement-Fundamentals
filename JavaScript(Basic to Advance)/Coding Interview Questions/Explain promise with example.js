const arr = [1, 5, 6, 7]
const myPromise = new Promise((resolve, reject) => {
    if(arr.includes(1)){
        resolve("Suceess");
    }
    else{
        reject("error");
    }
})

myPromise.then((data) => console.log(data))
         .catch((error) => console.log(error));
