import { Game } from 'boardgame.io/core'
import WGo from 'wgo'

const BOARD_SIZE = 19
const game = new WGo.Game(BOARD_SIZE, 'KO')

const generateCells = _ =>
  Array(BOARD_SIZE)
    .fill(null)
    .map(row => Array(BOARD_SIZE).fill(0))

export const GoGame = Game({
  name: 'go-game',
  setup: () => ({ cells: generateCells(), boardSize: 19, player: 1 }),

  moves: {
    clickCell(G, ctx, x, y) {
      const { player } = G
      const color = player === 1 ? WGo.B : WGo.W
      const nextPlayer = player === 1 ? 2 : 1
      let cells = [...G.cells]

      if (cells[y][x] === 0) {
        cells[y][x] = player
      }

      const move = game.play(x, y, color)
      if (Array.isArray(move)) {
        for (let coords of move) {
          cells[coords.y][coords.x] = 0
        }
      }

      const capturedW = game.getCaptureCount(WGo.W)
      const capturedB = game.getCaptureCount(WGo.B)

      return { ...G, cells, capturedW, capturedB, player: nextPlayer }
    },
  },
  flow: {
    movesPerTurn: 1,
  },
})

export default GoGame
