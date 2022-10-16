const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	final: [],

	getLength() {
		return this.final.length;
	},

	addLink(value) {
		let valueStr = String(value);
		if (valueStr) {
			this.final.push(`( ${valueStr} )`);

		};
		return this;
	},

	removeLink(position) {
		console.log(typeof position)
		if (position && !isNaN(position) && typeof position !== "string" && typeof position === "number" && position > 0 && position < this.final.length) {
			this.final.splice(position - 1, 1)
		} else {
			this.final = [];
			throw new Error(`You can't remove incorrect link!`)
		}
		return this;
	},

	reverseChain() {
		this.final.reverse();

		return this;
	},

	finishChain() {
		let result = this.final.join('~~');
		this.final = [];

		return result;
	}
};

module.exports = {
	chainMaker
};
