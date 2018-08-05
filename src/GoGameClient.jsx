import { Client } from 'boardgame.io/react';
import Board from './Board.jsx';

import { GoGame } from './GoGame.js';

const GoGameClient = Client({
  board: Board,
  game: GoGame,
  multiplayer: false,
  debug: true,
});

export default GoGameClient;
