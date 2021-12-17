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

const step02 = () => {
  const data = utils.openFile(utils.type.FILE_SAMPLE);

  const input = utils.splitByEOL(data);

  let result = '';

  console.log(`result => ${result}`);
};

step01();
//step02();
