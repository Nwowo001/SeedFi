This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

🧱 SeedFi v2 Folder Structure
seedfi/
├── .github/
│   └── workflows/
│       ├── ci.yml                 # CI pipeline (lint, test, build)
│       └── deploy.yml             # Deployment workflow
├── public/
│   └── assets/                    # Images, fonts, static files
├── app/                           # App Router directory
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Landing page
│   └── api/                       # API routes (if needed)
├── components/                    # Reusable UI components
│   └── ui/
├── features/                      # Feature sections (Hero, Testimonials, etc.)
├── styles/                        # Tailwind + global styles
├── lib/                           # Utility functions, API clients
├── hooks/                         # Custom React hooks
├── context/                       # Global context providers
├── context/                       # Constants data (testimonials, contacts, navigation...)
├── types/                         # TypeScript type declarations
├── tests/                         # Global test directory
│   ├── components/                # Component tests
│   ├── features/                  # Feature section tests
│   └── setup/                     # Test setup + utilities
├── coverage/                      # Jest test coverage output
├── .eslintrc.js                   # ESLint configuration
├── .prettierrc                    # Prettier configuration
├── jest.config.ts                 # Jest config
├── tailwind.config.ts             # TailwindCSS config
├── tsconfig.json                  # TypeScript config
├── next.config.js                 # Next.js config
├── README.md                      # Project documentation
└── package.json                   # Dependencies and scripts
