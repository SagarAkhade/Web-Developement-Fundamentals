// Fetch API, async, await keyword in JavaScript

// Fetch API ->>>
// - API : Application Programing Interface
// - fetch(url) returns the promise and we can use .then and .catch methods on it directly
// - fetch method is easy way to fetch API
// - Here .json() method is used to convert JSON file format to JS Object(similar as JSON.parse(responce))
// - responce.ok : is used to check wether fetching is successful or not
const URL = "https://jsonplaceholder.typicode.com/posts";   // fake api
fetch(URL)
    .then((responce)=>{
        if(responce.ok){
            return responce.json();
        }
        else{
            throw new Error("Something went Wrong")
        }
    })
    .then((data)=>{
        console.log(data)
        // Output : all JS Object is printed
    })
    .catch((error)=>{
        console.log(error)
    })

// We can also send data to server ->
// - We just need to add one paramether to fetch method and all other things remains same
// - This other parameter is data that to be uploaded and the code is available from site 
// - fetch(URL, objectToBeUpdate)
// - POST method used to update on server(Some methods are : PATCH, PUT)
// - JSON.stringify(data) : converts the JS object to JSON format
// - https://jsonplaceholder.typicode.com/guide/ : we get POST code from here
fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((responce)=>{
        if(responce.ok){
            return responce.json();
        }
        else{
            throw new Error("Something went Wrong")
        }
    })
    .then((data)=>{
        console.log(data); 
        // Output : updated the given data on server and printed that data on console
    })
    .catch((error)=>{
        console.log(error);
    })


// Fetching API using async await keywords ->>>
// - It is also one way of fetching API in simple way
// - Best method for fetching API is using async await keyword
// - async keyword : whenever we write async for any function, it will always returns promise
// - await keyword : it will make function to wait until the promise is resolve
// - fetching API's is asynchronous task
const URL1 = "https://jsonplaceholder.typicode.com/posts";   // fake api
async function getPosts(){
    const response = await fetch(URL1);
    if(!response.ok){
        throw new Error("Something went Wrong!!!");
    }
    const data = await response.json();   // .json() method will return promise
    return data;  
}
getPosts()
    .then((data)=>{
        console.log(data);  // Output : all JS Object is printed 
    })
    .catch((error)=>{
        console.log(error);
    })

/*
using arrow function just do like this
const getPosts = async()=>{
    do same things as above
}
*/
