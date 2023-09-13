const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	let totalSum = 0;
  for (i=0;i<array.length;i++){
    totalSum += array[i];
  }
  return totalSum;
};

const multiply = function(array) {  
  let totalMult=1;
  for (i=0;i<array.length;i++){
    totalMult *= array[i];
  }
  return totalMult;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(num) {
	let range=[];
    for (i=1;i<= num;i++){
        range.push(i);
    }
    let totalMult=1;
  for (i=0;i<range.length;i++){
    totalMult *= range[i];
  }
  return totalMult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
