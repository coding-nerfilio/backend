import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { detectEnviroment } from "./src/utils/detectEnviroment";
import websockets from "./src/websockets";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
	res.send("ttt battle royale");
});

const server = app.listen(port, () => {
	console.log(`STARTING ${detectEnviroment.isProduction() ? "PRODUCTION" : "DEVELOPMENT"} ENVIRONMENT`);
});

websockets(server);
