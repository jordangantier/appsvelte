<script>
	import "../app.css";

	import Header from "../lib/Header.svelte";
	import Footer from "../lib/Footer.svelte";
</script>

<svelte:head>
	<!-- META TAGS GLOBALES -->
	<meta
		name="google-site-verification"
		content="f8BbQpaY_ff6PwsYnUnT_OLRNferfof0MJhcqs9GueI"
	/>
	<meta name="name" content="Skyworth" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="organization" content="Skyworth" />
	<meta name="copyright" content="2022" />
	<!-- META TAGS GLOBALES END -->
</svelte:head>

<Header />
<main>
	<div class="py-2">
		<div class="container mx-auto px-2 max-w-laptop">
			<slot />
		</div>
	</div>
</main>
<Footer />

<style>
	/* */
</style>
