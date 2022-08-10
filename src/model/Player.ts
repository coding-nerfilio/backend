interface IPlayer {
	name: string;
	shape: Number;
}

class Player implements IPlayer {
	name: string;
	shape: Number;

	constructor(name: string) {
		this.name = name;
		this.shape = 0; //TODO
	}
}

export default Player;
