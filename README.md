# testing-petezahs

An educational, locally hosted game portal inspired by PeteZah Games. This repository is an independent project and is not affiliated with PeteZah-Games.

## Requirements

- Node.js 22 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL printed in your terminal (normally http://localhost:5173). The development server also starts the local Express API on port 3001.

For a production-style local run:

```bash
npm run build
npm start
```

Then open http://localhost:3001.

## Project layout

- `src/` — website interface and game catalog
- `backend/` — local Express API and production static hosting
- `public/games/` — place locally hosted game folders here
- `public/assets/` — icons and images

## Proxy research

This project keeps proxy experimentation separate from the public game portal. Only use controlled test destinations that you own or have explicit permission to test. Do not use it to evade school, workplace, or network access controls. The initial scaffold does not provide an open proxy endpoint.

## Upstream projects studied

This project references ideas and technologies from the following independent upstream repositories. Their code and assets are not automatically copied into this repository; check each project's license and attribution requirements before importing any files.

- https://github.com/PeteZah-Games/PeteZahGames
- https://github.com/PeteZah-Games/svg
- https://github.com/PeteZah-Games/Games-lib
- https://github.com/PeteZah-Games/scramjet
- https://github.com/PeteZah-Games/Ultraviolet

## License

Project-specific licensing and third-party notices will be added as components are imported. Do not assume upstream repositories share the same license.
