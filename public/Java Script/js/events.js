let btn = document.querySelector('button');


btn.addEventListener('click', function(){
	console.log('You have single-clicked!')
})
btn.onmouseover = function(){
	console.log('Your pointer is over the button!')
}
btn.addEventListener('click', function(){
	console.log('Another function')
})