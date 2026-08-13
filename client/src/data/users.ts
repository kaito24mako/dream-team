type Lineup = {
  PG: number;
  SG: number;
  SF: number;
  PF: number;
  C: number;
};

export type User = {
  id: number;
  fullName: string;
  username: string;
  password: string;
  teamName: string;
  coins: number;
  lineup: Lineup;
  wins: number;
  losses: number;
  totalCards: number;
};

export const users: User[] = [
  {
    id: 1,
    fullName: "Kaito Watanabe",
    username: "kaito24mako",
    password: "Ka1tomccau!",
    teamName: "Kanazawa Demons",
    coins: 650,
    lineup: {
      PG: 10,
      SG: 12,
      SF: 8,
      PF: 2,
      C: 20,
    },
    wins: 12,
    losses: 3,
    totalCards: 34,
  },
  {
    id: 2,
    fullName: "Bey Mel",
    username: "beymel",
    password: "Ka1tomccau!",
    teamName: "Cebu Cats",
    coins: 400,
    lineup: {
      PG: 10,
      SG: 12,
      SF: 8,
      PF: 2,
      C: 20,
    },
    wins: 12,
    losses: 3,
    totalCards: 34,
  },
];
