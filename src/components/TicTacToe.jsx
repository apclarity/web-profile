import { useState } from 'react'

function AddButton({ likes, onAdd }) {
    return (
        <button onClick={onAdd} disabled={likes >= 10}>
            {likes >= 10 ? "done" : "+"}
        </button>
    );
}

function MinusButton({ likes, onMinus }) {
    return (
        <button onClick={onMinus} disabled={likes === 0}>
            -
        </button>
    )
}

function ResetButton({ likes, onReset }) {
    return (
        <button onClick={onReset} disabled={likes === 0}>
            Reset!
        </button>
    );
}

function App({ xIsNext, squares, onPlay }) {
    // practice
    const students = ['joko', 'bejo', 'bjir']
    const [likes, setLikes] = useState(0)

    function handleAdd() {
        if (likes < 10) {
            setLikes(likes + 1)
        }
    }

    function handleMinus() {
        if (likes > 0) {
            setLikes(likes - 1)
        }
    }

    function handleReset() {
        setLikes(0)
    }

    // tic tac toe

    function handleClickSquare(i) {
        if (squares[i] || calculateWinner(squares)) return

        const nextSuqares = squares.slice()

        nextSuqares[i] = xIsNext ? 'X' : 'O'

        onPlay(nextSuqares)
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],

        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]

            if (squares[a] == squares[b] && squares[b] == squares[c]) {
                return squares[a]
            }
        }
        return null
    }

    const winner = calculateWinner(squares)
    let status = '';

    if (winner) {
        status = 'Winner is: ' + winner
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }

    return (
        <>
            <Header />
            <Header name="girl" />
            <ul>
                {
                    students.map((student) => (
                        <li key={student}>{student}</li>
                    ))
                }
            </ul>
            <div>
                <MinusButton likes={likes} onMinus={handleMinus} />
                <span>{likes >= 10 ? "done" : likes}</span>
                <AddButton likes={likes} onAdd={handleAdd} />
            </div>
            <div>
                <ResetButton likes={likes} onReset={handleReset} />
            </div>
            <div>
                <button>X</button>
            </div>
            <div>
                <span>{status}</span>
            </div>
            <div className='board margin-top'>
                <Square value={squares[0]} onSquareClick={() => handleClickSquare(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClickSquare(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClickSquare(2)} />
                <Square value={squares[3]} onSquareClick={() => handleClickSquare(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClickSquare(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClickSquare(5)} />
                <Square value={squares[6]} onSquareClick={() => handleClickSquare(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClickSquare(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClickSquare(8)} />
            </div>
        </>
    )
}

function Game() {
    const [xIsNext, setXisNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[currentMove]

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
        setXisNext(nextMove % 2 === 0)
    }

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
        setXisNext(!xIsNext)
    }

    const moves = history.map((squares, move) => {
        let description = ''
        if (move > 0) {
            description = 'Go to move #' + move
        } else {
            description = 'Go to game start'
        }

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })

    return (
        <div className='game'>
            <div className='game-board'>
                <App xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className='game-info'>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}
