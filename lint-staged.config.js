/**
 * The scripts below run on the whole project (svelte-check and Biome are
 * configured to target the repo root), so the staged-files list lint-staged
 * provides is intentionally ignored.
 */
export default {
	"*": () => ["bun run check", "bun run format", "bun run lint"]
};
