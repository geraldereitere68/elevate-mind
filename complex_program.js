/**
 * Filename: complex_program.js
 * Description: This complex JavaScript program demonstrates a sophisticated and elaborate code structure.
 * Author: Your Name
 * Date: June 1, 2022
 */

/* ============================================================
 * SECTION 1: Helper Functions
 * ============================================================ */

// Helper function to capitalize the first letter of a string
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Helper function to calculate the factorial of a given number
function factorial(num) {
  if (num < 0) {
    throw new Error("Factorial of a negative number is undefined");
  }

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

/* ============================================================
 * SECTION 2: Object Definitions
 * ============================================================ */

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  introduce() {
    console.log(`Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.firstName} is studying for the upcoming exams.`);
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, age, subject) {
    super(firstName, lastName, age);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.firstName} is teaching ${this.subject} to the students.`);
  }
}

/* ============================================================
 * SECTION 3: Main Program
 * ============================================================ */

// Create some person objects
const person1 = new Person("John", "Doe", 25);
const person2 = new Person("Jane", "Smith", 30);

// Introduce the persons
person1.introduce();
person2.introduce();

// Create a student and a teacher object
const student1 = new Student("Alice", "Johnson", 18, "A+");
const teacher1 = new Teacher("Mr.", "Brown", 45, "Mathematics");

// Introduce the student and the teacher
student1.introduce();
teacher1.introduce();

// Call additional methods specific to students and teachers
student1.study();
teacher1.teach();

/* ============================================================
 * SECTION 4: Complex Calculation
 * ============================================================ */

// Calculate the factorial of a random number
const randomNumber = Math.floor(Math.random() * 10) + 1;
const factorialResult = factorial(randomNumber);

console.log(`The factorial of ${randomNumber} is ${factorialResult}.`);

/* ============================================================
 * SECTION 5: Additional Functionality
 * ============================================================ */

// Demonstrate the helper function
const greeting = "hello, world";
const capitalizedGreeting = capitalizeString(greeting);

console.log(capitalizedGreeting);

// Add extra functionality as needed...

// ...

// ...

// Extra code...
// ...
// ...
// ...

// End of the program
console.log("Program execution finished.");