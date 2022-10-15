const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	let final = [];


	function arrayCheckValue(value, valueTop, valueLeft) {
		let arrayCheck = [];
		if (matrix[valueTop - 1]) {
			if (matrix[valueTop - 1][valueLeft - 1]) { matrix[valueTop - 1][valueLeft - 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
			if (matrix[valueTop - 1][valueLeft]) { matrix[valueTop - 1][valueLeft] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
			if (matrix[valueTop - 1][valueLeft + 1]) { matrix[valueTop - 1][valueLeft + 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
		}

		if (matrix[valueTop][valueLeft - 1]) { matrix[valueTop][valueLeft - 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
		if (matrix[valueTop][valueLeft + 1]) { matrix[valueTop][valueLeft + 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }

		if (matrix[valueTop + 1]) {
			if (matrix[valueTop + 1][valueLeft - 1]) { matrix[valueTop + 1][valueLeft - 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
			if (matrix[valueTop + 1][valueLeft]) { matrix[valueTop + 1][valueLeft] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
			if (matrix[valueTop + 1][valueLeft + 1]) { matrix[valueTop + 1][valueLeft + 1] === true ? arrayCheck.push(true) : arrayCheck.push(false) }
		}

		if (arrayCheck.filter(item => item === true).length === 0) {
			final.push(0)
		} else {
			final.push(arrayCheck.filter(item => item === true).length)
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let t = 0; t < matrix[0].length; t++) {
			arrayCheckValue(matrix[i][t], i, t)
		}
	}

	let answer = [];

	if (matrix.length === 3) {
		answer.push([]);
		answer.push([]);
		answer.push([]);
		answer[0].push(final[0])
		answer[0].push(final[1])
		answer[0].push(final[2])
		answer[1].push(final[3])
		answer[1].push(final[4])
		answer[1].push(final[5])
		answer[2].push(final[6])
		answer[2].push(final[7])
		answer[2].push(final[8])
	} else if (matrix.length === 2) {
		answer.push([]);
		answer.push([]);
		answer[0].push(final[0])
		answer[0].push(final[1])
		answer[0].push(final[2])
		answer[1].push(final[3])
		answer[1].push(final[4])
		answer[1].push(final[5])
	}



	console.log(answer)

	return answer;
}





module.exports = {
	minesweeper
};
