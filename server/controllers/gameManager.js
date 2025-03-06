import Game from "./game.js";

export default class GameManager {
	constructor() {
		this.games = [];
		this.pendingUser = null;
		this.users = [];
	}

	addUser(socket) {
		this.users.push(socket);
		this.addHandler(socket);
	}

	removeUser(socket) {
		this.users = this.users.filter((user) => user.id !== socket.id);
	}

	handleMessage() {}

	addHandler(socket) {
		socket.on("message", (data) => {
			const message = JSON.parse(data.toString());

			if (message.type === "create_game") {
				if (this.pendingUser) {
					const game = new Game(this.pendingUser, socket);
					this.games.push(game);
					this.pendingUser = null;
				} else {
					this.pendingUser = socket;
				}
			}

			if (message.type === "move") {
				const game = this.games.find(
					(game) =>
						game.player1.id === socket.id || game.player2.id === socket.id
				);

				if (game) {
					game.makeMove(socket, message.move);
				}
			}
		});
	}
}
