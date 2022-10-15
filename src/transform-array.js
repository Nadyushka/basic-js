const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

	if (!Array.isArray(arr)) {
		throw new Error("\'arr\' parameter must be an instance of the Array!")
	}

	if (arr.length === 0) {
		return [];
	}

	let newArray = [];

	for (let i = 0; i < arr.length && Array.isArray(arr); i++) {
		if (arr[i] === '--double-next') {
			if (arr[i + 2] === '--discard-prev') {
				newArray.push(arr[i + 1]);
				i += 2;
			} else if (arr[i + 1]) { newArray.push(arr[i + 1]) }
		}
		else if (arr[i] === '--double-prev') {
			if (arr[i - 1]) {
				newArray.push(arr[i - 1])
			}
		} else if (arr[i] === '--discard-prev') {
			if (newArray.length != 0) { newArray.shift() }

		} else if (arr[i] === '--discard-next') {
			if (arr[i + 2] === '--double-prev') {
				i += 2;
			} else if (arr[i + 2] === '--discard-prev') {
				i += 2;
			} else {

			}
		} else {
			newArray.push(arr[i])
		}
	}

	return newArray
}

module.exports = {
	transform
};
