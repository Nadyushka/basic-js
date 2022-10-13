const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let newArray = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== -1) {
			newArray.push(arr[i]);
		}
	}
	let sortedArray = newArray.sort((a, b) => a - b);
	let result = new Array(arr.length)

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == -1) {
			result[i] = -1;
		}
	}

	for (let i = 0; i < result.length; i++) {
		if (arr[i] !== -1) {
			result[i] = sortedArray[0];
			sortedArray.shift();
		}
	}


	return result;
}

module.exports = {
	sortByHeight
};
