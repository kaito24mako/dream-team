import { opponents } from "../../data/opponents";

// get the opponent that the user selected in the LeaguePage, based on the params
export function getSelectedOpponent(level) {
  const selectedOpponent = opponents.find(
    (opponent) => opponent.level === level,
  );

  return selectedOpponent;
}
