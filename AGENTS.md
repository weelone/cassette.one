# Repository Guidelines

## Project Structure & Module Organization
- `src/routes/`: SvelteKit pages and layouts (`+page.svelte`, `+layout.svelte`). Use route groups such as `src/routes/(terms)/` for shared layouts without changing URLs.
- `static/`: Static assets served from `/`, including images, fonts, icons, `robots.txt`, and `sitemap.xml`.
- `src/app.css`: Global styles; Tailwind is configured through `tailwind.config.ts` and `postcss.config.mjs`.
- `svelte.config.js`: SvelteKit prerender and static adapter configuration; TypeScript config lives in `tsconfig.json`.
- `wrangler.jsonc`: Cloudflare Workers Static Assets configuration.
- Co-locate simple components near their route; keep shared utilities in clearly named folders.

## Build, Test, and Development Commands
- `pnpm run dev`: Start local development with HMR.
- `pnpm run check`: Sync SvelteKit types and run `svelte-check`.
- `pnpm run build`: Generate the prerendered production site in `build/`.
- `pnpm run cf-typegen`: Validate Wrangler configuration and generate ignored Worker types.
- `pnpm exec wrangler deploy --dry-run`: Validate the Worker bundle without deploying.
- `pnpm run deploy`: Deploy the static assets with Wrangler.

## Coding Style & Naming Conventions
- **Language**: TypeScript + Svelte 5. 2-space indentation.
- **Checks**: Keep `svelte-check` at zero errors and zero warnings.
- **Routes**: SvelteKit filesystem routing (`+page.svelte`, `+layout.svelte`), with lowercase URL segments.
- **Components**: PascalCase filenames; keep props small and explicit.
- **Styles**: Tailwind utilities in components; tokens and resets live in `src/app.css`.

## Testing Guidelines
- No formal suite configured. Before PRs: run `pnpm run check` and `pnpm run build`.
- UI changes: manually verify key routes; include screenshots or short clips.
- Critical logic: add lightweight unit tests (e.g., Jest/Vitest) or document manual test steps clearly.

## Commit & Pull Request Guidelines
- **Commits**: Short, imperative (e.g., "Add footer link", "Fix text color"). Group related changes.
- **PRs**: Clear summary, motivation, scope; link issues; screenshots for visual changes; note breaking changes and rollout steps.
- **Checklist**: `pnpm run check` passes; `pnpm run build` succeeds; verify affected routes locally.

## Security & Configuration Tips
- Never commit secrets, `.env` files, `.dev.vars`, generated Worker types, `.wrangler/`, `.svelte-kit/`, or `build/`.
- Keep `wrangler.jsonc` as the source of truth for non-secret Cloudflare configuration.
