# Next.js + Fonts + Storybook + Vite

This repository demonstrates an issue with Storybook and Next.js when loading custom fonts via a shared library package.

This repository also uses a monorepo layout:

```
.
├── apps
│   ├── storybook   # <-- The Storybook app
│   │   └── ...
│   └── www         # <-- The Next.js app, omitted for brevity
│       └── ...
└── packages
    └── ui          # <-- The shared library package that loads the fonts
        └── lib
            └── fonts.ts
```

To reproduce the issue:

```bash
pnpm install
cd apps/storybook
pnpm run storybook
```
