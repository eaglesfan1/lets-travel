let person = {
	name: 'Daniel',
	surname: 'Jones',
	age: 30,
	sex: 'male'
}
// console.log(person.name);
// console.log(person.age);

if(person.age >= 18){
	console.log('Person is an adult!');
}else{
	console.log('Person is not an adult');
}

person.age = 12
if(person.age >= 18){
	console.log('Person is an adult!');
}else{
	console.log('Person is not an adult');
}
