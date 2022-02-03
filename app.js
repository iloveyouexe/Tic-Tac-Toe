let cells = document.querySelectorAll(".row > div");
let currentPlayer = "X";
console.log(cells);

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(e) {
  e.target.textContent = currentPlayer;
  //ANCHOR This is for swapping current players.
  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

  if (cells[(0, 1, 2)].textContent === "X") {
    alert("X" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(3, 4, 5)].textContent === "X") {
    alert("X" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(6, 7, 8)].textContent === "X") {
    alert("X" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(0, 4, 8)].textContent === "X") {
    alert("X" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(2, 4, 6)].textContent === "X") {
    alert("X" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(0, 3, 6)].textContent === "X") {
    alert("X" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(1, 4, 7)].textContent === "X") {
    alert("X" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(2, 5, 8)].textContent === "X") {
    alert("X" + " is the winner! You win nothing, congratulations.");
    clear();
  }
  if (cells[(0, 1, 2)].textContent === "O") {
    alert("O" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(3, 4, 5)].textContent === "O") {
    alert("O" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(6, 7, 8)].textContent === "O") {
    alert("O" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(0, 4, 8)].textContent === "O") {
    alert("O" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(2, 4, 6)].textContent === "O") {
    alert("O" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(0, 3, 6)].textContent === "O") {
    alert("O" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(1, 4, 7)].textContent === "O") {
    alert("O" + " is the winner! You win nothing, congratulations.");
    clear();
  } else if (cells[(2, 5, 8)].textContent === "O") {
    alert("O" + " is the winner! You win nothing, congratulations.");
    clear();
  }

  function clear() {
    cells.forEach((cell) => {
      cell.textContent = " ";
    });
  }
}
