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


  while (gameFinish === false) {
  //   Prompt input and make sure it falls within the board indices
    do {
      playerInputRow = parseInt(prompt("Enter row: "));
      playerInputColumn = parseInt(prompt("Enter column: "));

      if (gameBoard.getBoard()[playerInputRow - 1][playerInputColumn - 1] !== " ") {
        alert("Someone made a move there already. Try again.");
      }
    } while ((playerInputRow > 3 || playerInputRow < 1) && (playerInputColumn > 3 || playerInputColumn < 1));

    if (nextPlayer === false) {
      gameBoard.insertPlayerInput(playerInputRow, playerInputColumn, playerOne.value);  
      nextPlayer = true;

    } else {
      gameBoard.insertPlayerInput(playerInputRow, playerInputColumn, playerTwo.value);
      nextPlayer = false;
    }

    console.table(gameBoard.getBoard());

    // Check for rows if all are match for playerOne
    // If it is, end game
    for (let i = 0; i < 3; i++) {
      // Implement first win conditions for playerOne
      // Check for each row
      if (gameBoard.getBoard()[0][i] === "X" && gameBoard.getBoard()[0][i + 1] === "X" && gameBoard.getBoard()[0][i + 2] === "X") {
        alert("Player 1 win");
        gameFinish = true;

      } else if (gameBoard.getBoard()[1][i] === "X" && gameBoard.getBoard()[1][i + 1] === "X" && gameBoard.getBoard()[1][i + 2] === "X") {
        gameFinish = true;
        alert("Player 1 win");

      } else if (gameBoard.getBoard()[2][i] === "X" && gameBoard.getBoard()[2][i + 1] === "X" && gameBoard.getBoard()[2][i + 2] === "X") {
        gameFinish = true;
        alert("Player 1 win");

        // Check for each columns 
      } else if (gameBoard.getBoard()[i][0] === "X" && gameBoard.getBoard()[i + 1][0] === "X" && gameBoard.getBoard()[i + 2][0] === "X") {
        gameFinish = true;
        alert("Player 1 win");

      } else if (gameBoard.getBoard()[i][1] === "X" && gameBoard.getBoard()[i + 1][1] === "X" && gameBoard.getBoard()[i + 2][1] === "X") {
        gameFinish = true;
        alert("Player 1 win");

      } else if (gameBoard.getBoard()[i][2] === "X" && gameBoard.getBoard()[i + 1][2] === "X" && gameBoard.getBoard()[i + 2][2] === "X") {
        gameFinish = true;
        alert("Player 1 win");

        // Check for each diagonals
      } else if (gameBoard.getBoard()[0][i] === "X" && gameBoard.getBoard()[1][i + 1] === "X" && gameBoard.getBoard()[2][i + 2] === "X") {
        gameFinish = true;
        alert("Player 1 win");
      } else if (gameBoard.getBoard()[0][i + 2] === "X" && gameBoard.getBoard()[1][i + 1] === "X" && gameBoard.getBoard()[2][i] === "X") {
        gameFinish = true;
        alert("Player 1 win");
      } 
    }
  }
}

gameController();