import { currentUser } from "./getUsers";
import { players } from "../../data/players";

//* get the user's lineup
export const lineup = currentUser.lineup;

//* get the player of a certain position from the user's lineup
export const lineupPG = players.find((player) => player.id === lineup.PG);
export const lineupSG = players.find((player) => player.id === lineup.SG);
export const lineupSF = players.find((player) => player.id === lineup.SF);
export const lineupPF = players.find((player) => player.id === lineup.PF);
export const lineupC = players.find((player) => player.id === lineup.C);

//* get the lineup's statistical averages
export const offensiveAverage = Math.round(
  (lineupPG.offensiveRating +
    lineupSG.offensiveRating +
    lineupSF.offensiveRating +
    lineupPF.offensiveRating +
    lineupC.offensiveRating) /
    5,
);
export const defensiveAverage = Math.round(
  (lineupPG.defensiveRating +
    lineupSG.defensiveRating +
    lineupSF.defensiveRating +
    lineupPF.defensiveRating +
    lineupC.defensiveRating) /
    5,
);
