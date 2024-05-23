<script>
	import IconEnkode  from '$lib/images/IconEnkode.png';
</script>

<footer>
    <div class="flex flex-col  lg:justify-between lg:flex-row lg:px-[5%] p-5">

        <picture class="flex justify-center">
            <div>
            <img src={IconEnkode} alt="" class="size-60">
            </div>
        </picture>

        <section class="flex flex-wrap justify-center gap-10 ">
           
            <div class="flex flex-col gap-3 max-w-[100px]">
                <h3 class="text-white">Casos de uso</h3>
                <ul class="flex flex-col gap-3 list-none text-white/50">
                    <li><a href="/">ChattyBot CLI</a></li>
                    <li><a href="/">ChattyBot Code</a></li>
                </ul>
            </div>
            <div class="flex flex-col gap-3 max-w-[100px]">
                <h3 class="text-white">Integración</h3>
                <ul class="flex flex-col gap-3 list-none text-white/50">
                    <li><a href="/">Web</a></li>
                    <li><a href="/">Vs Code</a></li>
                </ul>
            </div>
            <div class="flex flex-col gap-3 max-w-[100px]">
                <h3 class="text-white">Recursos</h3>
                <ul class="flex flex-col gap-3 list-none text-white/50">
                    <li><a href="/">Documentación</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Registro de cambios</a></li>
                    <li><a href="/">Contáctanos</a></li>
                </ul>
            </div>
            <div class="flex flex-col gap-3 max-w-[100px]">
                <h3 class="text-white">Empresas</h3>
                <ul class="flex flex-col gap-3 list-none text-white/50">
                    <li><a href="/">Precios</a></li>
                    <li><a href="/">FAQ</a></li>
                    <li><a href="/">Acerca de</a></li>
                    <li><a href="/">Comunidad</a></li>
                </ul>
            </div>
            <div class="flex flex-col gap-3 max-w-[100px]">
                <h3 class="text-white">Cuentas</h3>
                <ul class="flex flex-col gap-3 list-none text-white/50">
                    <li><a href="/">Linkedin</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Twiter</a></li>
                </ul>
            </div>

        </section>
    </div>
</footer>