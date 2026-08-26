//! NOT NEEDED WITH API

import { users } from "../../data/users";
import { currentUserId } from "../../data/session";

//* get json object of current session's user
export const currentUser = users.find((user) => user.id === currentUserId);

//* get the user's statistics
export const teamRecord = currentUser.wins + "-" + currentUser.losses;

export const winRate =
  Math.round(
    (currentUser.wins / (currentUser.wins + currentUser.losses)) * 100,
  ) + "%";

export const collectionProgress = currentUser.totalCards + "/100";
