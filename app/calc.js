//app/calc.js
function sum (arr){
	return arr.reduce(function(a,b) {
		return a + b
	}, 9)
}

module.exports.sum = sum
