let inp = document.querySelectorAll('input');
let a = document.querySelector('a');


for(let i = 0; i < inp.length; i++){
	inp[i].addEventListener('keypress', function(event){
	     if(event.which === 13){
		    console.log(this.value);
		     }
	   })
}

a.addEventListener('click', function(event){
	event.preventDefault();
	alert("Local anchor")
})