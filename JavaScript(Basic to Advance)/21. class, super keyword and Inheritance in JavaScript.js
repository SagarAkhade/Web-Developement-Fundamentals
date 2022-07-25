// class, super keyword and Inheritance in JavaScript 

// class keyword ->>
// class are fake in JavaScript 
// class constructor cannot be invoked without new keyword
class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;  //Adding key-value pairs in this Object 
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    // These below methods will works as prototype for constructor
    about(){  //addding methods to constructor
        return `${this.firstName} is ${this.age} year old.`;
    }    
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la";
    }
    func(a){
        console.log(a);
    }
}
const user = new CreateUser("Sagar", "Akhade", "sagar@gmail.com", 18, "my Address");
console.log(user.firstName);  
// Output : Sagar
console.log(user.about());
// Output : Sagar is 18 year old.
user.func(("Sagar"));
// Output : Sagar

// Practice of class :-
// create an Animal class which has two properties name and age and has one method eat()
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}
const animal1 = new Animal("tom", 2);
console.log(animal1);
// Output : Animal {name: 'tom', age: 2}
console.log(animal1.eat());
// Output : tom is eating
console.log(animal1.isSuperCute());
// Output : false

// Inheritance ->>
// Inheritance is creating sub-class from main class
// Sub-class will have access to all properties and methods of main calss
// Its Syntax is -> class subClassName extends mainClassName{}
// here Animal -> main(parent / super) class and Dog -> sub(child) calss
class Dog extends Animal{
   
}
const tommy = new Dog("tommy", 3);
console.log(tommy);
// Output : Dog {name: 'tommy', age: 3}
console.log(tommy.eat());
// Output : tommy is eating

// super keyword ->>
// When we want extra parameter in constructor of sub-class which are not 
// in main(super) class then we create constructor for that sub-class
// and properties which are same in main and sub-class, we want to access 
// them then we use super keyword and pass same parameters
// for accessing properties from main(parent/super) class
class Horse extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed} kmph`;
    }
    // this eat() method will gets preffernce if and only if eat() method not found here 
    // then it will go in main class
    eat(){   
        return `Modified eat : ${this.name} is eating`
    }
} 
const badal = new Horse("Badal", 5, 45);
console.log(badal);
// Output : Horse {name: 'Badal', age: 5, speed: 45}
console.log(badal.run());
// Output : Badal is running at 45 kmph
console.log(badal.eat());
// Output : Modified eat : Badal is eating
