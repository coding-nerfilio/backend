import { database } from "firebase-admin";

const DB = {
	createNewLobby: async () => {
		database()
			.ref("/")
			.push("test")
			.get()
			.then((d) => console.log(d.key));
	},
};

export default DB;
