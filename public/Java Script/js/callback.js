// let helloFunc = function(){
// 	console.log('Hello');
// }

// function byeFunc(){
// 	console.log('Good bye');
// }

// function greeting(func){
// 	func();
// }

// greeting(byeFunc);

let counter = 0;
let interval =  setInterval(function(){
	counter++;
	if(counter === 10){
		clearInterval(interval);
	}
  console.log('Hello');
}, 1000);