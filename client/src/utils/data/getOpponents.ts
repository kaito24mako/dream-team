import { opponents } from "../../data/opponents";

//* get the opponent that the user selected in the LeaguePage, based on the params
export function getSelectedOpponent(level) {
  const selectedOpponent = opponents.find(
    (opponent) => opponent.level === level,
  );

  return selectedOpponent;
}

//* get a random offensive and defensive rating for the opponent's players
export function getRandomRating(opponent) {
  const randomRating = Number(
    Math.floor(Math.random() * (opponent.maxRating - opponent.minRating + 1)) +
      opponent.minRating,
  );
  return randomRating;
}
