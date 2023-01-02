// let number = +prompt('Enter a number', '');
// for(let i = 1; i <= 10; i++)
// 	// console.log(number + ' x ' + i + ' = ' + (number * i));
// console.log(`${number} x ${i} = ${number * i}`);

let num1 = +prompt('Enter a number 1', '0');
let num2 = +prompt('Enter a number 2', '0');
let sum = 0;

for(let i = num1; i <= num2; i++){
	if(i % 2 === 0){
		sum += i;
	}
}
console.log(sum);