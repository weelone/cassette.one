# CassetteOne

The static website for [CassetteOne](https://cassette.one), built with SvelteKit and deployed to Cloudflare Workers Static Assets.

## Development

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

Before deploying, run the local checks:

```bash
pnpm run check
pnpm run build
pnpm run cf-typegen
pnpm exec wrangler deploy --dry-run
```

Deployments from `main` are built by Cloudflare Workers Builds. A manual deployment can be started with `pnpm run deploy`.
