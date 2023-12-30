// Base class
class Shape {
    constructor() {
        this.type = "Shape";
    }

    // Method to calculate area (to be overridden by subclasses)
    calculateArea() {
        return "Area calculation not implemented for the base shape.";
    }
}

// Subclass Circle
class Circle extends Shape {
    constructor(radius) {
        super();
        this.type = "Circle";
        this.radius = radius;
    }

    // Override calculateArea method for circles
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Subclass Rectangle
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.type = "Rectangle";
        this.width = width;
        this.height = height;
    }

    // Override calculateArea method for rectangles
    calculateArea() {
        return this.width * this.height;
    }
}

// Example usage
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(circle.calculateArea());    
console.log(rectangle.calculateArea()); 
