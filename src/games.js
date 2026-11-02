export const games = [
  {
    id: "2048",
    title: "2048",
    category: "Puzzle",
    description: "Combine matching tiles and reach the target number.",
    route: "/games/2048/",
    accent: "#d9a441",
    featured: true
  },
  {
    id: "coming-soon",
    title: "Your next game",
    category: "Coming soon",
    description: "Add your own game folder under public/games and register it here.",
    route: "",
    accent: "#8b7cf6",
    featured: false,
    disabled: true
  }
];

export const categories = ["All", ...new Set(games.map((game) => game.category))];
