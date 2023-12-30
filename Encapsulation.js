// Encapsulation using a constructor function and closure

function Student(name, age) {
    // Private variables (encapsulated)
    let studentName = name;
    let studentAge = age;

    // Public methods to access and modify private variables
    this.getName = function() {
        return studentName;
    };

    this.getAge = function() {
        return studentAge;
    };

    this.setAge = function(newAge) {
        if (newAge >= 0) {
            studentAge = newAge;
        } else {
            console.log("Age cannot be negative.");
        }
    };
}

// Creating an instance of the Student object
const student1 = new Student("John Doe", 20);

// Accessing private variables through public methods
console.log(student1.getName()); // Output: John Doe
console.log(student1.getAge());  // Output: 20

// Trying to modify age directly
// This won't work because the age variable is private
student1.studentAge = 25;  // This won't modify the actual age
console.log(student1.getAge());  // Output: 20

// Modifying age using the public method
student1.setAge(25);
console.log(student1.getAge());  // Output: 25
