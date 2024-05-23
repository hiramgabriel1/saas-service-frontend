<script lang="ts">
	import Navbar from '../components/navbar/Navbar.svelte';
	import '../app.css';
	import { windowWidth } from '../components/Width';
	import { onDestroy } from 'svelte';

	let width: number;

	const unsubscribe = windowWidth.subscribe((value) => (width = value));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:head>
	<title>Nuvix - Desarrollo de Sistemas SaaS & Software a medida</title>
	<meta
		name="description"
		content="Nuvix - Somos una empresa de desarrollo de software que se enfoca en dar soluciones SaaS para que empresas puedan tener mejor funcionamiento alaburguer"
	/>
</svelte:head>

<!-- Section main -->
<section class="relative z-0">
	<div class=" py-64 md:py-36 xl:py-24">
		<div
			class="relative flex flex-wrap w-full justify-center py-16 opacity-20 rounded-full"
			style="overflow: hidden; background: radial-gradient(50% 50% at 50% 50%, rgba(144, 123, 255, 0.7) 0%, rgba(144, 123, 255, 0) 100%);"
		>
			{#if width > 1024}
				{#each Array(98) as _, i}
					<span class="grid size-20 border-2 border-slate-500 opacity-[0.1]" />
				{/each}
			{:else if width > 640}
				{#each Array(50) as _, i}
					<span class="grid size-20 border-2 border- opacity-[0.07]" />
				{/each}
			{:else if width > 420}
				{#each Array(35) as _, i}
					<span class="grid size-20 border-2 border-slate-500 opacity-[0.07]" />
				{/each}
			{:else if width > 0}
				{#each Array(5) as _, i}
					<span class="grid size-20 border-2 border-slate-500 opacity-[0.07]" />
				{/each}
			{/if}
		</div>

		<div
			class="absolute flex flex-col px-16 justify-center items-center top-0 bottom-0 left-0 right-0"
		>
			<h1
				class="font-ESRebondGrotesqueTRIAL-ExtraBold text-7xl text-center text-transparent
                bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff9c]"
			>
				Nuvix - Soluciones SaaS <br /> Integrales
			</h1>
			<p class="text-center text-[#D2D0DD] font-ESRebondGrotesqueTRIAL-Medium mt-5 text-xl">
				Nuvix ofrece herramientas avanzadas que simplifican la gestión empresarial, optimizan
				procesos y garantizan la seguridad de tus datos.
			</p>
			<div
				class="  flex gap-5
                 text-white font-ESRebondGrotesqueTRIAL-Medium mt-14"
			>
				<button class="py-3 px-8 bg-[#6C7AF1] rounded-2xl"> Soluciones </button>
				<button class="py-3 px-8 bg-[#262835] rounded-2xl"> Contacto </button>
			</div>
		</div>
	</div>
</section>

<!-- Section service -->
<section class="static">
	<div class="container py-20">
		<div class="flex flex-col justify-center items-center gap-5">
			<h2
				class="py-2 px-8 bg-[#303030] border-2 border-[#F8FAFC] text-white font-ESRebondGrotesqueTRIAL-Medium rounded-2xl text-sm"
			>
				¿Qué ofrecemos
			</h2>
			<h1
				class=" text-[56px] text-center font-ESRebondGrotesqueTRIAL-Medium font-bold text-transparent
      bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#ffffff9c]"
			>
				Innovación en cada solución
			</h1>
			<p class="text-xl max-w-[] text-center font-ESRebondGrotesqueTRIAL-Medium text-[#D2D0DD]">
				Soluciones SaaS que mejoran la eficiencia, automatizan tareas y aseguran tus datos.
				¡Colaboramos con nuestros clientes para alcanzar resultados reales y medibles! Nos dedicamos
				a impulsar su éxito comercial con nuestra experiencia y habilidades únicas.
			</p>
		</div>
	</div>
</section>

<!--Section Card-->
<section class="static">
	<div class="container py-10">
		<div class="flex flex-col lg:flex-row justify-center gap-10">
			<!-- card number one-->
			<div class="flex flex-col rounded-2xl bg-[#323232] p-8 gap-8">
				<header class="flex justify-between items-center">
					<h1 class="text-[28px] text-white font-ESRebondGrotesqueTRIAL-Medium font-semibold">
						Gestión Integral
					</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="text-white text-[32px]"
						width="1em"
						height="1em"
						viewBox="0 0 512 512"
						{...$$props}
					>
						<path
							fill="currentColor"
							d="M66.1 357a16 16 0 0 1-14.61-9.46A224 224 0 0 1 256 32a16 16 0 0 1 16 16v208a16 16 0 0 1-9.47 14.61l-189.9 84.95A15.9 15.9 0 0 1 66.1 357"
						/>
						<path
							fill="currentColor"
							d="M313.59 68.18A8 8 0 0 0 304 76v180a48.07 48.07 0 0 1-28.4 43.82L103.13 377a8 8 0 0 0-3.35 11.81a208.4 208.4 0 0 0 48.46 50.41A206.32 206.32 0 0 0 272 480c114.69 0 208-93.31 208-208c0-100.45-71.58-184.5-166.41-203.82"
						/>
					</svg>
				</header>
				<p class="text-[#f8fafc6e]">
					Herramientas que simplifican y optimizan la administración de tu empresa, permitiéndote
					manejar todos tus procesos desde una plataforma centralizada y eficiente.
				</p>
			</div>

			<!--card number two-->
			<div class="flex flex-col rounded-2xl bg-[#323232] p-8 gap-8">
				<header class="flex justify-between items-center">
					<h1 class="text-[28px] text-white font-ESRebondGrotesqueTRIAL-Medium font-semibold">
						Seguridad de Datos
					</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="text-white text-[32px]"
						width="1em"
						height="1em"
						viewBox="0 0 512 512"
						{...$$props}
					>
						<path
							fill="currentColor"
							d="M368 192h-16v-80a96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64m-48 0H192v-80a64 64 0 1 1 128 0Z"
						/>
					</svg>
				</header>
				<p class="text-[#f8fafc6e]">
					Protección avanzada para la información crítica de tu negocio, asegurando que tus datos
					estén siempre seguros y accesibles solo para quienes tengan autorización.
				</p>
			</div>
			<!--card number three -->
			<div class="flex flex-col rounded-2xl bg-[#323232] p-8 gap-8">
				<header class="flex justify-between items-center">
					<h1 class="text-[28px] text-white font-ESRebondGrotesqueTRIAL-Medium font-semibold">
						Automatización
					</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="text-white text-[32px]"
						width="1em"
						height="1em"
						viewBox="0 0 512 512"
						{...$$props}
					>
						<path
							fill="currentColor"
							d="M256 176a80 80 0 1 0 80 80a80.24 80.24 0 0 0-80-80m172.72 80a165.5 165.5 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.6 176.6 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A175 175 0 0 1 83.28 256a165.5 165.5 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.6 176.6 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a175 175 0 0 1 1.64 22.66"
						/>
					</svg>
				</header>

				<p class="text-[#f8fafc6e]">
					Soluciones que automatizan procesos para aumentar la eficiencia y reducir costos,
					permitiéndote enfocarte en las áreas estratégicas de tu negocio y mejorar la
					productividad.
				</p>
			</div>
		</div>
	</div>
</section>

<!--Section solution-->
<section class="static">
	<div class="container py-20">
		<section
			class="flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:items-start py-20 gap-10"
		>
			<section class=" flex flex-col max-w-[636px]">
				<header class="flex justify-center items-center">
					<h2
						class="text-white font-ESRebondGrotesqueTRIAL-Medium py-2 px-4 text-sm rounded-2xl border-2 border-white/40 bg-[#303030]"
					>
						Nuestras capacidades
					</h2>
				</header>
				<h1
					class="text-[56px] text-center xl:text-left text-white font-ESRebondGrotesqueTRIAL-Medium font-bold"
				>
					Soluciones que <br /> Impulsan tu Negocio
				</h1>
				<p
					class="text-[#D2D0DD] text-center xl:text-left text-xl font-ESRebondGrotesqueTRIAL-Medium font-semibold"
				>
					En Nuvix, nuestras soluciones están diseñadas para transformar tu negocio. Desde la
					gestión eficiente hasta la escalabilidad, cada capacidad está enfocada en ofrecerte
					resultados sobresalientes y un crecimiento sostenible.
				</p>
			</section>

			<!--card solution-->
			<article class="flex flex-col gap-10">
				<section class="flex gap-5">
					<picture>
						<div class="bg-[#313131] p-3 rounded-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="text-white text-[32px]"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
								{...$$props}
							>
								<mask id="lineMdSpeedometer0">
									<path
										fill="none"
										stroke="#fff"
										stroke-dasharray="46"
										stroke-dashoffset="46"
										stroke-linecap="round"
										stroke-width="2"
										d="M21 13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22"
										transform="rotate(45 12 13)"
									>
										<animate
											fill="freeze"
											attributeName="stroke-dashoffset"
											dur="0.6s"
											values="46;92"
										/>
									</path>
									<g fill-opacity="0" transform="rotate(-100 12 13)">
										<path
											d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"
										>
											<animate
												fill="freeze"
												attributeName="d"
												begin="0.4s"
												dur="0.2s"
												values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13C7 10.2386 12 -2 12 -2C12 -2 17 10.2386 17 13Z"
											/>
										</path>
										<path
											fill="#fff"
											d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"
										>
											<animate
												fill="freeze"
												attributeName="d"
												begin="0.4s"
												dur="0.2s"
												values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M15 13C15 14.6568 13.6569 16 12 16C10.3431 16 9 14.6568 9 13C9 11.3431 12 2 12 2C12 2 15 11.3431 15 13Z"
											/>
										</path>
										<set attributeName="fill-opacity" begin="0.4s" to="1" />
										<animateTransform
											fill="freeze"
											attributeName="transform"
											begin="0.6s"
											dur="0.3s"
											type="rotate"
											values="-100 12 13;65 12 13"
										/>
									</g>
								</mask>
								<rect width="24" height="24" fill="currentColor" mask="url(#lineMdSpeedometer0)" />
							</svg>
						</div>
					</picture>
					<div>
						<h1 class="text-white text-[28px] font-ESRebondGrotesqueTRIAL-ExtraBold">
							Eficiencia Operativa
						</h1>
						<p class="text-white/50 text-[16px]">
							Mejora la productividad de tu empresa con herramientas que optimizan cada aspecto de
							tus operaciones, reduciendo costos y aumentando la eficacia.
						</p>
					</div>
				</section>

				<section class="flex gap-5">
					<picture>
						<div class="bg-[#313131] p-3 rounded-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="text-white text-[36px]"
								width="1em"
								height="1em"
								viewBox="0 0 256 256"
								{...$$props}
							>
								<path
									fill="currentColor"
									d="M176 232a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m40-128a87.55 87.55 0 0 1-33.64 69.21A16.24 16.24 0 0 0 176 186v6a16 16 0 0 1-16 16H96a16 16 0 0 1-16-16v-6a16 16 0 0 0-6.23-12.66A87.59 87.59 0 0 1 40 104.49C39.74 56.83 78.26 17.14 125.88 16A88 88 0 0 1 216 104m-16 0a72 72 0 0 0-73.74-72c-39 .92-70.47 33.39-70.26 72.39a71.65 71.65 0 0 0 27.64 56.3A32 32 0 0 1 96 186v6h64v-6a32.15 32.15 0 0 1 12.47-25.35A71.65 71.65 0 0 0 200 104m-16.11-9.34a57.6 57.6 0 0 0-46.56-46.55a8 8 0 0 0-2.66 15.78c16.57 2.79 30.63 16.85 33.44 33.45A8 8 0 0 0 176 104a9 9 0 0 0 1.35-.11a8 8 0 0 0 6.54-9.23"
								/>
							</svg>
						</div>
					</picture>
					<div>
						<h1 class="text-white text-[28px] font-ESRebondGrotesqueTRIAL-ExtraBold">
							Innovación Continua
						</h1>
						<p class="text-white/50 text-[16px]">
							Implementa soluciones de vanguardia que mantienen tu negocio a la par con las últimas
							tendencias tecnológicas, asegurando una ventaja competitiva en el mercado.
						</p>
					</div>
				</section>

				<section class="flex gap-5">
					<picture>
						<div class="bg-[#313131] p-3 rounded-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="text-white text-[36px]"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
								{...$$props}
							>
								<g fill="none">
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-width="2.5"
										d="M21 15v-3a9 9 0 1 0-18 0v3"
									/>
									<path
										fill="currentColor"
										d="M3 15v-1.25H1.75V15zm0 1.25h3v-2.5H3zM5.75 16v3h2.5v-3zm-1.5 3v-4h-2.5v4zm.75.75a.75.75 0 0 1-.75-.75h-2.5A3.25 3.25 0 0 0 5 22.25zm.75-.75a.75.75 0 0 1-.75.75v2.5A3.25 3.25 0 0 0 8.25 19zM6 16.25a.25.25 0 0 1-.25-.25h2.5A2.25 2.25 0 0 0 6 13.75zM21 15h1.25v-1.25H21zm-3 1.25h3v-2.5h-3zM19.75 15v4h2.5v-4zm-1.5 4v-3h-2.5v3zm.75.75a.75.75 0 0 1-.75-.75h-2.5A3.25 3.25 0 0 0 19 22.25zm.75-.75a.75.75 0 0 1-.75.75v2.5A3.25 3.25 0 0 0 22.25 19zM18 13.75A2.25 2.25 0 0 0 15.75 16h2.5a.25.25 0 0 1-.25.25z"
									/>
								</g>
							</svg>
						</div>
					</picture>
					<div>
						<h1 class="text-white text-[28px] font-ESRebondGrotesqueTRIAL-ExtraBold">
							Servicio Personalizado
						</h1>
						<p class="text-white/50 text-[16px]">
							Disfruta de soporte técnico y atención al cliente adaptados a las necesidades
							específicas de tu empresa, garantizando un funcionamiento óptimo y satisfacción
							continua.
						</p>
					</div>
				</section>

				<section class="flex gap-5">
					<picture>
						<div class="bg-[#313131] p-3 rounded-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="text-white text-[36px]"
								width="1em"
								height="1em"
								viewBox="0 0 24 24"
								{...$$props}
							>
								<path
									fill="currentColor"
									d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8z"
								/>
							</svg>
						</div>
					</picture>
					<div>
						<h1 class="text-white text-[28px] font-ESRebondGrotesqueTRIAL-ExtraBold">
							Crecimiento Escalable
						</h1>
						<p class="text-white/50 text-[16px]">
							Nuestras soluciones se adaptan al ritmo de tu negocio, permitiendo una expansión sin
							problemas y un ajuste fácil a las demandas del mercado en constante cambio.
						</p>
					</div>
				</section>
			</article>
		</section>
	</div>
</section>

<!--section why Enkode -->
<section class="static">
	<div class="container py-20">
		<h1
			class=" text-[56px] text-center font-ESRebondGrotesqueTRIAL-Medium font-semibold text-transparent
      bg-clip-text bg-gradient-to-r from-white to-white/70
      "
		>
			Por qué Nuvix es tu Elección Principal
		</h1>
		<p class="text-[#D2D0DD] text-xl text-center">
			En Nuvix, nos dedicamos a ofrecer soluciones SaaS de calidad superior que transforman la
			manera en que gestionas tu negocio. Nuestra combinación de tecnología avanzada, atención al
			cliente excepcional y un enfoque en resultados tangibles nos convierte en tu aliado perfecto
			para alcanzar el éxito empresarial.
		</p>

		<!--card why Enkode-->
		<article class="flex flex-col gap-10 mt-10">
			<section
				class="flex flex-col lg:flex-row justify-center items-center rounded-2xl gap-14 p-6"
				style="background: linear-gradient(113.01deg, #1C1C1C 0%, #3D3D3D 45.8%, #454545 100%);
          "
			>
				<picture>
					<div class="p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-white text-[70px]"
							width="1em"
							height="1em"
							viewBox="0 0 20 20"
							{...$$props}
						>
							<path
								fill="currentColor"
								d="M10 4.5a6.5 6.5 0 0 0-4.601 11.091a.75.75 0 1 1-1.062 1.06a8 8 0 1 1 13.632-6.355a3 3 0 0 0-1.756-1.21A6.5 6.5 0 0 0 10 4.5m4.637 4.626A5.002 5.002 0 0 0 5 11c0 1.377.558 2.626 1.458 3.53a.75.75 0 0 0 1.063-1.06a3.5 3.5 0 1 1 5.811-3.544a3 3 0 0 1 1.305-.8M8 11a2 2 0 1 1 4 0a2 2 0 0 1-4 0m9.5 1a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"
							/>
						</svg>
					</div>
				</picture>

				<div class="flex flex-col gap-4">
					<h1 class="text-white text-[28px] font-ESRebondGrotesqueTRIAL-Medium font-semibold">
						Claridad y Confianza en Cada Paso
					</h1>
					<p class="text-[16px] text-white/50">
						En Nuvix, creemos en la importancia de la transparencia. Mantenemos una comunicación
						abierta y honesta con nuestros clientes, garantizando que estés siempre informado sobre
						el estado de tus proyectos y los resultados que puedes esperar. Nuestra filosofía de
						transparencia asegura que trabajamos juntos hacia objetivos comunes.
					</p>
				</div>
			</section>

			<section
				class="flex flex-col lg:flex-row justify-center items-center rounded-2xl gap-14 p-6"
				style="background: linear-gradient(113.01deg, #1C1C1C 0%, #3D3D3D 45.8%, #454545 100%);
          "
			>
				<picture>
					<div class="p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-[60px] text-white"
							width="1em"
							height="1em"
							viewBox="0 0 36 36"
							{...$$props}
						>
							<path
								fill="currentColor"
								d="M12 16.14h-.87a8.67 8.67 0 0 0-6.43 2.52l-.24.28v8.28h4.08v-4.7l.55-.62l.25-.29a11 11 0 0 1 4.71-2.86A6.59 6.59 0 0 1 12 16.14"
								class="clr-i-solid clr-i-solid-path-1"
							/>
							<path
								fill="currentColor"
								d="M31.34 18.63a8.67 8.67 0 0 0-6.43-2.52a10.47 10.47 0 0 0-1.09.06a6.59 6.59 0 0 1-2 2.45a10.91 10.91 0 0 1 5 3l.25.28l.54.62v4.71h3.94v-8.32Z"
								class="clr-i-solid clr-i-solid-path-2"
							/>
							<path
								fill="currentColor"
								d="M11.1 14.19h.31a6.45 6.45 0 0 1 3.11-6.29a4.09 4.09 0 1 0-3.42 6.33Z"
								class="clr-i-solid clr-i-solid-path-3"
							/>
							<path
								fill="currentColor"
								d="M24.43 13.44a6.54 6.54 0 0 1 0 .69a4.09 4.09 0 0 0 .58.05h.19A4.09 4.09 0 1 0 21.47 8a6.53 6.53 0 0 1 2.96 5.44"
								class="clr-i-solid clr-i-solid-path-4"
							/>
							<circle
								cx="17.87"
								cy="13.45"
								r="4.47"
								fill="currentColor"
								class="clr-i-solid clr-i-solid-path-5"
							/>
							<path
								fill="currentColor"
								d="M18.11 20.3A9.69 9.69 0 0 0 11 23l-.25.28v6.33a1.57 1.57 0 0 0 1.6 1.54h11.49a1.57 1.57 0 0 0 1.6-1.54V23.3l-.24-.3a9.58 9.58 0 0 0-7.09-2.7"
								class="clr-i-solid clr-i-solid-path-6"
							/>
							<path fill="none" d="M0 0h36v36H0z" />
						</svg>
					</div>
				</picture>
				<div class="flex flex-col gap-4">
					<h1 class="text-white text-[28px] font-ESRebondGrotesqueTRIAL-Medium font-semibold">
						Conoce a Nuestros Expertos
					</h1>
					<p class="text-[16px] text-white/50">
						Nuestro equipo está compuesto por profesionales altamente calificados y apasionados por
						la tecnología. Cada miembro de nuestro equipo aporta una vasta experiencia y un enfoque
						dedicado para ofrecer soluciones innovadoras y eficaces. Con ENKODE, tienes a los
						mejores expertos trabajando para ti.
					</p>
				</div>
			</section>

			<section
				class="flex flex-col lg:flex-row justify-center items-center rounded-2xl gap-14 p-6"
				style="background: linear-gradient(113.01deg, #1C1C1C 0%, #3D3D3D 45.8%, #454545 100%);
          "
			>
				<picture>
					<div class="p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-[60px] text-white"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							{...$$props}
						>
							<g fill="none" stroke="currentColor" stroke-width="1.5">
								<circle cx="16" cy="8" r="2" />
								<path
									stroke-linecap="round"
									d="m2 12.5l1.752-1.533a2.3 2.3 0 0 1 3.14.105l4.29 4.29a2 2 0 0 0 2.564.222l.299-.21a3 3 0 0 1 3.731.225L21 18.5"
								/>
								<path
									stroke-linecap="round"
									d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
								/>
							</g>
						</svg>
					</div>
				</picture>
				<div class="flex flex-col gap-4">
					<h1 class="text-white text-[28px] font-ESRebondGrotesqueTRIAL-Medium font-semibold">
						Resultados que Transforman tu Negocio
					</h1>
					<p class="text-[16px] text-white/50">
						Con Nuvix, puedes esperar resultados medibles que impactan positivamente en tu negocio.
						Desde el aumento de la eficiencia operativa hasta la mejora de la seguridad de tus
						datos, nuestras soluciones están diseñadas para generar un crecimiento sostenible y una
						ventaja competitiva en tu industria.
					</p>
				</div>
			</section>
		</article>
	</div>
</section>
