import React from "react";
import board from "../assets/board.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function Landing() {
	const navigate = useNavigate();

	return (
		<div className="flex justify-center">
			<div className="pt-8 max-w-screen-lg">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="flex justify-center">
						<img src={board} className="max-w-96" />
					</div>
					<div className="pt-20">
						<div className="flex justify-center">
							<h1 className="text-4xl font-bold text-white">
								Welcome to Chess
							</h1>
						</div>

						<div className="mt-8 flex justify-center">
							<Button onClick={() => navigate("/game")}>Play Now</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
