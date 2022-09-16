const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
	let total = 0;
	let sort1 = s1.split('').sort((a,b)=> a-b);
	let sort2 = s2.split('').sort((a,b)=> a-b);

	let sort1Set = []
	let sort2Set = []

	for (let i = 0; i < sort1.length; i++) {
		if(!sort1Set.includes(sort1[i])) {
			sort1Set.push(sort1[i])
	}
}

	for (let i = 0; i < sort2.length; i++) {
		if(!sort2Set.includes(sort2[i])) {
			sort2Set.push(sort2[i])
	}
}


	let array1 = sort1Set.map (a => [a, sort1.filter((b) => b === a).length]);
	let array2 = sort2Set.map (a => [a, sort2.filter((b) => b === a).length]);

	for (let i = 0; i < sort1Set.length; i++) {
		if (sort2Set.includes(sort1Set[i])) {
			for (let j = 0; j < array2.length; j++) {
				if (array2[j][0] === array1[i][0]) {
					total += Math.min(array2[j][1], array1[i][1])
				}
			}
		}
	}
	
	 return total
}

module.exports = {
  getCommonCharacterCount
};
