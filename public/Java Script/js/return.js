// function squeeze(fruit){
// 	let juice = fruit + ' juice';
// 	return juice;
// }

// function bake(ing){
//   if(ing.includes('orange juice')
//    && ing.includes('flour')
//    && ing.includes('eggs')
//    && ing.includes('milk')){
//    	console.log('The cupcake has been baked');
//    }else{
//    	console.log('You don\'t have all the ingredients!');
//    }
//  }

// let juice = squeeze('orange');
// bake([juice, 'milk', 'flour', 'eggs']);

function isValid(password){
	if(password.length >= 5){
		return true;
	}else{
		return false;
	}
}

let pass = prompt('Enter a password', '');
let validationResult = isValid(pass);

if(validationResult){
	alert('The password is correct!');
}else{
	alert('The password is too short');
}

