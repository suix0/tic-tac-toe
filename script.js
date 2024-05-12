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



let removeCount = 0;
function createName(val, playerName, paragraphDisplay) {
  const playerDisplay = document.querySelector(".playerField");
  const playerNameDisplay = document.createElement(paragraphDisplay);

  const playerNameDisplayDiv = val === "X" ? document.querySelector(".playerOneField") : document.querySelector(".playerTwoField");

  playerNameDisplay.innerText = val === "X"? `Player 1\n${playerName}` : `Player 2\n${playerName}`;
  playerNameDisplay.classList.add("playerName");
  playerDisplay.appendChild(playerNameDisplay);
  playerNameDisplayDiv.remove();
}

function displayName(player) {
  let name;
  const input = player.value === "X" ? document.querySelector("#playerOne") : document.querySelector("#playerTwo");

    let submitInputBtn;
    if (player.value === "X") {
      submitInputBtn = document.querySelector(".playerOneSubmit");
    } else {
      submitInputBtn = document.querySelector(".playerTwoSubmit");
    }

    submitInputBtn.addEventListener('click', () => {
      removeCount++;
      name = input.value;
      createName(player.value, name, "h3");
      input.remove();
      submitInputBtn.remove();

      if (removeCount === 2) {
        const gameStartButton = document.createElement("button");
        gameStartButton.innerText = "Start";
        gameStartButton.classList.add("gameStartBtn");
        document.body.appendChild(gameStartButton);

        gameStartButton.addEventListener('click', () => {
          start = true;
          gameController();
          gameStartButton.remove();
        })
      }
      return name;
    })
}

function player(value) {
  let name; 

  const getName = () => name;

  return {getName, value}
};


let start;
function boardToDom(className, playerValue) {
  const boardPart = document.querySelector(`#_${className}`);
  boardPart.innerText = playerValue;
}

const playerOne = player("X");
const playerTwo = player("O");

displayName(playerOne);
displayName(playerTwo);

function gameController() {
  let playerInputRow;
  let playerInputColumn;
  let nextPlayer = false;
  let bucket = 0;
  let gameStart = false;

  const squares = document.getElementsByClassName("boardSquare");
  const message = document.querySelector('.message');


  [...squares].forEach(square => {
    square.addEventListener('click', () => {
      playerInputRow = parseInt(square.getAttribute("data-row"));
      playerInputColumn = parseInt(square.getAttribute("data-column"));
      
     
      if (gameBoard.getBoard()[playerInputRow][playerInputColumn] === " " && gameStart === false) {
        if (nextPlayer === false) {
          gameBoard.insertPlayerInput(playerInputRow, playerInputColumn, playerOne.value);
          boardToDom(playerInputRow + "" +  playerInputColumn, playerOne.value);
          nextPlayer = true;
        } else {
          gameBoard.insertPlayerInput(playerInputRow, playerInputColumn, playerTwo.value);
          boardToDom(playerInputRow + "" + playerInputColumn, playerTwo.value);
          nextPlayer = false;
        }
    

      if (gameBoard.getBoard()[0][0] === "X" && gameBoard.getBoard()[0][1] === "X" && gameBoard.getBoard()[0][2] === "X") {
        gameStart = true;
        resetGame();
        message.innerText = `Player 1 win`;
      } else if (gameBoard.getBoard()[1][0] === "X" && gameBoard.getBoard()[1][1] === "X" && gameBoard.getBoard()[1][2] === "X") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 1 win";
      } else if (gameBoard.getBoard()[2][0] === "X" && gameBoard.getBoard()[2][1] === "X" && gameBoard.getBoard()[2][2] === "X") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 1 win";
        // Check for each columns 
      } else if (gameBoard.getBoard()[0][0] === "X" && gameBoard.getBoard()[1][0] === "X" && gameBoard.getBoard()[2][0] === "X") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 1 win";
      } else if (gameBoard.getBoard()[0][1] === "X" && gameBoard.getBoard()[1][1] === "X" && gameBoard.getBoard()[2][1] === "X") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 1 win";
      } else if (gameBoard.getBoard()[0][2] === "X" && gameBoard.getBoard()[1][2] === "X" && gameBoard.getBoard()[2][2] === "X") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 1 win";
        // Check for each diagonals
      } else if (gameBoard.getBoard()[0][0] === "X" && gameBoard.getBoard()[1][1] === "X" && gameBoard.getBoard()[2][2] === "X") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 1 win";
      } else if (gameBoard.getBoard()[0][2] === "X" && gameBoard.getBoard()[1][1] === "X" && gameBoard.getBoard()[2][0] === "X") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 1 win";
        // Check for win conditions for player 2
      } else if (gameBoard.getBoard()[0][0] === "O" && gameBoard.getBoard()[0][1] === "O" && gameBoard.getBoard()[0][2] === "O") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 2 win";
      } else if (gameBoard.getBoard()[1][0] === "O" && gameBoard.getBoard()[1][1] === "O" && gameBoard.getBoard()[1][2] === "O") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 2 win";
      } else if (gameBoard.getBoard()[2][0] === "O" && gameBoard.getBoard()[2][1] === "O" && gameBoard.getBoard()[2][2] === "O") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 2 win";
        // Check for each columns 
      } else if (gameBoard.getBoard()[0][0] === "O" && gameBoard.getBoard()[1][0] === "O" && gameBoard.getBoard()[2][0] === "O") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 2 win";
      } else if (gameBoard.getBoard()[0][1] === "O" && gameBoard.getBoard()[1][1] === "O" && gameBoard.getBoard()[2][1] === "O") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 2 win";
      } else if (gameBoard.getBoard()[0][2] === "O" && gameBoard.getBoard()[1][2] === "O" && gameBoard.getBoard()[2][2] === "O") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 2 win";
        // Check for each diagonals
      } else if (gameBoard.getBoard()[0][0] === "O" && gameBoard.getBoard()[1][1] === "O" && gameBoard.getBoard()[2][2] === "O") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 2 win";
      } else if (gameBoard.getBoard()[0][2] === "O" && gameBoard.getBoard()[1][1] === "O" && gameBoard.getBoard()[2][0] === "O") {
        gameStart = true;
        resetGame();
        message.innerText = "Player 2 win";
      } 
      bucket++;
      if (bucket === 9 && gameStart === false) {
        gameStart = true;
        message.innerText = "Draw";
        resetGame();
        }
      }
    })
  })
}

function resetGame() {
  const resetBtn = document.createElement("button");
  resetBtn.classList.add("gameRestartBtn");
  resetBtn.addEventListener('click', () => {
    window.location.reload();
  })
  resetBtn.innerText = "Restart";
  document.body.appendChild(resetBtn);
}

// }

