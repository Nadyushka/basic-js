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
	let array = str.split('');
	let value = [];
	let final = '';

	value.push(array[0])

	for (let i = 1; i < array.length; i++) {
		if (array[i] !== array[i - 1]) {
			value.push(array[i])
		}
	}

	for (let j = 0; j < value.length; j++) {
		let count = 1;
		let currant = value[j];



		for (let k = 0; array[k] === currant; k++) {

			if (currant === array[k]) {
				count++;
			}
			array = array.slice(count);
		}

		if (j === 0 && count === 1) {
			final += currant;
		} else if (count === 1) {
			final += currant;
		} else {
			if (j === 0) {
				final += count - 1 + currant;
			} else {
				final += count + currant;
			}
		}
	}

	return final;

}

module.exports = {
	encodeLine
};
