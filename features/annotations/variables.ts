let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;

// built in Objects
let now: Date = new Date();

// Array

let colors: string[] = ["red", "green", "blue"];
// let numbers: number[] = [1, 2, 3];

// Classes
class Reportable {}

let car: Reportable = new Reportable();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions

const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When to use annotations
// 1) Functions that return 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) Variables, which have delayed initialization
let x;
x = 10;

// 3) Variables, whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
