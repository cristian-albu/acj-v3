## Getting Started

First, run the development server:

```bash
yarn dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

```

## Project structure:

Server side page handling

/app
[api]
---[about]
------route.ts
[about]
---page.tsx
---layout.tsx

Client side page handling

/views
[about-view]
---index.tsx
---hero-section
---body-section
---skills-section
---types.ts
---[data]
------about-static-data.json
------data-parser.ts
---[utils]
------special-function.ts
---[tests]
------skills-section.test.tsx

Components that appear on multiple locations

/shared
[navigation]
---NavBar.tsx
---Footer.tsx
---[tests]
------navbar.test.tsx

Constants, hooks, utils, common types.

/lib
---constants.ts
---types.ts
---[utils]
------calculatePi.ts
---[hooks]
------useSpecialHook.tsx
---[contexts]
------authContext.tsx
