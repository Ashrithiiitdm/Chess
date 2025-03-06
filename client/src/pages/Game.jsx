import React, { useEffect, useState } from "react";
import Chessboard from "../components/Chessboard.jsx";
import Button from "../components/Button.jsx";
import { useSocket } from "../hooks/useSocket.js";
import { Chess } from "chess.js";

export default function Game() {
	//

	const socket = useSocket();
	const [chess, setChess] = useState(new Chess());
	const [board, setBoard] = useState(chess.board());

	useEffect(() => {
		if (!socket) {
			return;
		}

		const handleMessage = (message) => {
			console.log("Received message", message);
			message = JSON.parse(message);

			switch (message.type) {
				case "create_game":
					setBoard(chess.board());
					console.log("Game created");
					break;

				case "move":
					const move = message.payload;
					chess.move(move);
					setBoard(chess.board());
					console.log("Move made");
					break;

				case "game_over":
					console.log("Game over");
					break;

				default:
					console.log("Unknown message type");
					break;
			}
		};

		socket.on("message", handleMessage);

		return () => {
			socket.off("message", handleMessage);
		};
	}, [socket]);

	if (!socket) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex justify-center">
			<div className="pt-8 max-w-screen-lg w-full">
				<div className="grid grid-cols-6 gap-4 w-full">
					<div className="col-span-4 w-full flex justify-center">
						<Chessboard
							setBoard={setBoard}
							chess={chess}
							socket={socket}
							board={board}
						/>
					</div>
					<div className="col-span-2 bg-green-200 w-full flex justify-center">
						<div className="pt-8">
							<Button
								onClick={() =>
									socket.send(JSON.stringify({ type: "create_game" }))
								}
							>
								Play Online
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
