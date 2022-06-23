<script>
	import "../app.css";

	import Header from "../lib/Header.svelte";
	import Footer from "../lib/Footer.svelte";
</script>

<Header />
<main>
	<div class="py-2">
		<div class="container mx-auto px-1 max-w-laptop">
			<slot />
		</div>
	</div>
</main>
<Footer />

<style>
	/* */
</style>
