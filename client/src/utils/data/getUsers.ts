//! NOT NEEDED WITH API

import { users } from "../../data/users";
import { currentUserId } from "../../data/session";

//* get json object of current session's user
export const currentUser = users.find((user) => user.id === currentUserId);
