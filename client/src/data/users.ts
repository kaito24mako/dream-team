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
  email: string;
  password: string;
  isAdmin: boolean;
  teamName: string;
  currency: number;
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
    email: "kaitowatanabemcc@gmail.com",
    password: "Ka1tomccau!",
    isAdmin: true,
    teamName: "Kanazawa Demons",
    currency: 650,
    lineup: {
      PG: 2,
      SG: 1,
      SF: 5,
      PF: 3,
      C: 4,
    },
    wins: 15,
    losses: 3,
    totalCards: 24,
  },
  {
    id: 2,
    fullName: "Bey Mel",
    username: "beymel",
    email: "beymel@gmail.com",
    password: "Ka1tomccau!",
    isAdmin: false,
    teamName: "Cebu Cats",
    currency: 400,
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
