const express = require('express');
const cors = require('cors');
const dbConnection  = require('../database/config');
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      user: "/api/users",
      auth: "/api/auth",
    };

    this.connectDB();

    this.middlewares();
    this.routes();
  }
  async connectDB(){
    await dbConnection();
  }
  routes() {
    this.app.use(this.paths.auth, require('../routes/auth'));
    this.app.use(this.paths.user, require('../routes/user'));
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log('Server escuchando...');
    });
  }
}

module.exports = Server;
