import express, { Express, response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { postgresql } from "./src/database/services/AsyncPostgresql";
import router from './src/routes/express';
import * as path from 'path';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from "./src/swagger.json";
import { AppError } from './src/shared/errors/AppError';
import routerSocket from "./src/routes/socket";
import { storage } from "./src/shared/storage/storage";
dotenv.config({ path: __dirname + '/.env' });

import { createServer } from "http";
import * as socket from "socket.io";

class Server {
  host: string;
  port: string;
  app: Express;

  constructor() {
    this.port = (process.env.PORT || '3000');
    this.host = (process.env.APP_HOSTNAME || "localhost");
    this.app = express();
  }

  public createServer(): void {

    const app: Express = express();
    const port = (process.env.APP_PORT || 3001);
    const host = (process.env.APP_HOSTNAME || "localhost");

    express.urlencoded({ extended: false });

    app.use(express.json());
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
      res.header("Access-Control-Allow-Headers", "Origin, X-PINGOTHER, Content-Type, Authorization");
      app.use(cors());
      next();
    });
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
    app.use(router);
    app.use((
      err: Error,
      request: express.Request,
      response: express.Response,
      next: express.NextFunction) => {

      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          error: true,
          message: err.message
        })
      }

      return response.status(500).json({
        error: true,
        message: `Internal server error - ${err.message}`
      })
    })
    storage.sync();
    router.use('/storage/', express.static(path.join(__dirname, 'src/data')));
    postgresql.syncPostgres();
    app.listen(port, () => {
      console.info(`\n\n⚡️[server]: Server is running at http://${host}:${port}`);
    });
    this.createSocket(app, 3003);
  }

  createSocket(app: Express, port: number) {
    const httpServer = createServer(app);
    const io = new socket.Server(httpServer, {
      cors: {
        origin: "*",
        methods: ["GET"]
      },
      pingInterval: 10000,
      pingTimeout: 5000,
      cookie: false
    });

    httpServer.listen(port);

    routerSocket(io);

  }
}

const server = new Server();
server.createServer();
