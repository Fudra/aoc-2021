const utils = require('../utils');

const split = (input) => {
  return input.map((value) => value.split(' '));
};

const createDirMap = (input) => {
  const map = [];

  for (const value of input) {
    map.push({
      direction: value[0],
      value: +value[1],
    });
  }

  return map;
};

const step01 = () => {
  const data = utils.openFile(utils.type.FILE_INPUT);

  const input = split(utils.splitByEOL(data));

  const dirMap = createDirMap(input);

  let depth = 0;
  let position = 0;

  for (const item of dirMap) {
    switch (item.direction) {
      case 'forward':
        position += item.value;
        break;
      case 'down':
        depth += item.value;
        break;
      case 'up':
        depth -= item.value;
        break;
    }
  }

  let result = depth * position;

  console.log(`result => ${result}`);
};

const step02 = () => {
  const data = utils.openFile(utils.type.FILE_INPUT);

  const input = split(utils.splitByEOL(data));

  const dirMap = createDirMap(input);

  let depth = 0;
  let horizontal = 0;
  let aim = 0;

  for (const item of dirMap) {
    switch (item.direction) {
      case 'forward':
        horizontal += item.value;
        depth += item.value * aim;
        break;
      case 'down':
        //depth += item.value;
        aim += item.value;
        break;
      case 'up':
        //depth -= item.value;
        aim -= item.value;
        break;
    }
    //console.log({ dir: item.direction, depth, horizontal, aim });
  }

  let result = depth * horizontal;

  console.log(`result => ${result}`);
};

//step01();
step02();
