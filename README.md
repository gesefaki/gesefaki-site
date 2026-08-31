# gesefaki-site

Site-portfolio. The site is intentionally small: React on the front end, Vinext and Vite for the build, and a Cloudflare Worker in production.

## Running it locally

The project uses Node.js 22.23.2. If you use nvm, the version is already listed in `.nvmrc`.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

On Windows, copy the environment file with PowerShell:

```powershell
Copy-Item .env.example .env.local
```

The development server is available at `http://127.0.0.1:3000`.

## Environment

There is not much to configure. The site only needs its public address:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

It should contain the public URL without a trailing slash. The site uses it for canonical links and social preview images. `.env.local` stays out of Git, while `.env.example` documents the expected value.

## Scripts

- `npm run dev` starts the development server.
- `npm run check` checks formatting, runs the linter, and creates a production build.
- `npm run preview` builds the project and runs it locally with Wrangler.
- `npm run deploy:dry` builds the Worker and checks the upload without publishing anything.
- `npm run deploy` publishes through an authenticated Wrangler session.

## Deploying through Cloudflare

This is a Worker application rather than a static Pages export. The build creates the server bundle in `dist/server` and puts the browser assets in `dist/client`.

Create a Worker from this GitHub repository and use these build settings:

```text
Production branch: main
Build command: npm run build
Deploy command: npm run deploy:worker
Non-production deploy command: npm run preview:worker
Root directory: leave empty
```

Use `gesefaki-site` as the Worker name so it matches `wrangler.jsonc`.

The first deployment will give you a `workers.dev` address. Add that address as `NEXT_PUBLIC_SITE_URL` in the Cloudflare build variables, then retry the deployment. If you connect a custom domain later, update the variable and deploy once more.

CI is deliberately simple. GitHub Actions runs `npm run check` for pushes to `main` and for pull requests. Build output, local environment files, Wrangler state, and installed packages stay out of Git.
