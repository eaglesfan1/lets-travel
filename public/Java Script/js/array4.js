let array = ['Mark', 'Mike', 'Adam', 'Mary', 'Rachel', 'Mark'];
let name = prompt('Enter a name', 'Mark');
let counter = 0;

for(let i = 0; i < array.length; i++){
	if(array[i] === name){
		counter++;
	}
}
if(counter === 1){
	console.log('Name ' + name + ': ' + counter + ' time');
}else{
	console.log('Name ' + name + ': ' + counter + ' times');
}


// let array = [100,-2,16,41,21,0,6,-4,-50];
// let minValue = array[0];
// let maxValue = array[0];
// let minIndex = 0;
// let maxIndex = 0;

// for(let i = 1; i < array.length; i++){
// 	if(array[i] < minValue){
// 		minValue = array[i];
// 		minIndex = i;
// 	}else if(array[i] > maxValue){
// 		maxValue = array[i];
// 		maxIndex = i;	  
// 	}
// }
// console.log('Min: ' + minValue + '; index: ' + minIndex);
// console.log('Max: ' + maxValue + '; index: ' + maxIndex);


// let array = [11,9,8,6,0,0,3];
// let evenNumbers = 0;
// let oddNumbers = 0;
// let zeros = 0;

// for(let i = 0; i < array.length; i++){
// 	if(array[i] === 0){
// 		zeros++;
// 	}else if(array[i] % 2 === 0){
// 		evenNumbers++;
// 	}else{
// 		oddNumbers++;
// 	}
// }
// console.log('Even: ' + evenNumbers);
// console.log('Odd: ' + oddNumbers);
// console.log('Zero: ' + zeros);

