<script>
	import Navbar from '../components/navbar/Navbar.svelte';
	import Footer from '../components/footer/Footer.svelte'
</script>

<div class=" bg-[#1C1C1C] h-full w-full">
<Navbar/>
<slot></slot>
<Footer/>
</div>