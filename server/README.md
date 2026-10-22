Starter players are claimed from the Team page with **Claim free players**.
The authenticated endpoint `POST /api/users/starter-pack/claim` grants five random
Common players, one per position, and puts them in the starting lineup. It only
accepts an account with no players that has never claimed before. The server
selects the players and records `User.hasClaimedStarterPack` in the same database
transaction as the ownership records. A row lock prevents simultaneous claims.
Removing players from the lineup does not restore eligibility.

Before starting the updated server against an existing database, run:

```sh
cd server
npm run migrate:starter-pack
```

This adds the claim flag without dropping data and marks existing teams with
players as already claimed. Empty accounts remain eligible. The migration can be
rerun without resetting claims. Fresh databases get the flag through normal model
sync. The player catalog must contain a Common player for every position; run
`npm run seed:players` to load the supplied catalog if needed.

The old direct player grant endpoint now requires an authenticated admin.
Paid packs remain available after the starter gift.

Completed battles use the authenticated endpoint `POST /api/users/matches/result`
with `{ "isWinner": true, "level": 1 }`. It increments wins or losses and updates
coins together in a transaction, using the existing database totals and the
league's reward schedule. The response refreshes those totals in the client;
win rate is calculated from wins divided by total games. This uses existing
columns and does not require another migration.

Run `npm test` for the starter claim and match result tests. These use an in-memory
database double; they do not exercise MySQL itself.
