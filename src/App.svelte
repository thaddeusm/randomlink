<script>
	import { onMount } from "svelte";
	import { fade } from 'svelte/transition';

	let redirectUrl = '';
	$: loaded = redirectUrl !== '' 

	onMount(async () => {
		const res = await fetch("/api/index");
		const url = await res.text();
		redirectUrl = url;
	});
</script>

<style>
	@keyframes pulse {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.2);
		}
	}

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
	}

	img {
		width: 4em;
		vertical-align: middle;
		animation-name: pulse;
		animation-delay: 1s;
		animation-duration: 500ms;
		animation-direction: alternate;
		animation-iteration-count: 4;
		transition: all ease-in;
	}
</style>

<main>
	{#if loaded}
		<a href="{redirectUrl}" transition:fade="{{delay: 500, duration: 1000}}">
			<img src="/door.svg" alt="door">
		</a>
	{/if}
</main>
