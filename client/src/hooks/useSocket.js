import { useState, useEffect } from "react";


export const useSocket = () => {
	const [socket, setSocket] = useState(null);

	useEffect(() => {
        const newSocket = io()
    }, []);
};
