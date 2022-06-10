// board = board.map((el) => (el = 'X'));
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

const checkRight = (arr = [], current = 0, stack = 0, currentPlayer = 'X') => {
  if (stack === 3) return true;
  if (current >= arr.length) return false;
  let rows = Math.floor(Math.sqrt(arr.length));
  if (arr[current] === currentPlayer) return checkRight(arr, current + rows + 1, ++stack);
  else return false;
};

const checkLeft = (arr = [], current = 0, stack = 0, currentPlayer = 'X') => {
  let rows = Math.floor(Math.sqrt(arr.length));
  current = current >= rows - 1 ? current : rows - 1;
  if (stack === 3) return true;
  if (current >= arr.length) return false;
  if (arr[current] === currentPlayer) return checkLeft(arr, current + rows - 1, ++stack);
  else return false;
};

const checkHorizontal = (arr = [], current = 0, stack = 0, currentPlayer = 'X') => {
  let rows = Math.floor(Math.sqrt(arr.length));
  if (stack === 3) return true;
  if (current >= arr.length || (current + 1) % rows === 0) return false;
  if (arr[current] === currentPlayer) return checkHorizontal(arr, current + 1, ++stack);
  else return false;
};

const checkVertical = (arr = [], current = 0, stack = 0, currentPlayer = 'X') => {
  let rows = Math.floor(Math.sqrt(arr.length));
  if (stack === 3) return true;
  if (current >= arr.length) return false;
  if (arr[current] === currentPlayer) return checkVertical(arr, current + rows, ++stack);
  else return false;
};

const check = (arr = [], currentPlayer = 'X') => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === currentPlayer) {
      console.log(checkVertical(arr, index), index);
      if (
        checkVertical(arr, index) ||
        checkLeft(arr, index) ||
        checkRight(arr, index) ||
        checkHorizontal(arr, index)
      )
        return true;
    }
  }
  return false;
};
