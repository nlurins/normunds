<script>
	import Projects from "../components/Projects.svelte";
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
		<a href="#projects"><button type="button" class="h-20 w-20 rounded-full bg-white shadow-2xl">ss</button></a>
	</div>
</div>
<Projects />
