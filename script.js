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
    return board[row][column] = value;
  }

  return {getBoard, insertPlayerInput}
  
})()

function player(value) {
  let score;

  const increaseScore = () => score++;

  return {increaseScore, value}
}

function boardToDom(className, playerValue) {
  console.log(className)
  const boardPart = document.querySelector(`#_${className}`);
  boardPart.innerText = playerValue;
}

function gameController() {
  const playerOne = player("X");
  const playerTwo = player("O");

  // Switch between player's turn 
  let playerInputRow;
  let playerInputColumn;
  let gameFinish = false;
  let nextPlayer = false;
  let bucket = 0;
  

  const squares = document.getElementsByClassName("boardSquare");
  const message = document.querySelector('.message');

  [...squares].forEach(square => {
    square.addEventListener('click', () => {
      playerInputRow = parseInt(square.getAttribute("data-row"));
      playerInputColumn = parseInt(square.getAttribute("data-column"));
            
        if (gameBoard.getBoard()[playerInputRow][playerInputColumn] === " ") {
          if (nextPlayer === false) {
            gameBoard.insertPlayerInput(playerInputRow, playerInputColumn, playerOne.value);
            boardToDom(playerInputRow + "" +  playerInputColumn, playerOne.value);
            nextPlayer = true;
          } else {
            gameBoard.insertPlayerInput(playerInputRow, playerInputColumn, playerTwo.value);
            boardToDom(playerInputRow + "" + playerInputColumn, playerTwo.value);
            nextPlayer = false;
          }
        }
  
        if (gameBoard.getBoard()[0][0] === "X" && gameBoard.getBoard()[0][1] === "X" && gameBoard.getBoard()[0][2] === "X") {
          gameFinish = true;
          message.innerText = "Player 1 win";
        } else if (gameBoard.getBoard()[1][0] === "X" && gameBoard.getBoard()[1][1] === "X" && gameBoard.getBoard()[1][2] === "X") {
          gameFinish = true;
          message.innerText = "Player 1 win";
        } else if (gameBoard.getBoard()[2][0] === "X" && gameBoard.getBoard()[2][1] === "X" && gameBoard.getBoard()[2][2] === "X") {
          gameFinish = true;
          message.innerText = "Player 1 win";
          // Check for each columns 
        } else if (gameBoard.getBoard()[0][0] === "X" && gameBoard.getBoard()[1][0] === "X" && gameBoard.getBoard()[2][0] === "X") {
          gameFinish = true;
          message.innerText = "Player 1 win";
        } else if (gameBoard.getBoard()[0][1] === "X" && gameBoard.getBoard()[1][1] === "X" && gameBoard.getBoard()[2][1] === "X") {
          gameFinish = true;
          message.innerText = "Player 1 win";
        } else if (gameBoard.getBoard()[0][2] === "X" && gameBoard.getBoard()[1][2] === "X" && gameBoard.getBoard()[2][2] === "X") {
          gameFinish = true;
          message.innerText = "Player 1 win";
          // Check for each diagonals
        } else if (gameBoard.getBoard()[0][0] === "X" && gameBoard.getBoard()[1][1] === "X" && gameBoard.getBoard()[2][2] === "X") {
          gameFinish = true;
          message.innerText = "Player 1 win";
        } else if (gameBoard.getBoard()[0][2] === "X" && gameBoard.getBoard()[1][1] === "X" && gameBoard.getBoard()[2][0] === "X") {
          gameFinish = true;
          message.innerText = "Player 1 win";
          // Check for win conditions for player 2
        } else if (gameBoard.getBoard()[0][0] === "O" && gameBoard.getBoard()[0][1] === "O" && gameBoard.getBoard()[0][2] === "O") {
          gameFinish = true;
          message.innerText = "Player 2 win";
        } else if (gameBoard.getBoard()[1][0] === "O" && gameBoard.getBoard()[1][1] === "O" && gameBoard.getBoard()[1][2] === "O") {
          gameFinish = true;
          message.innerText = "Player 2 win";
        } else if (gameBoard.getBoard()[2][0] === "O" && gameBoard.getBoard()[2][1] === "O" && gameBoard.getBoard()[2][2] === "O") {
          gameFinish = true;
          message.innerText = "Player 2 win";
          // Check for each columns 
        } else if (gameBoard.getBoard()[0][0] === "O" && gameBoard.getBoard()[1][0] === "O" && gameBoard.getBoard()[2][0] === "O") {
          gameFinish = true;
          message.innerText = "Player 2 win";
        } else if (gameBoard.getBoard()[0][1] === "O" && gameBoard.getBoard()[1][1] === "O" && gameBoard.getBoard()[2][1] === "O") {
          gameFinish = true;
          message.innerText = "Player 2 win";
        } else if (gameBoard.getBoard()[0][2] === "O" && gameBoard.getBoard()[1][2] === "O" && gameBoard.getBoard()[2][2] === "O") {
          gameFinish = true;
          message.innerText = "Player 2 win";
          // Check for each diagonals
        } else if (gameBoard.getBoard()[0][0] === "O" && gameBoard.getBoard()[1][1] === "O" && gameBoard.getBoard()[2][2] === "O") {
          gameFinish = true;
          message.innerText = "Player 2 win";
        } else if (gameBoard.getBoard()[0][2] === "O" && gameBoard.getBoard()[1][1] === "O" && gameBoard.getBoard()[2][0] === "O") {
          gameFinish = true;
          message.innerText = "Player 2 win";
        } 
        bucket++;
        if (bucket === 9 && gameFinish === false) {
          message.innerText = "Draw";
          gameFinish = true;
        }
      })
    })
  }
// }


gameController();