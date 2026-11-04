import { currentUser } from "./getUsers";
import { players } from "../../data/players";

// PURPOSE: scripts related to the user's lineup, such as displaying the logged in user's lineup, getting their statistical averages, and getting players from each position

//* get the lineup's statistical averages
// usage: StatisticsSection.tsx
export function getLineupAverages(lineup) {
  // number of players in the lineup to determine statistical averages
  const lineupLength = lineup.length;

  // accumulate every lineup player's offensive rating, divided by the number of players in the lineup
  // to determine the offensive average of the user's lineup
  const offensiveAverage = lineupLength
    ? Math.round(
        lineup.reduce((total, player) => total + player.offensiveRating, 0) /
          lineup.length,
      )
    : 0;

  // same as above, but for defensive averages
  const defensiveAverage = lineupLength
    ? Math.round(
        lineup.reduce((total, player) => total + player.defensiveRating, 0) /
          lineupLength,
      )
    : 0;

  return { offensiveAverage, defensiveAverage };
}

//* get the user's lineup
export const lineup = currentUser.lineup;

//* get the player of a certain position from the user's lineup
export const lineupPG = players.find((player) => player.id === lineup.PG);
export const lineupSG = players.find((player) => player.id === lineup.SG);
export const lineupSF = players.find((player) => player.id === lineup.SF);
export const lineupPF = players.find((player) => player.id === lineup.PF);
export const lineupC = players.find((player) => player.id === lineup.C);

//* get an array of the full player objects from the user's lineup
export const userLineup = [lineupPG, lineupSG, lineupSF, lineupPF, lineupC];
