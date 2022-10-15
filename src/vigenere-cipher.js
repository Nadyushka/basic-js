const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

	constructor(value) {
		this.value = value;
	}

	decrypt(word, key) {

		if (!word || !key || word === undefined || key === undefined) {
			throw new Error('Incorrect arguments!')
		}

		let alhabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let result = '';
		let keyWord = (key + key + key + key + key + key + key + key + key + key + key + key + key + key + key + key + key + key + key + key + key).slice(0, word.length).toUpperCase();

		for (let i = 0, t = 0; i < word.length; i++, t++) {
			let indexOfletter = +alhabet.indexOf(word[i].toUpperCase());
			let indexOfKey = +alhabet.indexOf(keyWord[t].toUpperCase());

			if (word[i] === ' ') {
				result += ' ';
				t--;
			} else if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', ":", '-', ',', '.', '&', '$', '#', '(', ')', '^', '*', '@', '/', '|', '%'].includes(word[i])) {
				result += word[i];
			} else {
				let newValue = indexOfletter - indexOfKey;
				if (newValue >= 0) {
					result += alhabet[newValue]
				} else {
					result += alhabet[alhabet.length + newValue]
				}
			}
		}

		if (this.value === false) {
			return result.split('').reverse().join('');
		} else {
			return result
		}

	}

	encrypt(word, key) {

		if (!word || !key || word === undefined || key === undefined) {
			throw new Error('Incorrect arguments!')
		}

		let alhabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let alhabetNew = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let result = '';
		let keyWord = (key + key + key + key + key + key).slice(0, word.length);

		for (let i = 0, t = 0; i < word.length; i++, t++) {
			let indexOfletter = +alhabet.indexOf(word[i].toUpperCase());
			let indexOfAlphabet = +alhabet.indexOf(keyWord[t].toUpperCase());

			if (word[i] === ' ') {
				result += ' ';
				t--;
			} else if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', ":", '-', ',', '.', '&', '$', '#', '(', ')', '^', '*', '@', '/', '|', '%'].includes(word[i])) {
				result += word[i];
			} else {
				let newValue = indexOfletter + indexOfAlphabet;
				result += alhabetNew[newValue]
			}

		}

		if (this.value === false) {
			return result.split('').reverse().join('');
		} else {
			return result
		}

	}



}

module.exports = {
	VigenereCipheringMachine
};
