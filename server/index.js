import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
	cors: {
		origin: "*", // Allow all origins for debugging
		methods: ["GET", "POST", "PUT", "DELETE"],
	},
});

console.log("🚀 Server started, waiting for connections...");

io.on("connection", (socket) => {
	console.log("✅ New user connected:", socket.id);

	socket.on("disconnect", () => {
		console.log("❌ User disconnected:", socket.id);
	});

	socket.on("message", (data) => {
		console.log("Received message:", data, "from", socket.id);
	});
});

httpServer.listen(8080, () => {
	console.log("✅ Server listening on port 8080");
});
