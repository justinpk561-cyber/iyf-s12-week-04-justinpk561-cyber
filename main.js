let name  = "Justin Keya";
let age = 20;
const birthyear = 2006;

// Check data types 
console.log(typeof name);
console.log(typeof age);
console.log(typeof true);

// Let vs const
let score = 100;
score = 150;

const PI = 3.14159;

console.log("Name:", name);
console.log("Age:", age);
console.log("Birth Year:", birthyear);
console.log("Score:", score);
console.log("PI:", PI);

let studentName = "Justin Keya";
let studentAge = 20;
let isStudent = true;
let favoriteColor = ["blue" , "black" , "white"];
let today = new Date();

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Is Student:", isStudent);
console.log("Favorite Colors:", favoriteColor);
console.log("Today's Date:", today);

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);

let count = 0;
count++;

console.log("After increment:", count);

count--;

console.log("After decrement:", count);

let firstName = "Justin";
let lastName = "Keya";

// Join strings
let fullName = firstName + " " + lastName;

// Template literals
let greeting = `hello, ${fullName}!`;
let message = `${firstName} has ${firstName.length} letters.`;

// Strings method
console.log("Full Name:", fullName);
console.log("Uppercase:",
    fullName.toUpperCase());
    console.log("Lowercase:",
         fullName.toLowerCase());
         console.log("First letter:",
                fullName.charAt(0));
                console.log("Contains name:",
                     fullName.includes("firstName"));
                     console.log(greeting);
                     console.log(message);
 
                     // Comparison operators
console.log("5 greater than 3:", 5 > 3);
console.log("5 less than 3:", 5 < 3);
console.log("5 equals 5:", 5 === 5);
console.log("5 equals '5':", 5 == "5");
console.log("5 not equal to 3:", 5 !== 3);

// Logical operators
console.log("AND:", true && true);
console.log("OR:", true || false);
console.log("NOT:", !true);

let myAge = 21;

// Age calculations
let ageInDays = myAge * 365;
let ageInHours = ageInDays * 24;
let yearTurning100 = new Date().getFullYear() + (100 - myAge);

console.log("My age in years:", myAge);
console.log("My age in days:", ageInDays);
console.log("My age in hours:", ageInHours);
console.log("Year I turn 100:", yearTurning100);

// 1. Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Function expression
const add = function(a, b) {
    return a + b;
};

// 3. Arrow function
const multiply = (a, b) => a * b;

// Testing our functions
console.log(greet("Justin"));
console.log("Addition:", add(10, 5));
console.log("Multiplication:", multiply(4, 3));

// 1. Calculate rectangle area
function calculateArea(width, height) {
    return width * height;
}

// 2. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 3. Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// 4. Get initials
function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(name => name.charAt(0).toUpperCase())
        .join("");
}

// 5. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Testing
console.log("Area:", calculateArea(10, 5));
console.log("Temperature:", celsiusToFahrenheit(25));
console.log("Is even:", isEven(8));
console.log("Initials:", getInitials("Justin Kamau"));
console.log("Reversed:", reverseString("hello"));

function greetPerson(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetPerson());
console.log(greetPerson("Alice"));
console.log(greetPerson("Bob", "Hi"));

// Calculate tip
function calculateTip(bill, tipPercent = 15) {
    return bill * (tipPercent / 100);
}

console.log("Default tip:", calculateTip(1000));
console.log("20% tip:", calculateTip(1000, 20));

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("Grade:", getGrade(95));
console.log("Grade:", getGrade(85));
console.log("Grade:", getGrade(55));

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log(getDayName(0));
console.log(getDayName(3));
console.log(getDayName(6));
console.log(getDayName(9));

// 1. FOR LOOP
console.log("For loop:");

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. WHILE LOOP
console.log("While loop:");

let whileCount = 0;

while (whileCount < 5) {
    console.log(whileCount);
    whileCount++;
}

// 3. FOR...OF LOOP
console.log("For of loop:");

const colors = ["red", "green", "blue"];

for (const color of colors) {
    console.log(color);
}

console.log("Numbers 1 to 100:");

for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log("FizzBuzz:");

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("Star triangle:");

for (let i = 1; i <= 5; i++) {
    console.log("*".repeat(i));
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);

        case "-":
            return subtract(num1, num2);

        case "*":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);

        case "%":
            return num1 % num2;

        case "**":
            return num1 ** num2;

        default:
            return "Invalid operator";
    }
}

// Calculator tests
console.log("Addition:", calculate(10, "+", 5));
console.log("Subtraction:", calculate(10, "-", 5));
console.log("Multiplication:", calculate(10, "*", 5));
console.log("Division:", calculate(10, "/", 5));
console.log("Modulus:", calculate(10, "%", 3));
console.log("Power:", calculate(10, "**", 2));
console.log("Division by zero:", calculate(10, "/", 0));

// Creating arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Number of fruits:", fruits.length);

// Modifying arrays
fruits.push("grape");
console.log("After push:", fruits);

fruits.unshift("mango");
console.log("After unshift:", fruits);

fruits.pop();
console.log("After pop:", fruits);

fruits.shift();
console.log("After shift:", fruits);

const myNumbers = [1, 2, 3, 4, 5];

// forEach
myNumbers.forEach(num => {
    console.log("Number:", num);
});

// map - double every number
const doubled = myNumbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter - get even numbers
const evenNumbers = myNumbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// find - find first even number
const firstEven = myNumbers.find(num => num % 2 === 0);
console.log("First even:", firstEven);

// reduce - calculate total
const total = myNumbers.reduce((sum, num) => sum + num, 0);
console.log("Total:", total);

// includes
console.log("Includes 3:", myNumbers.includes(3));

const values = [5, -3, 12, -8, 20, 7, 2];

// 1. Double all numbers
const doubleValues = values.map(num => num * 2);

// 2. Remove negative numbers
const positiveValues = values.filter(num => num >= 0);

// 3. Find first number greater than 10
const firstGreaterThan10 = values.find(num => num > 10);

// 4. Calculate product of all numbers
const product = values.reduce((total, num) => total * num, 1);

console.log("Doubled:", doubleValues);
console.log("Positive numbers:", positiveValues);
console.log("First number above 10:", firstGreaterThan10);
console.log("Product:", product);

const person = {
    firstName: "Justin",
    lastName: "Keya",
    age: 20,
    isStudent: true,
    hobbies: ["coding", "music", "football"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties
console.log("First name:", person.firstName);
console.log("Last name:", person["lastName"]);
console.log("City:", person.address.city);
console.log("Hobbies:", person.hobbies);

// Modifying properties
person.age = 22;
person.phone = "0712345678";

console.log("Updated age:", person.age);
console.log("Phone:", person.phone);

// Removing a property
delete person.isStudent;

console.log("Updated person:", person);

const calculator = {
    add: function(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply: (a, b) => a * b
};

// Testing object methods
console.log("Object addition:", calculator.add(5, 3));
console.log("Object subtraction:", calculator.subtract(10, 4));
console.log("Object multiplication:", calculator.multiply(6, 2));

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get all keys
console.log("Subjects:", Object.keys(scores));

// Get all values
console.log("Scores:", Object.values(scores));

// Get entries
console.log("Entries:", Object.entries(scores));

// Loop through the object
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

const students = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 72, major: "Math" },
    { name: "Charlie", age: 23, grade: 90, major: "CS" },
    { name: "Diana", age: 21, grade: 88, major: "Physics" },
    { name: "Eve", age: 22, grade: 95, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);

// 2. Get students with grade above 80
const highAchievers = students.filter(student => student.grade > 80);

// 3. Find Charlie
const charlie = students.find(student => student.name === "Charlie");

// 4. Calculate average grade
const avgGrade = students.reduce(
    (total, student) => total + student.grade, 0
) / students.length;

// 5. Get CS majors
const csMajors = students.filter(student => student.major === "CS");

// 6. Sort by highest grade
const sortedByGrade = [...students].sort(
    (a, b) => b.grade - a.grade
);

// 7. Check if anyone scored above 90
const hasTopStudent = students.some(student => student.grade > 90);

// 8. Check if everyone is passing
const allPassing = students.every(student => student.grade >= 60);

// Display results
console.log("Names:", names);
console.log("High achievers:", highAchievers);
console.log("Charlie:", charlie);
console.log("Average grade:", avgGrade);
console.log("CS majors:", csMajors);
console.log("Sorted grades:", sortedByGrade);
console.log("Has top student:", hasTopStudent);
console.log("All passing:", allPassing);

const json = '{"name":"Justin","grades":{"math":88,"english":92}}';

// Convert JSON text into a JavaScript object
const student = JSON.parse(json);

console.log("Student name:", student.name);
console.log("Math grade:", student.grades.math);

// Convert object back into JSON text
const backToText = JSON.stringify(student, null, 2);

console.log("JSON text:", backToText);
console.log("Data type:", typeof backToText);

const postsJson = `[
    {"title": "Week 4 recap", "likes": 30, "published": true},
    {"title": "Learning JavaScript", "likes": 45, "published": false},
    {"title": "My coding journey", "likes": 60, "published": true},
    {"title": "HTML basics", "likes": 20, "published": true}
]`;

// Convert JSON text into an array
const parsedPosts = JSON.parse(postsJson);

// Keep only published posts
const publishedPosts = parsedPosts.filter(post => post.published);

// Sort posts by likes (highest first)
const sortedPosts = publishedPosts.sort((a, b) => b.likes - a.likes);

// Create a readable message for each post
const postMessages = sortedPosts.map(post =>
    `${post.title} (${post.likes} likes)`
);

// Convert the results back into JSON text
const postsBackToJson = JSON.stringify(postMessages, null, 2);

console.log("Published posts:", postMessages);
console.log("JSON result:", postsBackToJson);

const gradeTracker = {
    students: [],

    addStudent(name, grade) {
        this.students.push({ name, grade });
    },

    getAverage() {
        const total = this.students.reduce(
            (sum, student) => sum + student.grade, 0
        );
        return total / this.students.length;
    }
};

gradeTracker.addStudent("Alice", 85);
gradeTracker.addStudent("Brian", 92);
gradeTracker.addStudent("Carol", 78);

console.log("All students:", gradeTracker.students);
console.log("Class average:", gradeTracker.getAverage());

// Find a student by name
gradeTracker.findStudent = function(name) {
    return this.students.find(student => student.name === name);
};

// Get the student with the highest grade
gradeTracker.getTopStudent = function() {
    return this.students.reduce((top, student) =>
        student.grade > top.grade ? student : top
    );
};

// Get students who passed (50 and above)
gradeTracker.getPassingStudents = function() {
    return this.students.filter(student => student.grade >= 50);
};

console.log("Find Alice:", gradeTracker.findStudent("Alice"));
console.log("Top student:", gradeTracker.getTopStudent());
console.log("Passing students:", gradeTracker.getPassingStudents());

// Update a student's grade
gradeTracker.updateGrade = function(name, newGrade) {
    const student = this.findStudent(name);

    if (student) {
        student.grade = newGrade;
        console.log(name + "'s grade updated!");
    } else {
        console.log("Student not found.");
    }
};

// Display all student results
gradeTracker.displayResults = function() {
    this.students.forEach(student => {
        console.log(
            student.name + ": " + student.grade +
            " - " + (student.grade >= 50 ? "PASS" : "FAIL")
        );
    });
};

// Test the new features
gradeTracker.updateGrade("Alice", 95);
gradeTracker.displayResults();

function fizzBuzzChallenge() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzzChallenge();

function reverseText(text) {
    return text.split("").reverse().join("");
}

console.log("Reverse:", reverseText("JavaScript"));
console.log("Reverse:", reverseText("Weekend Academy"));

function findLargest(numbersList) {
    return Math.max(...numbersList);
}

console.log("Largest:", findLargest([12, 45, 7, 89, 23]));
console.log("Largest:", findLargest([100, 5, 300, 25]));