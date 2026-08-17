# AGENTS.md - Agentic Coding Guidelines

This file provides guidelines for agentic coding agents working in this repository.

## Project Overview

This is a SvelteKit portfolio website with:

- SvelteKit 2.x with Svelte 5 (runes syntax)
- TypeScript (strict mode)
- TailwindCSS 4.x with Vite
- Cloudflare Pages adapter
- mdsvex for markdown content
- Paraglide for internationalization (i18n)

## Build / Lint / Test Commands

### Development

```bash
bun dev          # Start dev server
bun build       # Build for production
bun preview     # Preview production build
```

### Type Checking

```bash
bun check           # Run svelte-check (types + svelte)
bun check:watch     # Watch mode for type checking
```

### Formatting & Linting

```bash
bun format      # Format all files with Biome
bun lint        # Run Biome check (format + lint + import order)
bun lint:fix    # Same, applying safe fixes
```

Biome (`biome.json`) replaces Prettier and ESLint. Notes:

- Svelte support is experimental (`html.experimentalFullSupportEnabled`)
- `.scss` and `.svx` files are excluded — Biome does not support them
- There is **no Tailwind class sorting** (Biome's `useSortedClasses` is nursery and
  does not understand Tailwind v4 CSS config). Order classes by hand, visually.

### Single Test Commands

No test framework is currently configured. If tests are added:

```bash
# Vitest
bun test        # Run all tests
bun test:watch  # Watch mode
bun test run <file>  # Run single test file

# Or for other frameworks, check package.json scripts
```

### Sync & Prepare

```bash
bun prepare     # Runs svelte-kit sync (generates types)
```

## Code Style Guidelines

### General

- Use **ES modules** (`"type": "module"` in package.json)
- Use **tabs** for indentation (configured in biome.json)
- Use **single quotes** for strings
- Use **Trailing commas**: none
- **Print width**: 100 characters

### TypeScript

- **Strict mode** enabled in tsconfig.json
- Always define return types for functions when not obvious
- Use `type` for object types, `interface` for extendable types
- Avoid `any`, use `unknown` when type is uncertain

### Svelte 5 (Runes)

- Use `$state()`, `$derived()`, `$effect()` runes (not `let` exports)
- Use `$props()` for component props
- Prefer `$derived` over reactive statements
- Use `onclick` instead of `on:click`
- Use `bind:this` pattern for DOM refs if needed

### Imports

- Use **$lib** alias for internal imports (e.g., `import { foo } from '$lib/utils'`)
- Use **$app** for SvelteKit imports (e.g., `$app/stores`, `$app/state`)
- Group imports: SvelteKit → External → Internal → Components
- Use named exports, avoid default exports when possible

### Naming Conventions

- **Components**: PascalCase (e.g., `CardWork.svelte`)
- **Files/utils**: camelCase (e.g., `utils.ts`, `formatDate`)
- **Types**: PascalCase (e.g., `Post`, `WorkItem`)
- **Constants**: SCREAMING_SNAKE_CASE for config values, camelCase for regular constants

### Error Handling

- Use try/catch with async operations
- Return meaningful error messages
- Use SvelteKit's `+error.svelte` pages for error states
- Handle API errors gracefully with user feedback

### CSS / Styling

- Use **TailwindCSS** utility classes first
- Use **SCSS** in `<style lang="scss">` blocks for component-specific styles
- Use CSS custom properties for theme values (e.g., `var(--color-pp-black)`)
- Follow TailwindCSS class ordering (visual order) — not enforced by tooling, see Biome notes
- Define responsive breakpoints as variables in SCSS (see Header.svelte)

### SvelteKit Conventions

- **Routes**: Use `+page.svelte`, `+page.server.ts`, `+page.ts` files
- **API**: Use `+server.ts` files in routes/api/\*
- **Layouts**: Use `+layout.svelte` for shared UI
- **Error pages**: Use `+error.svelte` in route directories
- Use `+layout.ts` with ` prerender = true` for static pages
- Use `definePageMetaTags` from svelte-meta-tags for SEO

### Internationalization (i18n)

- Use Paraglide (`$lib/paraglide/messages`) for translations
- Use `m.function_name()` pattern for messages
- Use `getLocale()`, `locales`, `localizeHref` from `$lib/paraglide/runtime`

### Image Handling

- Use `<enhanced:img>` from `@sveltejs/enhanced-img` for optimized images
- Put images in `static/` or use `src/lib/assets/`

### File Organization

```
src/
├── lib/
│   ├── components/     # Reusable components
│   ├── data/          # Static data (timeline, socials)
│   ├── types.ts       # TypeScript types
│   └── utils.ts       # Utility functions
├── routes/
│   ├── api/           # API endpoints
│   ├── blog/          # Blog routes
│   ├── works/         # Works routes
│   └── +layout.svelte # Root layout
└── app.d.ts           # Type declarations
```

### Git & Commits

- Use conventional commit messages: `feat:`, `fix:`, `chore:`, `docs:`
- Run `bun lint` and `bun check` before committing
- Do not commit node_modules, .svelte-kit, or build outputs

### Running Lint/Typecheck Before Commit

```bash
bun lint && bun check
```

### Adding Dependencies

```bash
bun i <package>      # Production dependency
bun i -D <package>   # Dev dependency
```

### Cloudflare Deployment

- Uses `@sveltejs/adapter-cloudflare`
- Config in `wrangler.toml`
- Build output deployable to Cloudflare Pages
