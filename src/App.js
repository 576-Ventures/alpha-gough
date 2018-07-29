import React from 'react'
import { AI } from 'boardgame.io/ai'
import { Client } from 'boardgame.io/react'
import Board from './Board.jsx'

import { GoGame } from './GoGame.js'

const GoGameClient = Client({
  board: Board,
  game: GoGame,
  multiplayer: false,
  debug: true,
})

const App = () => (
  <div>
    <GoGameClient />
  </div>
)

export default App
