import express, { Application } from "express";
import clientRouter from "../routes/clients";

class Server {
  private app: Application;
  private port: string;
  private apiPath = {
    clients: "/entities/filter",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    this.routes();
  }

  routes() {
    this.app.use(this.apiPath.clients, clientRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on port: " + this.port);
    });
  }
}

export default Server;
