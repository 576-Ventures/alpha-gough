import { AI } from 'boardgame.io/ai';
import { Client } from 'boardgame.io/react';
import Board from './Board.jsx';

import { GoGame } from './GoGame.js';

const GoGameClient = Client({
  ai: AI({
    enumerate: (G, ctx) => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: 'clickCell', args: [i] });
        }
      }
      return moves;
    },
  }),
  board: Board,
  game: GoGame,
  multiplayer: { server: 'localhost:8000' },
  debug: true,
});

export default GoGameClient;
