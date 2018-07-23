const path = require('path');
const KoaStatic = require('koa-static');
const { Mongo, Server } = require('boardgame.io/server');
const GoGame = require('./GoGame').GoGame;

const server = Server({
  games: [GoGame],
  db: new Mongo({
    dbname: 'gogame',
    url: 'mongodb://576ventures:goughdrop576@ds243491.mlab.com:43491/gogame',
  }),
});


const buildPath = path.join(__dirname, '../build');
server.app.use(KoaStatic(buildPath));
server.run(8000);
