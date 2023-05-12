import { useState } from "react"

const BoardCell = ({value, onSquareClick}) => {

    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    )
}

export default BoardCell
