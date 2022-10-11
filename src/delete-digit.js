const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let nString = n.toString();
	let newNumber = nString.slice(1);;

	if (nString.length <= 2) {
		newNumber > nString[1] ? +newNumber : +nString[1];
	}

	for (let i = 1; i < nString.length; i++) {
		let prev = nString.slice(0, i) + nString.slice(i + 1);

		if (newNumber < prev) {
			newNumber = prev;
		}
	}
	return +newNumber;
}

module.exports = {
	deleteDigit
};
