let board = ['X', 'X', 'X', 'O', 'X', 'O', ' ', 'O', 'X'];
// board = board.map((el) => (el));
const printMatrix = (arr = []) => {
  // assume rows = columns
  let rows = Math.floor(Math.sqrt(arr.length));
  arr.forEach((el, index) => {
    process.stdout.write(el + ' ');
    if ((index + 1) % rows === 0) {
      console.log();
    }
  });
};
printMatrix(board);

const checkRight = (arr = [], current = 0, stack = 0, currentPlayer) => {
  if (stack === 3) return true;
  if (current >= arr.length) return false;
  let rows = Math.floor(Math.sqrt(arr.length));
  if (arr[current] === currentPlayer) return checkRight(arr, current + rows + 1, ++stack);
  else return false;
};

const checkLeft = (arr = [], current = 0, stack = 0, currentPlayer) => {
  let rows = Math.floor(Math.sqrt(arr.length));
  current = current >= rows - 1 ? current : rows - 1;
  if (stack === 3) return true;
  if (current >= arr.length) return false;
  if (arr[current] === currentPlayer) return checkLeft(arr, current + rows - 1, ++stack);
  else return false;
};

const checkHorizontal = (arr = [], current = 0, stack = 0, currentPlayer = 'X') => {
  let rows = Math.floor(Math.sqrt(arr.length));
  console.log(current);
  if (stack === 3) return true;
  if (current >= arr.length || (current + 1) % rows === 0) return false;
  if (arr[current] === currentPlayer) return checkHorizontal(arr, current + 1, ++stack);
  else return false;
};

const checkVertical = (arr = [], current = 0, stack = 0, currentPlayer) => {
  let rows = Math.floor(Math.sqrt(arr.length));
  if (stack === 3) return true;
  if (current >= arr.length) return false;
  if (arr[current] === currentPlayer) return checkVertical(arr, current + rows, ++stack);
  else return false;
};

const check = (arr = [], currentPlayer) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === currentPlayer) {
      // console.log(checkLeft(arr, index), index);
      // console.log(checkRight(arr, index), index);
      // console.log(checkVertical(arr, index), index);
      // console.log(checkHorizontal(arr, index), index);

      if (
        checkHorizontal(arr, index, currentPlayer) ||
        checkLeft(arr, index, currentPlayer) ||
        checkRight(arr, index, currentPlayer) ||
        checkHorizontal(arr, index, currentPlayer)
      )
        return true;
    }
  }
  return false;
};

// console.log(check(board, 'X'));
console.log(checkHorizontal(board, 0, 'O'));
// console.log(checkRight(board, 0, 'X'));
