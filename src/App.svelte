<script>
	import { onMount } from "svelte";
	import { fly } from 'svelte/transition';

	let redirectUrl = '';
	$: loaded = redirectUrl !== '' 

	onMount(async () => {
		const res = await fetch("/api/index");
		const url = await res.text();
		redirectUrl = url;
	});
</script>

<style>
	main {
		display: grid;
		height: 100%;
		align-items: center;
		justify-content: center;
		text-align: center;
	}

	a {
		text-decoration: none;
		color: var(--yellow);
		font-size: 3em;
		padding: .5em 1em;
		border: .05em solid var(--yellow);
	}

	img {
		width: 1em;
		vertical-align: middle;
		margin-left: .5em;
	}
</style>

<main>
	{#if loaded}
		<a href="{redirectUrl}" transition:fly="{{delay: 500, duration: 1000}}">
			enter <img src="/door.svg" alt="door">
		</a>
	{/if}
</main>
