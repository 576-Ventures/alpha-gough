import React from 'react'
import uniqueId from 'lodash.uniqueid'
import Piece from './Piece'
import './Board.css'

export default ({ G, ctx, moves, events }) => {
  const recordMove = (x, y) => {
    moves.clickCell(x, y)
    events.endTurn()
  }

  const buildGrid = _ => {
    let board = []
    const len = G.boardSize - 1
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        board = [...board, <div className="cell" key={`grid__row${j}-col${i}}`} />]
      }
    }
    return board
  }

  const buildButtons = _ => {
    let board = []
    const len = G.cells.length
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        const cellState = G.cells[i][j]
        board = [...board, <Piece x={j} y={i} key={`row${j}-col${i}}`} recordMove={recordMove} value={cellState} />]
      }
    }
    return board
  }

  return (
    <div>
      <div className="container board">{buildGrid()}</div>
      <div className="container buttons">{buildButtons()}</div>
    </div>
  )
}
