<script>
	import { m } from "$lib/paraglide/messages";
</script>
<section id="skills" class="mt-20">
	<h2 class="h4 mb-6">{m.what_i_worked_with()}</h2>
	<div class="grid gap-6 mobile:grid-cols-3 mobile:gap-5">
		<div>
			<h3 class="h6 mb-3">{m.skills_webdev()}</h3>
			<ul>
				<li>HTML</li>
				<li>CSS / SCSS (Sass) / LESS</li>
				<li>Tailwind CSS</li>
				<li>JavaScript / TypeScript</li>
				<li>React / Next</li>
				<li>Vue.js / Nuxt</li>
				<li>Svelte / SvelteKit</li>
				<li>Supabase</li>
				<li>Jest</li>
				<li>Storybook</li>
				<li>Node.js</li>
				<li>MySQL</li>
				<li>REST API</li>
				<li>Git</li>
				<li>Docker</li>
				<li>CI/CD</li>
				<li>PHP</li>
				<li>PrestaShop</li>
				<li>WordPress</li>
			</ul>
		</div>
		<div>
			<h3 class="h6 mb-3">Mobile</h3>
			<ul>
				<li>React Native / Expo</li>
			</ul>
			<h3 class="h6 mt-6 mb-3">{m.skills_systems()}</h3>
			<ul>
				<li>Windows</li>
				<li>macOS</li>
				<li>Linux</li>
			</ul>
		</div>
		<div>
			<h3 class="h6 mb-3">Design</h3>
			<ul>
				<li>UX/UI</li>
				<li>{m.skills_a11y()}</li>
				<li>Figma</li>
				<li>Photoshop</li>
				<li>Illustrator</li>
			</ul>
		</div>
	</div>
</section>
