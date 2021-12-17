const utils = require('../utils');

const step01 = () => {
  const data = utils.openFile(utils.type.FILE_INPUT);

  const array = utils.castArrayToNumber(utils.splitByEOL(data));

  let inc = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index + 1] > array[index]) {
      inc++;
    }
  }

  console.log(`result => ${inc}`);
};

const step02 = () => {
  const data = utils.openFile(utils.type.FILE_INPUT);

  const array = utils.castArrayToNumber(utils.splitByEOL(data));

  let inc = 0;

  for (let index = 0; index < array.length - 2; index++) {
    const first = array[index] + array[index + 1] + array[index + 2];
    const second = array[index + 1] + array[index + 2] + array[index + 3];

    if (first < second) {
      inc++;
    }
  }

  console.log(`result => ${inc}`);
};

//step01();
step02();
