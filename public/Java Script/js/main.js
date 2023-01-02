let plane = 1100;
let hotel = 800;
let food = 600;

function budget(plane, hotel, food){
	let total = plane + hotel + food;
	let perDay = total / 14;
	console.log('Total: '+ total);
	console.log('Per day: '+ perDay);
}

budget(plane, hotel, food);
budget(1000, 1200, 700);