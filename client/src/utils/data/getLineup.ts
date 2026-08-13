import { currentUser } from "./getUsers";
import { players } from "../../data/players";

// get the user's lineup
const lineup = currentUser.lineup;

// get the player of a certain position from the user's lineup
export const lineupPG = players.find((player) => player.id === lineup.PG);
export const lineupSG = players.find((player) => player.id === lineup.SG);
export const lineupSF = players.find((player) => player.id === lineup.SF);
export const lineupPF = players.find((player) => player.id === lineup.PF);
export const lineupC = players.find((player) => player.id === lineup.C);

console.log(lineup, "user's lineup");
console.log(lineupPG, "the specific player from the user's lineup");
