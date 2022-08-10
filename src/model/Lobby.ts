import Player from "./Player";

interface ILobby {
	players: { [key: string]: Player };
	gamemaster: string;
	state: State;
}

enum State {
	LOBBY,
	INGAME,
}

class Lobby implements ILobby {
	players: { [key: string]: Player };
	gamemaster: string;
	state: State;

	constructor(gamemaster: Player) {
		this.players = { [gamemaster.name]: gamemaster };
		this.gamemaster = gamemaster.name;
		this.state = State.LOBBY;
		return this;
	}

	/**
	 * @throws E-001 - Player already exists
	 * @throws E-002 - Max capacity reached
	 */
	addPlayer(playerName: string): Lobby {
		if (this.players[playerName] === undefined) {
			if (Object.entries(this.players).length === 16) {
				throw new Error("E-002 - Max capacity reached");
			} else {
				this.players[playerName] = new Player(playerName);
			}
		} else {
			throw new Error("E-001 - Player already exists");
		}
		return this;
	}
}

export default Lobby;
