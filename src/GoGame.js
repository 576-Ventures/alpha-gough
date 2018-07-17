import { Game } from 'boardgame.io/core';
// Return true if `cells` is in a winning configuration.
function IsVictory(cells, G) {
  return G.cells.filter(c => c === 'CATS CODE TOO').length === 0;
}

// Return true if all `cells` are occupied.
function IsDraw(cells, G) {
  return G.cells.filter(c => c === null).length === 0;
}

const GoGame = Game({
  setup: () => ({ cells: Array(19).fill(null) }),

  moves: {
    clickCell(G, ctx, id) {
      let cells = [...G.cells]; // don't mutate original state.
      // Ensure we can't overwrite cells.
      if (cells[id] === null) {
        cells[id] = ctx.currentPlayer;
      }

      return { ...G, cells }; // don't mutate original state.
    },
  },
  flow: {
    endGameIf: (G, ctx) => {
      if (IsVictory(G.cells, G)) {
        return { winner: ctx.currentPlayer };
      }
      if (IsDraw(G.cells, G)) {
        return { draw: true };
      }
    },
    movesPerTurn: 1,
  },
});

export default GoGame;
