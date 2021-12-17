const utils = require('../utils');

const getBingoNumbers = (data) => {
  const numbers = data[0].split(',');
  return utils.castArrayToNumber(numbers);
};

const getBoards = (data) => {
  const boards = [];

  let board = [];

  for (const [index, item] of data.entries()) {
    if (index === 0 || index === 1) continue;
    if (item.length === 0) {
      boards.push(board);
      board = [];
      continue;
    }

    const line = utils.castArrayToNumber(item.trim().split(/\s+/g));

    for (const digit of line) {
      board.push({ marked: false, value: digit });
    }
  }

  boards.push(board);
  return boards;
};

const markBoards = (boards, num) => {
  for (const board of boards) {
    const b = board.filter((i) => i.value === num);

    if (b.length > 0) b[0].marked = true;
  }

  return boards;
};

const checkForWin = (board) => {
  const SIZE = 5;

  let itemsRow = [];
  for (let y = 0; y < SIZE; y++) {
    itemsRow = [];
    for (let x = 0; x < SIZE; x++) {
      const idx = x + y * SIZE;
      itemsRow.push(board[idx]);
    }

    const hasWin = itemsRow.reduce((prev, curr) => prev && curr.marked, true);
    if (hasWin) return true;
  }

  let itemsCol = [];
  for (let x = 0; x < SIZE; x++) {
    itemsCol = [];
    for (let y = 0; y < SIZE; y++) {
      const idx = x + y * SIZE;
      itemsCol.push(board[idx]);
    }

    const hasWin = itemsCol.reduce((prev, curr) => prev && curr.marked, true);
    if (hasWin) return true;
  }

  return false;
};

const sumUnmarked = (board) => {
  const unmakred = board.filter((i) => !i.marked);

  return unmakred.reduce((prev, curr) => prev + curr.value, 0);
};

const step01 = () => {
  const data = utils.openFile(utils.type.FILE_INPUT);

  const input = utils.splitByEOL(data);

  const numbers = getBingoNumbers(input);

  let boards = getBoards(input);

  let winningBoard = null;
  let hasWinningBoard = false;
  let winningNumber = 0;

  while (!hasWinningBoard) {
    winningNumber = numbers.shift();
    boards = markBoards(boards, winningNumber);

    for (const b of boards) {
      const result = checkForWin(b);

      if (result) {
        hasWinningBoard = true;
        winningBoard = b;
      }
    }
  }

  const sum = sumUnmarked(winningBoard);

  const result = sum * winningNumber;

  console.log(`result => ${result}`);
};

const step02 = () => {
  const data = utils.openFile(utils.type.FILE_INPUT);

  const input = utils.splitByEOL(data);

  const numbers = getBingoNumbers(input);

  let boards = getBoards(input);
  let lastWinningBoard = null;

  let lastWinningNumber = 0;

  while (boards.length) {
    lastWinningNumber = numbers.shift();
    boards = markBoards(boards, lastWinningNumber);

    for (const [index, b] of boards.entries()) {
      const hasWin = checkForWin(b);

      if (hasWin) {
        lastWinningBoard = b;
        boards.splice(index, 1);
      }
    }
  }

  const sum = sumUnmarked(lastWinningBoard);

  const result = sum * lastWinningNumber;

  console.log(`result => ${result}`);
};

//step01();
step02();
