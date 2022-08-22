<script>
	import Footer from '../components/Footer.svelte';
	import Projects from '../components/Projects.svelte';
</script>

<svelte:head>
	<title>Portfolio | N. Lurins</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&family=Pacifico&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex flex-col hero container min-h-screen max-w-screen lg:py-20 mx-auto text-center">
	<h1 class="text-9xl text-white font-permanent">Normunds Lūriņš</h1>
	<div class="font-montserrat font-thin text-white text-9xl pt-24 text-center tracking-tighter">
		<h2><span class="font-normal">[ </span>FRONT-END <span class="font-normal"> ]</span></h2>
		<h2 class="font-normal">...and more<span class="animate-pingcursor"> |</span></h2>
	</div>
	<div class="flex flex-col mx-auto justify-center items-center gap-10 mt-28">
		<h1 class="text-5xl font-permanent text-white ">Projects..</h1>
		<a href="#projects"
			><button
				type="button"
				class="animate-bounce h-20 w-20 rounded-full bg-white shadow-2xl hover:bg-blue-100"
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><defs
						><style>
							.cls-1 {
								fill: #fff;
								opacity: 0;
							}
							.cls-2 {
								fill: #231f20;
							}
						</style></defs
					><title>arrow-down</title><g id="Layer_2" data-name="Layer 2"
						><g id="arrow-down"
							><g id="arrow-down-2" data-name="arrow-down"
								><rect class="cls-1" width="24" height="24" /><path
									class="cls-2"
									d="M18.77,13.36a1,1,0,0,0-1.41-.13L13,16.86V5a1,1,0,0,0-2,0V16.86L6.64,13.23a1,1,0,1,0-1.28,1.54l6,5,.15.09.13.07a1,1,0,0,0,.72,0l.13-.07.15-.09,6-5A1,1,0,0,0,18.77,13.36Z"
								/></g
							></g
						></g
					></svg
				>
			</button></a
		>
	</div>
</div>
<Projects />
<Footer />
