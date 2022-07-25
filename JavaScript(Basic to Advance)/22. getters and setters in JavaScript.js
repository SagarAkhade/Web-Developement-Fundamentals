// getters and setters in JavaScript 

// getters and setters ->>
// getters :-
// using getters we can access methods inside class as property 
// Syntax : just add get before method name
// setters :-
// setters method just change the initital values to new given values
// Syntax : just add set before method name
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // using get we convert method into property
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    // set method just change the initial values to new values
    set setFullName(fullName){
        // .split(" ") method will split the string into list when it finds spaces 
        // ==> gives like this array ["",""]
        const[firstName, lastName] = fullName.split(" ");  // here we done destructuring
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("sagar","akhade", 5);
console.log(person1);
// Output : Person {firstName: 'sagar', lastName: 'akhade', age: 5}
console.log(person1.fullName);
// Output : sagar akhade
person1.setFullName = ("mohit sharma");
console.log(person1.fullName);
// Output : mohit sharma
