let friends = [
   {
   	name: 'Dimitri',
   	age: 43,
   	parents: [
	      {
	      	name: 'Tom',
	      	age: 67
	      },
	      {
	      	name: 'Kate',
	      	age: 65 
	      }
   	  ]
   },
   {
   	  name: 'Daniel',
   	  age: 29,
   	  parents: [
   	     {
           name: 'Max',
           age:  54
   	     },
   	     {
   	     	 name: 'Jane',
   	     	 age: 50
   	     }
   	  ]
   }
]

console.log(friends[0]['parents'][0]['name']);