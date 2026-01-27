<script lang="ts">
	import { page } from '$app/state';
	import { getLocale, locales, localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';
	import { BarChart2, Moon, Sun } from '@lucide/svelte';
	import { toggleMode } from 'mode-watcher';

	const currentLocale = $state(getLocale());
	let otherLocale = $derived(locales.find((l) => l !== currentLocale) || locales[0]);

	let isMenuShown = $state(false);

	const isActiveLink = (path: string) => {
		const normalizedPathname = page.url.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
		if (path === '/') {
			return normalizedPathname === '/';
		}
		return normalizedPathname.startsWith(path);
	};

	const links = [
		{ href: '/', label: m.title_about() },
		{ href: '/works', label: m.title_works() },
		{ href: '/blog', label: m.title_blog() }
	];
</script>

<header
	class="fixed top-2.5 z-10 flex w-full items-center justify-between px-2.5 tablet:top-5 tablet:px-32"
>
	<nav
		class="h-18 w-full rounded-xl bg-pp-beige/5 px-2.5 backdrop-blur-[6px] tablet:px-4"
		class:show={isMenuShown}
	>
		<div class="relative flex h-18 w-full items-center justify-between">
			<button
				type="button"
				class="z-2 flex -scale-x-100 rotate-90 items-center justify-center p-2.5 transition-transform tablet:hidden"
				onclick={() => (isMenuShown = !isMenuShown)}
			>
				<BarChart2 size="24" color="var(--color-pp-black)" />
			</button>
			<ul class="{isMenuShown ? 'opacity-100' : 'opacity-0'} z-1 tablet:opacity-100">
				{#each links as link}
					<li>
						<a
							href={localizeHref(link.href, { locale: currentLocale })}
							class:active={isActiveLink(link.href)}
							aria-current={page.url.pathname === link.href}
							onclick={() => (isMenuShown = false)}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
			<ul class="z-2">
				<li>
					<a href={localizeHref(page.url.pathname, { locale: otherLocale })} data-sveltekit-reload>
						{currentLocale}
					</a>
				</li>
				<li>
					<button
						type="button"
						onclick={toggleMode}
						aria-label="Changer de thème"
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
		</div>
		<a
			href={localizeHref('/', { locale: currentLocale })}
			title={m.back_to_home()}
			aria-label={m.back_to_home()}
			aria-current={page.url.pathname === '/'}
			class="absolute top-0 left-[50%] z-2 -translate-x-[50%] rounded-full border-4 border-pp-beige"
			onclick={() => (isMenuShown = false)}
		>
			<enhanced:img src="$lib/assets/logo.svg" alt="Logo" />
		</a>
	</nav>
</header>

<style lang="scss">
	$breakpoint-tablet: 61.5rem; // Tailwind `--breakpoint-tablet` seems unreachable here

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

	nav {
		&.show {
			height: calc(100vh - 1.25rem);

			@media (max-width: $breakpoint-tablet) {
				ul:first-of-type {
					position: absolute;
					top: 0;
					left: 0.625rem;
					height: calc(100vh - 1.25rem);
					flex-direction: column;
					justify-content: center;
					align-items: flex-start;

					@media (orientation: landscape) {
						justify-content: flex-end;
					}

					li {
						a {
							display: flex;
							padding: 0.75rem 0;
							font-size: var(--text-4xl);

							@media (orientation: landscape) {
								padding-top: 0.333rem;
								padding-bottom: 0.333rem;
							}

							&.active {
								padding-left: 2.5rem;

								&::after {
									top: 50%;
									bottom: auto;
									left: 0;
									width: 0.625rem;
									height: 0.625rem;
									margin-top: -0.3125rem;
									margin-left: 0;
									border-radius: 3px;
								}
							}
						}
					}
				}
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

				@media (max-width: $breakpoint-tablet) {
					padding: 0.625rem;
				}

				&::after {
					position: absolute;
					content: '';
					bottom: 0.25rem;
					left: 50%;
					width: 0.25rem;
					height: 0.25rem;
					margin-left: -0.125rem;
					background-color: var(--color-pp-black);
					border-radius: 1px;
					transform: rotate(45deg) scale(0);
					transition: transform var(--default-transition-duration)
						var(--default-transition-timing-function);
				}

				@media (min-width: $breakpoint-tablet) {
					&:hover {
						&::after {
							transform: rotate(45deg) scale(1);
						}
					}
				}
			}
		}
	}
</style>
