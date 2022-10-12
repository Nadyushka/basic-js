const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

	if (names.length === 0) {
		return [];
	}
	let uniqueValue = [];

	uniqueValue.push(names[0])


	for (let i = 1; i < names.length; i++) {
		if (!uniqueValue.includes(names[i])) {
			uniqueValue.push(names[i]);
		} else {
			if (names.slice(0, i).filter(elem => elem === names[i]).length == 0) {
				uniqueValue.push(names[i] + `(${names.slice(0, i).filter(elem => elem === names[i]).length + 1})`);
			} else {
				uniqueValue.push(names[i] + `(${names.slice(0, i).filter(elem => elem === names[i]).length})`);
			}
		}
	}

	return uniqueValue
}

module.exports = {
	renameFiles
};
