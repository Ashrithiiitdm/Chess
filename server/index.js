import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import GameManager from "./controllers/gameManager.js";
dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: "*",
	})
);

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

const gameManager = new GameManager();

io.on("connection", (socket) => {
	console.log("User connected :", socket.id);

	gameManager.addUser(socket);

	socket.on("disconnect", () => {
		gameManager.removeUser(socket);
		console.log("User disconnected :", socket.id);
	});
});

server.listen(port, () => {
	console.log("Server is listening at port :", port);
});
