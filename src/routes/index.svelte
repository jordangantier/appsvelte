<script>
	import { onMount } from "svelte";

	let posts = [];

	onMount(async () => {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/posts"
		);
		posts = await response.json();
		console.log(posts);
	});
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Inicio" />
</svelte:head>

<h1>Página Index</h1>
{#each posts as post}
	<div>{post.title}</div>
{/each}
