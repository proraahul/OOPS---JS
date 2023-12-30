// Parent class constructor
function Animal(name) {
    this.name = name;
}

// Adding a method to the prototype of the Animal class
Animal.prototype.sayName = function () {
    console.log("My name is " + this.name);
};

// Child class constructor
function Dog(name, breed) {
    // Call the constructor of the parent class
    Animal.call(this, name);
    this.breed = breed;
}

// Set up the prototype chain: Dog inherits from Animal
Dog.prototype = Object.create(Animal.prototype);

// Adding a method to the prototype of the Dog class
Dog.prototype.bark = function () {
    console.log("Woof!");
};

// Create an instance of the Dog class
const myDog = new Dog("Buddy", "Golden Retriever");

// Now, the myDog object has access to methods from both Animal and Dog classes
myDog.sayName(); // Output: My name is Buddy
myDog.bark();    // Output: Woof!
