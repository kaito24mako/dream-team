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

Run `npm test` for the starter claim service and route tests. These use an
in-memory database double; they do not exercise MySQL itself.
