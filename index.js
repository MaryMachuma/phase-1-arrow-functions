// Function expression for divide
const divide = function(a, b) {
    return a / b;
  };
  
  // Arrow function for square
  const square = x => x * x;
  
  // Arrow function for add
  const add = (parameter1, parameter2) => parameter1 + parameter2;
  
  // Additional functions (if needed)
  const double = x => x * 2;
  
  const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  };
  
  // Example: Using map to create squares
  const nums = [1, 2, 3];
  const squares = nums.map(x => x ** 2);
  console.log(squares); // Output: [1, 4, 9]
  
  // Optional: foo function, if needed
  const foo = function() {
    return 'bar';
  };
  
  // Example usage of the functions
  console.log(divide(2000, 100)); // Output: 20
  console.log(square(3)); // Output: 9
  console.log(add(4, 5)); // Output: 9
  