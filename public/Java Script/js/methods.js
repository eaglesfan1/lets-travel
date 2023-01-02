let person = {
	name: 'Max',
	age: 28,
	greeting: function(partOfDay){
		if(partOfDay === 'morning'){
			console.log(`Good morning! I am ${this.name}!`);
		}else if(partOfDay === 'evening'){
			console.log(`Good evening! I am ${this.name}!`);
		}else{
			console.log(`Hello! I am ${this.name}!`);
		}		
	}
}
person.greeting('night');