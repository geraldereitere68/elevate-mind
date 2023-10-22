// Filename: sophisticated_app.js
// Content: A sophisticated and complex JavaScript application

// Define an array of names
const names = ['John', 'Sarah', 'Michael', 'Emma', 'David', 'Olivia'];

// Define a class for a person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define a function to generate a random number
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create an array of Person objects
const people = [];
for (let name of names) {
  const age = generateRandomNumber(18, 70);
  const gender = Math.random() < 0.5 ? 'Male' : 'Female';
  people.push(new Person(name, age, gender));
}

// Define a function to filter people by age and gender
function filterPeople(peopleArray, minAge, maxAge, gender) {
  return peopleArray.filter(person => person.age >= minAge && person.age <= maxAge && person.gender === gender);
}

// Filter people who are between 25 and 40 years old and are males
const filteredPeople = filterPeople(people, 25, 40, 'Male');

// Output the filtered people
console.log('Filtered People:');
filteredPeople.forEach(person => person.introduce());

// Define a function to calculate the average age of people
function calculateAverageAge(peopleArray) {
  const totalAge = peopleArray.reduce((sum, person) => sum + person.age, 0);
  return totalAge / peopleArray.length;
}

// Calculate and output the average age
const averageAge = calculateAverageAge(people);
console.log(`Average Age: ${averageAge}`); 

// Define a function to sort people by age in ascending order
function sortPeopleByAge(peopleArray) {
  return peopleArray.sort((person1, person2) => person1.age - person2.age);
}

// Sort people by age
const sortedPeople = sortPeopleByAge(people);

// Output the sorted people
console.log('Sorted People (Ascending Order):');
sortedPeople.forEach(person => person.introduce());

// Define a function to calculate the factorial of a number
function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}

// Calculate and output the factorial of 7
const factorialOfSeven = calculateFactorial(7);
console.log(`Factorial of 7: ${factorialOfSeven}`); 

// ... continue with more sophisticated and complex code ...