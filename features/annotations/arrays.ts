const carMakers = ["ford", "toyota", "subaru"];

const dates = [new Date(), new Date(), new Date()];

// const carsByMake: string[][] = []

const carsByMake = [
    ["f150"], 
    ["corolla"], 
    ["XV-2"]
];

// Help with inference when extracting values
const firstCarMaker = carMakers[0];
const myCarMaker = carMakers.pop() || "empty array";

// Prevent incompatable values
// carMakers.push(120);

// Help with array methods
carMakers.map((car: string): string => {
    return car.toLocaleLowerCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push('22-03-1993');
importantDates.push(new Date());
// importantDates.push(5);