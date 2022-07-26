const express = require("express");
const cors = require("cors");
const dbConnection = require("../database/config");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      user: "/api/users",
      auth: "/api/auth",
      level: "/api/level",
      comment: "/api/comment",
    };

    this.connectDB();

    this.middlewares();
    this.routes();
  }
  async connectDB() {
    await dbConnection();
  }
  routes() {
    this.app.use(this.paths.auth, require("../routes/auth"));
    this.app.use(this.paths.user, require("../routes/user"));
    this.app.use(this.paths.level, require("../routes/level"));
    this.app.use(this.paths.comment, require("../routes/comment"));
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Server escuchando...");
    });
  }
}

module.exports = Server;
