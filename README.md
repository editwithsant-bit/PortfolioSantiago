# Renan Santiago Portfolio - Deploy Ready

This folder contains only the essential root/config files for preparing the existing Next.js portfolio for GitHub and Vercel.

## Copy Into Your Project

Copy the contents of this `deploy-ready` folder into the root of the existing portfolio project, at the same level as `app/`, `public/`, and `package.json`.

Do not copy `deploy-ready` as a folder into the project. Copy the files inside it.

## Included Files

- `package.json` - npm scripts and dependencies for the portfolio.
- `package-lock.json` - locked dependency tree for repeatable installs.
- `.gitignore` - keeps local installs, build output, env files, logs, and heavy long-form exports out of GitHub.
- `.env.example` - safe example env file. Rename to `.env.local` only if needed.
- `next.config.ts` - Next.js production config.
- `tsconfig.json` - TypeScript config required by Next.js.
- `tailwind.config.ts` - Tailwind content/theme config.
- `postcss.config.mjs` - PostCSS config for Tailwind.
- `next-env.d.ts` - Next.js TypeScript declarations.
- `vercel.json` - minimal Vercel install/build settings.
- `.github/workflows/build-check.yml` - GitHub Actions install/build check.

## Install Dependencies

From the project root:

```bash
npm install
```

On Windows PowerShell, if `npm` is blocked by script policy, use:

```bash
npm.cmd install
```

## Run Locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

Stop the local dev server first, then run:

```bash
npm run build
```

On Windows PowerShell, if needed:

```bash
npm.cmd run build
```

## Push To GitHub

```bash
git init
git add .
git commit -m "Prepare portfolio for deployment"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

## Deploy On Vercel

1. Import the GitHub repository in Vercel.
2. Choose the Next.js framework preset.
3. Use `npm install` as the install command.
4. Use `npm run build` as the build command.
5. Deploy.
6. Optional: after the domain is ready, set `NEXT_PUBLIC_SITE_URL` in Vercel to the production URL.

## Netlify Optional

No `netlify.toml` is included because Vercel is the preferred target and this Next.js project does not need Netlify-specific configuration for the current deployment plan.

## Video Size Notes

Long-form videos and shorts are now embedded from YouTube, so the heavy files in `public/videos/*.mp4` and `public/shorts/*.mp4` are ignored by Git.

GitHub blocks any individual file larger than 100 MB. Keep the old local video exports out of the repository unless you intentionally compress them below the limit or configure Git LFS carefully.

The deploy files are ready. Media size should no longer block GitHub as long as the ignored local video exports are not already tracked by Git.
