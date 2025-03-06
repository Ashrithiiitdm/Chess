import React from "react";
import Chessboard from "../components/Chessboard.jsx";
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";

export default function Game() {
	const navigate = useNavigate();
	return (
		<div className="flex justify-center">
			<div className="pt-8 max-w-screen-lg w-full">
				<div className="grid grid-cols-6 gap-4 w-full">
					<div className="col-span-4 w-full bg-red-200">
						<Chessboard />
					</div>
					<div className="col-span-2 bg-green-200 w-full">
						<Button onClick={() => navigate("/game")}>Play Online</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
