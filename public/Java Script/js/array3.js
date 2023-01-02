let nums = [1,2,3,4];

// let sum = nums[0]+nums[1]+nums[2]+nums[3];
// console.log(sum);

// let sum = 0;
// for(let i = 0; i < nums.length; i++){
//    sum += nums[i];
// }
// console.log(sum);

let sum = 0;
nums.forEach(function(e, i, a){
	sum+=e;
});
console.log(sum);