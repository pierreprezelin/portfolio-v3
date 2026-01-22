<script lang="ts">
	import { Sun, Moon } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';
</script>

<header class="fixed z-10 top-0 w-full flex items-center justify-between p-4">
	<nav class="flex w-full">
		<ul>
			<li><a href="/works">Works</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/blog">Blog</a></li>
		</ul>
		<a href="/" title="Home" aria-label="Home">
			<enhanced:img src="$lib/assets/logo.svg" alt="Logo" />
		</a>
		<ul>
			<li>
				<button type="button">FR</button>
			</li>
			<li>
				<button type="button" onclick={toggleMode} aria-label="Toggle theme" class="theme-toggle">
					<span class="theme-toggle-sun">
						<Sun size="24" color="var(--color-pp-black)" />
					</span>
					<span class="theme-toggle-moon">
						<Moon size="24" color="var(--color-pp-black)" />
					</span>
				</button>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	.theme-toggle {
		&-moon {
			display: none;
		}
		&-sun {
			display: block;
		}
	}

	:global(html.dark) {
		.theme-toggle {
		&-sun {
			display: none;
		}
		&-moon {
			display: block;
		}
	}
	}

	ul {
		display: flex;
		align-items: center;
		gap: 2rem;
		text-transform: uppercase;
	}

	a,
	button {
		position: relative;
		font-family: var(--font-serif);

		&::after {
			position: absolute;
			content: '';
			left: 50%;
			bottom: 0.5rem;
			width: 0.25rem;
			height: 0.25rem;
			margin-left: -0.125rem;
			background-color: var(--color-pp-black);
			border-radius: 1px;
			opacity: 0;
		}

		&:hover {
			&::after {
				opacity: 1;
			}
		}
	}
</style>
