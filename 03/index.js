const utils = require('../utils');

const calc = (input) => {
  const result = Array(input[0].length).fill(0);

  for (const item of input) {
    for (let index = 0; index < item.length; index++) {
      if (item[index] === '0') {
        result[index]--;
      } else {
        result[index]++;
      }
    }
  }

  return result;
};

const convertToBinary = (arr) => {
  return arr.reduce((prev, curr) => (prev += curr < 0 ? '0' : '1'), '');
};

const invert = (str) => {
  return str
    .split('')
    .reduce((prev, curr) => (prev += +curr === 0 ? '1' : '0'), '');
};

const step01 = () => {
  const data = utils.openFile(utils.type.FILE_INPUT);

  const input = utils.splitByEOL(data);

  const c = calc(input);

  const bin = convertToBinary(c);

  let gammaRate = parseInt(bin, 2);
  let epsilonRate = parseInt(invert(bin), 2);

  let result = gammaRate * epsilonRate;

  console.log(`result => ${result}`);
};

const commonBitAtPosition = (data, pos, most = true) => {
  let sumZeros = data.reduce(
    (prev, curr) => prev + (curr[pos] === '0' ? +1 : 0),
    0
  );

  let sumOnes = data.reduce(
    (prev, curr) => prev + (curr[pos] === '1' ? +1 : 0),
    0
  );

  if (sumZeros == sumOnes) {
    return most ? '1' : '0';
  }

  sum = sumOnes - sumZeros;

  if (most) {
    return sum > 0 ? '1' : '0';
  }
  return sum > 0 ? '0' : '1';
};

/**
 *
 * @param array data
 * @param int pos
 * @param string bit
 * @returns
 */
const filterByBitAtPosition = (data, pos, bit) => {
  return data.filter((i) => i[pos] === bit);
};

const reduce = (data, most = true) => {
  let filterd = data;
  let pos = 0;

  while (filterd.length > 1) {
    let common = commonBitAtPosition(filterd, pos, most);
    filterd = filterByBitAtPosition(filterd, pos, common);
    //console.log({ common, filterd, pos });
    pos++;
  }

  return filterd;
};

const step02 = () => {
  const data = utils.openFile(utils.type.FILE_INPUT);

  const input = utils.splitByEOL(data);

  const oxygenGeneratorRating = parseInt(reduce(input, true), 2);
  const co2ScrubberRating = parseInt(reduce(input, false), 2);

  let result = oxygenGeneratorRating * co2ScrubberRating;

  console.log(`result => ${result}`);
};

// step01();
step02();
