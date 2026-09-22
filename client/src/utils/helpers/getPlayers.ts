import { players } from "../../data/players";

//* get all filtered players
// usage: CollectionSection.tsx, GallerySection.tsx
export function getFilteredPlayers(
  players,
  rarityState,
  positionState,
  ratingState,
) {
  const filteredPlayers = [...players]
    // filter by rarity
    .filter((player) => !rarityState || player.rarity === rarityState)
    // filter by position
    .filter((player) => !positionState || player.position === positionState)
    // sort by rating
    .sort((a, b) => {
      if (ratingState === "Highest") return b.overallRating - a.overallRating;
      if (ratingState === "Lowest") return a.overallRating - b.overallRating;
      return 0;
    });

  return filteredPlayers;
}

//* sort players by rating
export function handleSortByRating(rating, setState) {
  setState(rating === "All" ? "" : rating);
}

//* filter players by position
export function handleFilterByPosition(position, setState) {
  setState(position === "All" ? "" : position);
}

//* filter players by rarity
export function handleFilterByRarity(rarity, setState) {
  setState(rarity === "All" ? "" : rarity);
}

//* get a player by name
// usage: ScrollableSection.tsx
export function getPlayerByName(name) {
  return players.find((player) => player.fullName === name);
}

//* get filtered and searched players
export function getSearchedPlayers(filteredPlayers, searchQuery) {
  return filteredPlayers.filter((player) =>
    player.fullName.toLowerCase().includes(searchQuery.toLowerCase().trim()),
  );
}
