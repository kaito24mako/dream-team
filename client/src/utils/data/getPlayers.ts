import { players } from "../../data/players";

//* get all legendary players
export const legendaryPlayers = players.filter(
  (player) => player.rarity === "Legendary",
);

//* get four superstar or legendary players at random
export const featuredPlayersRandom = players
  .filter(
    (player) => player.rarity === "Legendary" || player.rarity === "Superstar",
  )
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);

//* get a player by name
export function getPlayerByName(name) {
  return players.find((player) => player.fullName === name);
}

//* sort players by rarity
export function sortPlayersByRarity(players) {
  const rarityOrder = {
    Common: 1,
    Rare: 2,
    Superstar: 3,
    Legendary: 4,
  };

  const sortedPlayers = [...players].sort(
    (a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity],
  );

  return sortedPlayers;
}
