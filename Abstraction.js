// Abstraction through functions

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// Function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
}

// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    return 0.5 * base * height;
}

// Example usage
const circleArea = calculateCircleArea(5);
console.log('Circle Area:', circleArea);

const rectangleArea = calculateRectangleArea(4, 8);
console.log('Rectangle Area:', rectangleArea);

const triangleArea = calculateTriangleArea(3, 6);
console.log('Triangle Area:', triangleArea);
