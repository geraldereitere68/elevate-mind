// Filename: ComplexCode.js
// Description: An elaborate and complex JavaScript code example

// A complex class definition representing a Person
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  isAdult() {
    return this.age >= 18;
  }
}

// An array of Person objects
const people = [
  new Person("John", "Doe", 25),
  new Person("Jane", "Smith", 32),
  new Person("Alice", "Johnson", 19),
  new Person("Bob", "Brown", 17)
];

// A function to filter adults from the people array
function getAdults() {
  return people.filter(person => person.isAdult());
}

// A complex function that calculates the average age of adults
function calculateAverageAdultAge() {
  const adults = getAdults();
  const totalAdults = adults.length;

  if (totalAdults === 0) {
    return 0;
  }

  const sumOfAges = adults.reduce((acc, person) => acc + person.age, 0);
  return sumOfAges / totalAdults;
}

// Logging the average adult age
console.log("Average adult age:", calculateAverageAdultAge());

// A complex utility function to format names in uppercase and lowercase
function formatNames() {
  people.forEach(person => {
    person.firstName = person.firstName.toUpperCase();
    person.lastName = person.lastName.toLowerCase();
  });
}

// Formatting names and logging the updated array
formatNames();
console.log("Updated people array:", people);

// A complex function that sorts people by age and logs the result
function sortPeopleByAge() {
  const sortedPeople = [...people].sort((personA, personB) => personA.age - personB.age);
  console.log("People sorted by age:", sortedPeople);
}

// Sorting people by age
sortPeopleByAge();

// A complex function to retrieve the unique last names from people
function getUniqueLastNames() {
  const lastNamesSet = new Set(people.map(person => person.lastName));
  return [...lastNamesSet];
}

// Retrieving unique last names and logging the result
const uniqueLastNames = getUniqueLastNames();
console.log("Unique last names:", uniqueLastNames);

// An elaborate event listener to handle button clicks
const button = document.getElementById("myButton");
button.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Button clicked!");
  // More complex logic can be added here
});

// ... More complex code can be added below ...

// End of ComplexCode.js file