const path = require('path');
const KoaStatic = require('koa-static');
const { Mongo, Server } = require('boardgame.io/server');
const GoGame = require('./GoGame').GoGame;
require('dotenv').config();


const server = Server({
  games: [GoGame],
  db: new Mongo({
    dbname: 'gogame',
    url: 'mongodb://' + process.env.REACT_APP_DB_URL,
  }),
});


const buildPath = path.join(__dirname, '../build');
server.app.use(KoaStatic(buildPath));
server.run(8000);
