import * as React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function Square(props){
    return (
        <button 
            className="square" 
            onClick={props.onClick}
            style={props.isHigh ? {backgroundColor: 'lavender'} : {}}
        >
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i, isHigh) {
        return (
            <Square 
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
                isHigh={isHigh}
            />
        );
    }

    render() {
        const winLine = this.props.winArr == null ? [] : this.props.winArr;

        return (
            <div>{[...Array(3)].map((x,i) => 
                <div className="board-row">
                    {[...Array(3)].map((x,j) => 
                            this.renderSquare(j + i * 3, winLine.includes(j + i * 3)))}
                </div>)
                }
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
                location: null,
            }],
            stepNumber: 0,
            xIsNext: true,
            isAsc: true,
        };
    };

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                col: i % 3,
                row: Math.floor(i / 3),
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        })
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }


    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winArr = calculateWinner(current.squares);
        var moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move + ' at (' + step.col + ', ' + step.row + ')':
                'Go to game start';
            return (
                <ListGroup.Item active={move === this.state.stepNumber}><Button onClick={() => this.jumpTo(move)}>{desc}</Button></ListGroup.Item>
            )
        })
        if(!this.state.isAsc){
            moves.reverse();
        }
        let status
        if(winArr){
            status = 'Winner: ' + current.squares[winArr[0]];
        } else {
            status = this.state.stepNumber === 9 ? 'Draw!' : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <div>{status}</div>
                    <Board squares={current.squares} winArr={winArr} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className='game-info'>
                    <Button onClick={() => this.setState({isAsc: !this.state.isAsc,})}>Toggle</Button>
                    <ListGroup variant="flush">{moves}</ListGroup>
                </div>
            </div>
        );
    }
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
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return lines[i];
      }
    }
    return null;
  }

  
export default Game;