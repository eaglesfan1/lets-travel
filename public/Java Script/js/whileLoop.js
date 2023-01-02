// let bookPrice = 50;
// let budget = 80;
// while(budget >= bookPrice){
// 	budget -= bookPrice;
// 	console.log("I've bought a book");
// }
// console.log("Rest: $" + budget);

//Exercise 1

// let number = prompt('Enter a number','0');
// let sum = 0;
// let i = 1;

// while(i <= number){
// 	sum += i;
// 	i++;
// }
// console.log(sum);

let number = +prompt('Enter a number', '');
let sum = 0;

while(number !== 0){
	sum += number;
	number = +prompt('Enter a number', '');
}
console.log(sum);