const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

if (!str) {
	return ''
}

	let array = str;
	let uniqueValueArray = [];
	uniqueValueArray.push(array[0])

	for (let i = 1; i < array.length; i++) {
		if (array[i] !== array[i - 1]) {
			uniqueValueArray.push(array[i])
		}
	}

	let arrayTwo = [];

	for (let i = 0; i < uniqueValueArray.length; i++) {
		arrayTwo.push([])
	}

	for (let i = 0; i < uniqueValueArray.length; i++) {
		for (let n = 0; n < str.length; n++) {
			if (uniqueValueArray[i] === str[n]) {
				arrayTwo[i].push(str[n])
			} else {
				str = str.slice(n)
				break
			}
		}
	}

	let result = '';

	for (let i = 0; i < arrayTwo.length; i++) {
		if (arrayTwo[i].length !== 1 ) {
		result += arrayTwo[i].length + arrayTwo[i][0]
		} else {
			result +=  arrayTwo[i][0]
		}
	}

	return result;
}

module.exports = {
	encodeLine
};
