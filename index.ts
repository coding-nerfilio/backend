import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { detectEnviroment } from "./src/utils/detectEnviroment";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
	res.send("ttt battle royale");
});

app.listen(port, () => {
	console.log(`STARTING ${detectEnviroment.isProduction() ? "PRODUCTION" : "DEVELOPMENT"} ENVIRONMENT`);
});
