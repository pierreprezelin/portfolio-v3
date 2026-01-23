<script>
	import { FileDown } from "@lucide/svelte";
</script>

<section id="intro">
	<p class="mb-4">
		A Front-end Developer and UI Designer from France,<br />
		currently based in Montréal, QC, Canada.
	</p>
	<p class="mb-4">I’m always eager to work on cool projects with positive people.</p>
	<p class="mb-5 tablet:pr-48">
		Otherwise, I’m fond of video games, making and playing music, anime, sports (kickboxing,
		running, climbing) and good food.<br />
		These days, I’m learning how to ice-skate!
	</p>
	<div class="flex flex-col mobile:flex-row justify-between gap-5">
		<p>
			<a href="/docs/cv_pierre-prezelin_fr.pdf" download class="flex items-center gap-2">
				<FileDown size="24" strokeWidth="1" color="var(--color-pp-black)" />
				Download my CV (FR)
			</a>
		</p>
		<p class="text-pp-black/60 mobile:text-right italic">
			(don’t worry, your cursor is working just fine)
		</p>
	</div>
</section>
