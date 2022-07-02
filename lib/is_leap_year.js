/**
 * Indica se é um ano bissexto ou não
 * @param {number} year o ano que se quer analisar
 * @returns {boolean} é um ano bissexto?
 */
const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year === 0);
};

module.exports = isLeapYear;