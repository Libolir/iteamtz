import React, { useState } from "react";
import { connect } from "react-redux";
import './Board.css'
import X from '../../x.png'
import O from '../../o.png'
import { calculateWinner } from "../../calculateWinner";
import {ScorePlayer1, ScorePlayer2} from '../../redusers/reduser'

const Painter = (props) => {
    if (props.board === 'x') return <img src={X} />
    else if (props.board === 'o') return <img Src={O} />
    else {return <div>{props.board}</div>}
}


const Board = (props) => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [isWinner, setIsWinner] = useState(false)
    const [winPlayer1, setWinPlayer1] = useState(1)
    const [winPlayer2, setWinPlayer2] = useState(1)
    const [stepNumber, setstepNumber] = useState(0)
    const [Draw, setDraw] = useState(false)
    const winner = calculateWinner(board)

    const handeClick = (index) =>  {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return
        boardCopy[index] = xIsNext ? 'x' : 'o'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
        setIsWinner(!isWinner)
        setstepNumber(stepNumber + 1)
        if (stepNumber === 8) setDraw(!Draw)
    }

    return ( 
        <div>
            <div className='board'>
                {
                    board.map((board, i) => (
                        <div className='square' key={i}>
                            <div className='content' onClick={() => handeClick(i)}>
                                <Painter board={board} />
                            </div>
                        </div>
                    ))
                }
                {
                    winner && <div className='modal'>{isWinner
                        ? <div className='modalcontent'>
                            <div>Winner: {props.Player}</div>
                            <button onClick={() => {
                                setBoard(Array(9).fill(null))
                                setstepNumber(0)
                                setWinPlayer1(winPlayer1 + 1)
                                props.ScorePlayer1(winPlayer1)
                            }}>
                                Clear Board
                            </button> 
                        </div>
                        : <div className='modalcontent'>
                            <div>Winner: {props.Player2}</div>
                            <button onClick={() => {
                                setBoard(Array(9).fill(null))
                                setstepNumber(0)
                                setWinPlayer2(winPlayer2 + 1)
                                props.ScorePlayer2(winPlayer2)
                            }}>
                                Clear Board
                            </button> 
                        </div>}
                    </div>
                }
                {
                    Draw && <div className='modal'>
                        <div className='modalcontent'>
                            <div>Draw</div>
                            <button onClick={() => {
                                setBoard(Array(9).fill(null))
                                setstepNumber(0)
                                setDraw(!Draw)
                            }}>
                                Clear Board
                            </button> 
                        </div>
                    </div>
                }
            </div>
        </div>
    );

}

let mapStateToProps = (state) => ({
    Player: state.Player1,
    Player2: state.Player2,
})

export default connect(mapStateToProps, {ScorePlayer1, ScorePlayer2})(Board);