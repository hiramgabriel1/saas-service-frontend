<script lang="ts">
    import IconEnkode from '$lib/images/IconEnkode.png';
    import  {windowWidth}  from '../Width';
    import { onDestroy } from 'svelte';


    let width: number;

// Subscribe to the store to keep `width` updated
const unsubscribe = windowWidth.subscribe(value => {
  width = value;
});

// Cleanup subscription when component is destroyed
onDestroy(() => {
  unsubscribe();
});

function Menu(){

}

</script>

<header id="header" class=" z-10 bg-transparent sticky top-0 backdrop-blur-md">
    <nav class="flex justify-around items-center h-16 bg-transparent text-white pt-5 font-ESRebondGrotesqueTRIAL-Medium"
    >
        <div class="flex">
            <picture>
                <img src={IconEnkode} alt="Icon" class="size-52" >
            </picture>
        </div>
        {#if width > 1024}
            <ul class="flex list-none gap-4">
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Servicios</a></li>
                <li><a href="/">Soluciones</a></li>
                <li><a href="/">Nosotros</a></li>
                <li><a href="/">Contacto</a></li>
            </ul>
            {:else}
                <div class="flex">
                    <button  class="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
        {/if}
        
    </nav>
</header>