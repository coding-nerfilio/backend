import WebSocket from "ws";
import queryString from "query-string";
import { Server } from "http";

export default (expressServer: Server) => {
	const websocketServer = new WebSocket.Server({ noServer: true, path: "/ws" });
	expressServer.on("upgrade", (request: any, socket: any, head: any) => {
		websocketServer.handleUpgrade(request, socket, head, (websocket) => {
			websocketServer.emit("connection", websocket, request);
		});
	});
	websocketServer.on("connection", function connection(websocketConnection, connectionRequest) {
		const [_path, params]: any = connectionRequest?.url?.split("?");
		const connectionParams = queryString.parse(params);

		websocketConnection.on("message", (message: string) => {
			const parsedMessage = JSON.parse(message);
			console.log(parsedMessage);
			websocketConnection.send(JSON.stringify({ message: "TEST" }));
		});
	});
	return websocketServer;
};
