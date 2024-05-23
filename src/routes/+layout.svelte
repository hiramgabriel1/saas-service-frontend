<script>
	import Navbar from '../components/navbar/Navbar.svelte';
	import Footer from '../components/footer/Footer.svelte';

	export let title = 'Nuvix - Desarrollo de Sistemas SaaS & Software a medida';
	export let description =
		'Nuvix - Somos una empresa de desarrollo de software que se enfoca en dar soluciones SaaS para que empresas puedan tener mejor funcionamiento.';
	export let url = 'https://nuxiv.vercel.app';
	// export let image = './icon.jpg';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<!-- <meta property="og:image" content={image} /> -->

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<!-- <meta name="twitter:image" content={image} /> -->
</svelte:head>

<div class="bg-[#1C1C1C] h-full w-full">
	<Navbar />
	<slot></slot>
	<Footer />
</div>
