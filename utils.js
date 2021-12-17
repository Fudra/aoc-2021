const fs = require('fs');

const FILE_SAMPLE = 'sample.txt';
const FILE_INPUT = 'input.txt';

const type = {
  FILE_SAMPLE: 'SAMPLE',
  FILE_INPUT: 'INPUT',
};

exports.type = type;

/**
 * read the textfile from disk
 *
 * @param string type SAMPLE | INPUT
 * @returns string read data
 */
const openFile = (type) => {
  const file = type == 'SAMPLE' ? FILE_SAMPLE : FILE_INPUT;

  const buffer = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });

  return buffer.toString();
};

exports.openFile = openFile;

/**
 *
 *
 * @param string text
 * @returns array
 */
const splitByEOL = (text) => {
  return text.split('\n');
};

exports.splitByEOL = splitByEOL;

/**
 *
 * @param {*} arr
 * @returns
 */
const castArrayToNumber = (arr) => {
  return arr.map((item) => +item);
};

exports.castArrayToNumber = castArrayToNumber;
