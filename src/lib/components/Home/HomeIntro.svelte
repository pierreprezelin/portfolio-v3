<script lang="ts">
	import { FileDown } from '@lucide/svelte';
</script>

<section id="intro">
	<p class="mb-4">
		Un Développeur Front-end et UI Designer français,<br />
		basé actuellement à Montréal, QC, Canada.
	</p>
	<p class="mb-4">J'apprécie l'idée de travailler sur des projets cools avec des gens positifs.</p>
	<p class="mb-5 tablet:pr-48">
		Sinon, j'adore les jeux vidéo, créer et jouer de la musique, les animes, faire du sport (kickboxing,
		running, escalade) et la bonne gastronomie. Ces temps-ci, j'apprends le patin à glace !
	</p>
	<div class="flex flex-col justify-between gap-5 mobile:flex-row">
		<p>
			<a href="/docs/cv_pierre-prezelin.pdf" download class="flex items-center gap-2.5">
				<FileDown size="24" strokeWidth="1" color="var(--color-pp-black)" />
				Télécharger mon CV
			</a>
		</p>
		<p class="hidden text-pp-black/60 italic mobile:text-right tablet:inline-flex">
			(pas de panique, le curseur fonctionne très bien)
		</p>
	</div>
</section>
