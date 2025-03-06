import React, { useState } from "react";

export default function Chessboard({ chess, setBoard, socket, board }) {
	console.log(board);

	const [from, setFrom] = useState(null);
	const [to, setTo] = useState(null);

	return (
		<div>
			{board.map((row, i) => {
				return (
					<div key={i} className="flex">
						{row.map((square, j) => {
							const squareRep =
								String.fromCharCode(97 + (j % 8)) + "" + (8 - i);

							return (
								<div
									key={j}
									onClick={() => {
										if (!from) {
											setFrom(squareRep);
										} else {
											socket.send(
												JSON.stringify({
													type: "move",
													payload: {
														move: {
															from,
															to: squareRep,
														},
													},
												})
											);
											setFrom(null);
											chess.move({
												from,
												to: squareRep,
											});
											setBoard(chess.board());

											console.log("Move", from, squareRep);
										}
									}}
									className={`w-16 h-16 ${
										(i + j) % 2 ? "bg-green-500" : "bg-white"
									}`}
								>
									<div className="w-full justify-center flex h-full">
										<div className="h-full justify-center flex flex-col">
											{square ? square.type : ""}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
