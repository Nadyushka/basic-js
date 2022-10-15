const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
	let result;
	countValue(n);

	function countValue(value) {
		result = 0;
		let valueNumber = value.toString()

		for (let i = 0; i < valueNumber.length; i++) {
			result += Number(valueNumber[i]);
		}

		if (result < 10) {
			return result;
		} else {
			return countValue(result);
		}
	}

	return result;

}

module.exports = {
	getSumOfDigits
};
