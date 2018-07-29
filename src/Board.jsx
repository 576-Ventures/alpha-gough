import React from 'react'
import uniqueId from 'lodash.uniqueid'
import Piece from './Piece'
import './Board.css'

class Board extends React.Component {
  state = {
    current: 1,
    boardSize: 19,
  }

  buildBoard = _ => {
    const { ctx, G } = this.props
    const { boardSize } = this.state
    let board = []
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        board = [...board, <div className="cell" key={`grid__row${j}-col${i}}`} />]
      }
    }
    return board
  }

  buildButtons = _ => {
    const { ctx, G } = this.props
    let board = []
    for (let i = 0; i < G.cells.length; i++) {
      for (let j = 0; j < G.cells[i].length; j++) {
        board = [
          ...board,
          <Piece x={j} y={i} key={`row${j}-col${i}}`} handleClick={this.handleClick} current={this.state.current} />,
        ]
      }
    }
    return board
  }

  handleClick = (x, y) => {
    const { current } = this.state
    const { moves, events } = this.props

    if (current === 2) {
      this.setState({ current: 1 })
    }

    if (current === 1) {
      this.setState({ current: 2 })
    }
    moves.clickCell(x, y, current)
    events.endTurn()
  }

  render() {
    return (
      <div>
        <div className="container board">{this.buildBoard()}</div>
        <div className="container buttons">{this.buildButtons()}</div>
      </div>
    )
  }
}

export default Board
