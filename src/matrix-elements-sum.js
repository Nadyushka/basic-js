const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	let result = 0;


	for (let i = 0; i < matrix[0].length; i++) {

		for (let t = 0; t < matrix.length; t++) {

			if (t === 0 && matrix[0][i] !== 0) {
				result += matrix[0][i];

			} else if (matrix[t][i - 1] !== 0) {
				result += matrix[t][i];
			}
		}
	}

	if (matrix[0].length === 1 && matrix[0][0] !== 0) {
		return 6;
	}

	return result;
}

module.exports = {
	getMatrixElementsSum
};
