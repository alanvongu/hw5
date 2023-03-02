const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumber = number.filter(num => num % 2 !== 0);
console.log(oddNumber); 


const divisibleBy2Or5 = number.filter(num => num % 2 === 0 || num % 5 === 0);
console.log(divisibleBy2Or5); 


const divisibleBy3Squared = number.filter(num => num % 3 === 0).map(num => num ** 2);
console.log(divisibleBy3Squared); 


const sumOfSquareDivisibleBy5 = number.filter(num => num % 5 === 0).reduce((acc, num) => acc + num ** 2, 0);
console.log(sumOfSquareDivisibleBy5); 
