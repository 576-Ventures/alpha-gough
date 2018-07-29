import { Game } from 'boardgame.io/core'
import WGo from 'wgo'

// Return true if `cells` is in a winning configuration.
function IsVictory(cells, G) {
  return G.cells.filter(c => c === 'CATS CODE TOO').length === 0
}

// Return true if all `cells` are occupied.
function IsDraw(cells, G) {
  return G.cells.filter(c => c === null).length === 0
}
const BOARD_SIZE = 19
const game = new WGo.Game(BOARD_SIZE, 'KO')

const generateCells = _ => {
  let board = Array(BOARD_SIZE + 1).fill(null)
  return board.map(row => {
    return Array(BOARD_SIZE + 1).fill(0)
  })
}

export const GoGame = Game({
  name: 'go-game',
  setup: () => ({ cells: generateCells() }),

  moves: {
    clickCell(G, ctx, x, y, color) {
      const player = color === 2 ? WGo.W : WGo.B
      const isValid = game.isValid(x, y, player)
      let cells = [...G.cells]

      if (cells[y][x] === 0) {
        cells[y][x] = color
      }

      const move = game.play(x, y, player)
      const captureW = game.getCaptureCount(WGo.W)
      const captureB = game.getCaptureCount(WGo.B)

      return { ...G, cells }
    },
  },
  flow: {
    movesPerTurn: 1,
  },
})

export default GoGame
