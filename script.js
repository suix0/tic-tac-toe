const gameBoard = (function gameBoard() {
  let board = [];

  for (let i = 0; i < 3; i++) {
    board.push([]);
    for (let j = 0; j < 3; j++) {
      board[i].push(" ");
    }
  }

  const getBoard = () => board;

  const insertPlayerInput = (row, column, value) => {
    return board[row - 1][column - 1] = value;
  }

  return {getBoard, insertPlayerInput}
  
})()

function player(value) {
  let score;

  const increaseScore = () => score++;

  return {increaseScore, value}
}



function gameController() {
  const playerOne = player("X");
  const playerTwo = player("O");

  // Switch between player's turn 
  let playerInputRow;
  let playerInputColumn;
  let gameFinish = false;
  let nextPlayer = false;

  // Track the values of each rows, columns, and diagonals 
  let boardStatus = [
    {"01": "", "02": "", "03": ""},
    {"11": "", "12": "", "13": ""},
    {"21": "", "22": "", "23": ""}
  ];

  while (gameFinish === false) {
  //   Prompt input and make sure it falls within the board indices
    do {
      playerInputRow = parseInt(prompt("Enter row: "));
      playerInputColumn = parseInt(prompt("Enter column: "));
    } while (playerInputRow > 3 && playerInputRow < 1 && playerInputColumn > 3 && playerInputColumn < 1);


    if (nextPlayer === false) {
      gameBoard.insertPlayerInput(playerInputRow, playerInputColumn, playerOne.value);
      nextPlayer = true;

    } else {
      gameBoard.insertPlayerInput(playerInputRow, playerInputColumn, playerTwo.value);
      nextPlayer = false;
    }
  }
  

}

gameController();