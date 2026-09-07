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

//* get an array of the full player objects from the user's lineup
//? this is how it should be on the database? this is preferrable
export const userLineup = [lineupPG, lineupSG, lineupSF, lineupPF, lineupC];

//* get the lineup's statistical averages
export function getLineupAverages(lineup) {
  const lineupLength = lineup.length;

  const offensiveAverage = lineupLength
    ? Math.round(
        lineup.reduce((total, player) => total + player.offensiveRating, 0) /
          lineup.length,
      )
    : 0;

  const defensiveAverage = lineupLength
    ? Math.round(
        lineup.reduce((total, player) => total + player.defensiveRating, 0) /
          lineupLength,
      )
    : 0;

  return { offensiveAverage, defensiveAverage };
}
