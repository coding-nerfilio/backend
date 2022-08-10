import admin from "firebase-admin";
import DB from "..";
jest.useFakeTimers();

beforeAll(() => {
	admin.initializeApp({
		credential: admin.credential.cert(require("../../../admin-key.json")),
		databaseURL: "https://tic-tac-toe-btt-royale-default-rtdb.firebaseio.com/",
	});
});

describe("DB - LOBBY", () => {
	it("should create a new lobby", async () => {
		const response = await DB.Lobby.createNewLobby("TESTUSER");
		expect(response.lobby.gamemaster).toBe("TESTUSER");
	});
});
