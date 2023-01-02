function isPrime(number){
	for(let i = 2; i < number; i++){
		if(number % i===0){
			return false;
	  }
	}
	return true;
}

let number = +prompt('Enter a number', '0');

if(isPrime(number)){
	console.log(number + ' is a prime number');
}else{
	console.log(number + ' is a composite number');
}