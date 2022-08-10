import { database } from "firebase-admin";
import LobbyM from "../model/Lobby";
import Player from "../model/Player";

const Lobby = {
	/**
	 * Returns a new lobby
	 */
	createNewLobby: (gamemasterName: string): Promise<{ id: string; lobby: LobbyM }> => {
		return new Promise((resolve, reject) => {
			database()
				.ref("/")
				.push(new LobbyM(new Player(gamemasterName)))
				.get()
				.then((d) => resolve({ id: d.key!, lobby: d.val() as LobbyM }))
				.catch((e) => reject(e));
		});
	},
};

export default Lobby;
