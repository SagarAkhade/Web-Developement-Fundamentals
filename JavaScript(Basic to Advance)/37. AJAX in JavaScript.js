// AJAX in JavaScript 

// AJAX ->>>
// - Asynchronous JavaScript and XML
// - AJAX is basically used to communicate with server
// - XML is type of data format but not in use now days
// - Client and Server communicates through HTTP(Hyper Text Transfer Protocol)
// - AJAX is set of "web development techniques" using web technologies on
// the "client side" to create asynchronous web application
// - With AJAX, web applications can send and retrive data from a server asynchronously
// (in background) without interfering with the display and behaviour of existing page
// - We dont't use data in XML format anymore. We use JSON now. 
// JSON(JavaScript Object Notation)
// - We have 3 most common ways to create and send request to server :-
// 1) XMLHTTPRequest(old way of doing)
// 2) fetch API (new way of doing)
// 3) axios (this is third party library)

// 1) XMLHTTPRequest(old way of doing) ->
// - use .open("typeOfMethodToBeUsed", urlToBeFetch), methods - "GET"/"POST"/"PATCH" many more there
const URL = "https://jsonplaceholder.typicode.com/posts";   // fake api
const xhr = new XMLHttpRequest();  // We get new XML format
// xhr.open("GET", URL);
// - .onreadystatechange - used to check the prograsion of .JSON file
// - .readyState - actual prograsion point, at 4 is final value ie. ready to use
// - This will give us file in JSON format then we will convert it into JS Object
// - JSON.parse(responce) method will convert that JSON into JavaScript Object format
// - if responce is 200 then fetching is done successfuly(200 line codes are of success)
// - and if responce if 404 then fetching is fail(400 line codes are of failure at client side)
// - 100 line codes is checking for errors
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         const responce = xhr.response;
//         const data = JSON.parse(responce);  // will convet into in JavaScript Object format
//         console.log(data);
//     }
// }
//  - Output : we get complete JS object in console 
// xhr.send();

// .onload method ->
// - .onload method is easiest way to fetch api 
// - .onload method takes an callback function
// - code is very simple
// - This will only work when readyState is 4
// - .readyState 4 means we are ready to fetch api(ie. on success)
// - Here we are handling error also
// - .parse(.JSON_data) method - will convert .JSON data to JS Object 
// - .status - is used to check that .JSON file is completely loaded (200-299 code for success)
xhr.open("GET", URL);
xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
        const response = xhr.response;  // - here we have .JSON data
        const data = JSON.parse(response); // - we converting .JSON data to JS Object using parse method
        console.log(data);
        // Output : all JS objects are printed
        const id = data[3].id;
        console.log(id);
        // Output : 4 - only id = 4 is printed
    }
    else {
        console.log("Something went wrong")
    }
}

// .onerror method ->
// - For handling network errors we use .onerror method 
xhr.onerror = () => {
    console.log("Network Error");
}
xhr.send();  // .sent() method is used at last important


// Accessing .JSON API using promise method ->>
// API - Application Programing Interface
const URL2 = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise((resovle, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resovle(xhr.response);
            }
            else {
                reject(new Error("Something went Wrong"));
            }
        }
        xhr.onerror = function () {
            reject(new Error("Something went Wrong"));
        }

        xhr.send();
    })
}
sendRequest("GET", URL2)
    .then((response) => {
        const data = JSON.parse(response);
        console.log(data);
        // Output : JS Objects are printed
        return data;
    })
    .then((data) => {
        console.log(data[3].id)
        // Ouptut : 4 - id = 4 is printed
    })
    .catch(error => console.log(error));
