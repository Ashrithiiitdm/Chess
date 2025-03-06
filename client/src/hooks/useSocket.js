import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const backend_url = import.meta.env.VITE_BACKEND_URL;

export const useSocket = () => {
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		const newSocket = new io(backend_url);

		newSocket.on("connect", () => {
			console.log("Connected to socket server");
			setSocket(newSocket);
		});

		newSocket.on("disconnect", () => {
			console.log("Disconnected from socket server");
			setSocket(null);
		});
	}, []);


    return socket;
};
