const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

	let array = Object.entries(options).flat();


	let repeatTimes;
	array.includes('repeatTimes') ? repeatTimes = array[array.indexOf('repeatTimes') + 1] : repeatTimes = '';
	let separator;
	array.includes('separator') ? separator = array[array.indexOf('separator') + 1] : separator = '+';
	let addition;
	array.includes('addition') ? addition = array[array.indexOf('addition') + 1] : addition = '';
	let additionRepeatTimes;
	array.includes('additionRepeatTimes') ? additionRepeatTimes = array[array.indexOf('additionRepeatTimes') + 1] : additionRepeatTimes = '';
	let additionSeparator;
	array.includes('additionSeparator') ? additionSeparator = array[array.indexOf('additionSeparator') + 1] : additionSeparator = '|';

	let additionalPart = '';
	if (array.includes('addition') ) {
		additionalPart = addition;
		for (let i = 0; i < additionRepeatTimes - 2; i++) {
			additionalPart += additionSeparator + addition;
		}
		if (additionRepeatTimes > 1) {
			additionalPart += additionSeparator + addition;
		}
	}


	let mainPart


	mainPart = str + additionalPart;
	for (let i = 0; i < repeatTimes - 2; i++) {
		mainPart += separator + str + additionalPart;
	}

	if (repeatTimes > 1) {
		mainPart += separator + str + additionalPart
	}

	return mainPart

}

module.exports = {
	repeater
};
