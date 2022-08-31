//Q. Create Form validation with input fields as (firstName, lastName, city,
// submit button) on submit if something is missing it should give us alert
// message 

let form = document.querySelector('form');
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let cityName = document.getElementById("cityName");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(firstName.value === "" || lastName.value === "" || cityName.value === ""){
        alert("Invalid Input");
    }
    console.log(firstName.value, lastName.value, cityName.value );
    firstName.value = "";
    lastName.value = "";
    cityName.value = ""
})
