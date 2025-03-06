import { useState, useEffect } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing.jsx";
import Game from "./pages/Game.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
	return (
		<div className="h-screen bg-slate-800">
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/game" element={<Game />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	);
}
