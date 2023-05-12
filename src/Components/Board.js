import BoardCell from "./BoardCell"
import { useState } from "react"

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}



const Board = () => {
  
  // Creating a state variable to hold the values of the board
  const[square, setSquare] = useState(Array(9).fill(null))

  // Creating a state variable to alternate between 'X' & 'O' signs
  const [xIsNext,setxIsNext] =useState(true);

  const winner = calculateWinner(square);
  let Status;

  if (winner){
    Status = "Winner: " + winner;
  } else
    Status = "Next player : " + (xIsNext? 'X' : 'O');
  
  function handleClick(i) {
    //checks if the square already contains an element and short cirucits if it does! 
    if (square[i] || calculateWinner(square)){
      return;
    }
    //creating a new array
    const newSquare = square.slice();

    //checking who's turn is it 'X' or 'O'?
    if (xIsNext){
      newSquare[i] = 'X'
    } else
      newSquare[i] = 'O'
    
    //updating the value on the current clicked square
    setSquare(newSquare)

    //Flipping the sign for the next move
    setxIsNext(!xIsNext) 

    
  }


 
    
  return (
    
    <div>
          <div>{Status}</div>
           <div className="board-row">
                    <BoardCell  value={square[0]} onSquareClick={() => {handleClick(0)}} />
                    <BoardCell  value={square[1]} onSquareClick={() => {handleClick(1)}} />
                    <BoardCell  value={square[2]} onSquareClick={() => {handleClick(2)}} />
           </div>
                    
           <div className="board-row">      
                    <BoardCell  value={square[3]} onSquareClick={() => {handleClick(3)}} />
                    <BoardCell  value={square[4]} onSquareClick={() => {handleClick(4)}} />
                    <BoardCell  value={square[5]} onSquareClick={() => {handleClick(5)}} />
           </div>
           <div className="board-row">
                    <BoardCell  value={square[6]} onSquareClick={() => {handleClick(6)}} />
                    <BoardCell  value={square[7]} onSquareClick={() => {handleClick(7)}} />
                    <BoardCell  value={square[8]} onSquareClick={() => {handleClick(8)}} />
           </div>
        
    </div>
  )
}

export default Board
