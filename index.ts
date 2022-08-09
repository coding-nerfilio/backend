import express, { Express } from "express";
import dotenv from "dotenv";
import { detectEnviroment } from "./src/utils/detectEnviroment";
import websockets from "./src/websockets";
import admin from "firebase-admin";
import DB from "./src/db";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
admin.initializeApp({
	credential: admin.credential.cert(require("./admin-key.json")),
	databaseURL: "https://tic-tac-toe-btt-royale-default-rtdb.firebaseio.com/",
});
DB.createNewLobby();
const server = app.listen(port, () => {
	console.log(`STARTING ${detectEnviroment.isProduction() ? "PRODUCTION" : "DEVELOPMENT"} ENVIRONMENT`);
});

websockets(server);
