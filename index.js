import express from "express";
import http from "http";
import "dotenv/config";
import config from "./config/config.js";
import { Server } from "socket.io";
import socketIO from "./src/controllers/socketIO.js";

const PORT = process.env.PORT || 80;

const app = express();
config(app, express);
const server = http.createServer(app);
const socket_io = new Server(server);

socketIO(socket_io);

server.listen(PORT, () =>
  console.log(`Server running on http://127.0.0.1:${PORT}`)
);
