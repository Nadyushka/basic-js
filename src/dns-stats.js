const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let sortDomains = domains.map(value => value.split('.').reverse());
	let sortDomainsJoin = domains.map(value => value.split('.').reverse().join('.'));
	let uniqueValues = new Set(sortDomains.flat())
	let final = {};
	let uniqueValue;
	let count;
	let check = 1;
	let prevValue = '';


	for (let item of uniqueValues) {

		uniqueValue = item;
		count = 0
		check++;
		prevValue += '.' + item;

		for (let j = 0; j < sortDomains.length; j++) {
			if (sortDomains[j].includes(uniqueValue)) {
				count++;
			}
		}

		if (check === 1) {
			final[uniqueValue] = count;
		} else {
			final[prevValue] = count;
		}
	}


	return final;
}

module.exports = {
	getDNSStats
};
