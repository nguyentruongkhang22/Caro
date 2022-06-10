window.addEventListener('DOMContentLoaded', () => {
  const tiles = document.querySelectorAll('.tile');
  const resetButton = document.getElementById('reset');
  const playerDisplay = document.querySelector('.display-player');
  const announcer = document.querySelector('.announcer');

  let board = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X';
  let isGameActive = true;

  const playerXWon = 'PlayerX WON!';
  const playerOWon = 'PlayerO WON!';
  const tie = 'TIE!';

  tiles.forEach((element, index) => {
    element.addEventListener('click', (e) => {
      // console.log(e);
      // console.log(index);
      if (e.target.innerHTML === '') {
        e.target.innerHTML = currentPlayer;
        console.log(e.target.innerHTML);
        board[index] = currentPlayer;
        if (check(board, index, currentPlayer)) alert('FUck');
        currentPlayer = currentPlayer === 'X' ? 'O' : currentPlayer === 'O' ? 'X' : '';
        playerDisplay.innerHTML = currentPlayer;
        console.log(board);
      }
    });
  });

  resetButton.addEventListener('click', resetBoard);
});

const resetBoard = () => {
  const container = document.querySelector('.container');
  for (let i = 0; i < 15; i++) {
    container.innerHTML = `
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>`;
  }
  board = ['', '', '', '', '', '', '', '', ''];
};
