<script lang="ts">
	import { page } from '$app/state';
	import { Sun, Moon } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';

	const isActiveLink = (path: string) => {
		if (path === '/') {
      return page.url.pathname === '/';
    }
    return page.url.pathname.startsWith(path);
	};
</script>

<header class="fixed top-5 z-10 flex w-full items-center justify-between tablet:px-32">
	<nav
		class="relative flex h-18 w-full items-center justify-between rounded-xl bg-pp-beige/5 px-4 backdrop-blur-[6px]"
	>
		<ul>
			<li>
				<a
					href="/"
					class:active={isActiveLink('/')}
					aria-current={page.url.pathname === '/'}
				>
					About
				</a>
			</li>
			<li>
				<a
					href="/works"
					class:active={isActiveLink('/works')}
					aria-current={page.url.pathname === '/works'}
				>
					Works
				</a>
			</li>
			<li>
				<a
					href="/blog"
					class:active={isActiveLink('/blog')}
					aria-current={page.url.pathname === '/blog'}
				>
					Blog
				</a>
			</li>
		</ul>
		<a
			href="/"
			title="Home · About"
			aria-label="Home · About"
			aria-current={page.url.pathname === '/'}
			class="absolute top-0 left-[50%] -translate-x-[50%] rounded-full border-4 border-pp-beige"
		>
			<enhanced:img src="$lib/assets/logo.svg" alt="Logo" />
		</a>
		<ul>
			<li>
				<button type="button">FR</button>
			</li>
			<li>
				<button
					type="button"
					onclick={toggleMode}
					aria-label="Toggle theme"
					class="theme-toggle flex items-center"
				>
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
		position: relative;
		z-index: 1;
		display: flex;
		align-items: center;
		text-transform: uppercase;

		&:first-of-type {
			li {
				a.active::after {
					transform: rotate(45deg) scale(1);
				}
			}
		}

		li {
			a,
			button {
				position: relative;
				padding: 1rem;
				font-family: var(--font-serif);

				&::after {
					position: absolute;
					content: '';
					left: 50%;
					bottom: 0.25rem;
					width: 0.25rem;
					height: 0.25rem;
					margin-left: -0.125rem;
					background-color: var(--color-pp-black);
					border-radius: 1px;
					transform: rotate(45deg) scale(0);
					transition: transform var(--default-transition-duration)
						var(--default-transition-timing-function);
				}

				&:hover {
					&::after {
						transform: rotate(45deg) scale(1);
					}
				}
			}
		}
	}
</style>
