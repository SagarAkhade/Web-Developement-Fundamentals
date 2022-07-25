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

// Static method and property ->>
// using static method we can access directly from Person2 class 
// using static property we can access directly from Person2 class 
class Person2{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // static method
    static classInfo(){
        return `the Person class`;
    }
    // static property
    static desc = "static property"
}
const person4 = new Person2("sagar","akhade", 8);
console.log(Person2.classInfo());
// Output : the Person class
console.log(Person2.desc);
// Output : static property
