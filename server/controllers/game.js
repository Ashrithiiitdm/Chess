import { Chess } from "chess.js";

export default class Game {
	constructor(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
		this.board = new Chess();
		this.moves = [];
		this.startTime = new Date();

		this.player1.send(
			JSON.stringify({
				type: "create_game",
				payload: {
					color: "white",
				},
			})
		);

		this.player2.send(
			JSON.stringify({
				type: "create_game",
				payload: {
					color: "black",
				},
			})
		);
	}

	makeMove(socket, move) {
		// Validation..
		// Is it user's move
		// Is the move valid

		const currentTurn = this.board.turn();
		if (currentTurn === "w" && socket !== this.player1) {
			console.log("Invalid move");
			return;
		}

		if (currentTurn === "b" && socket !== this.player2) {
			console.log("Invalid move2");
			return;
		}

		// Move : from , to
		try {
			this.board.move(move);
		} catch (err) {
			console.log(err);
			return;
		}

		if (this.board.isGameOver()) {
			console.log("Game over");
			this.player1.send(
				JSON.stringify({
					type: "game_over",
					payload: {
						winner: this.board.turn() === "w" ? "black" : "white",
					},
				})
			);

			this.player2.send(
				JSON.stringify({
					type: "game_over",
					payload: {
						winner: this.board.turn() === "w" ? "black" : "white",
					},
				})
			);

			return;
		}

		if (socket === this.player1) {
			console.log("Sent to player 2");
			this.player2.send(
				JSON.stringify({
					type: "move",
					payload: move,
				})
			);
		} else {
			console.log("Sent to player 1");
			this.player1.send(
				JSON.stringify({
					type: "move",
					payload: move,
				})
			);
		}

		// Update the board..
		// Push the move to moves array..

		// Check if the game is over

		// Send the updated board to both players
	}
}
