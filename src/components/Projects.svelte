<script>
	import { fly, fade } from 'svelte/transition'
</script>

<div id="projects" class="container flex flex-col mx-auto pb-6 ">
	<div
		
	class="container flex flex-col xl:flex-row bg-white text-black font-montserrat w-full h-[620px] shadow-xl"
	>
		<div class="xl:w-[40%] p-10 flex flex-col items-center justify-between">
			<div>
				<h2 class="font-permanent text-6xl mb-20 text-center">Weather app</h2>
				<p class="lg:text-2xl text-xl">
					"A simple weather app I made to use a home page for my web browser, I looked towards a
					pleasing aesthetic as well as simple functionality, in this case I used openweathermap API
					to get data and load basic weather information, this app accepts a search value of a city
					to fetch new data at any time. Technologies used: Javascript, Tailwind"
				</p>
			</div>
			<div class="flex gap-20 mt-10 font-bold tracking-wider text-xl">
				<a href="https://nlurins.github.io/weather/" target="_blank"
					><button
						class="border p-4 w-40 rounded-sm bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white shadow-sm hover:scale-110 hover:shadow-lg transition transform"
						>LIVE</button
					></a
				>
				<a href="https://github.com/nlurins/odin-project/tree/main/weather" target="_blank"
					><button
						class="border p-4 w-40 rounded-sm bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white shadow-sm hover:scale-110 hover:shadow-lg transition transform"
						>REPO</button
					></a
				>
			</div>
		</div>
		<div class="bg-[url('https://normunds.vercel.app/weather.png')] bg-cover w-[60%]" />
	</div>

	<div
		class="container flex flex-col lg:flex-row bg-white text-black font-montserrat w-full h-[620px] my-10 shadow-xl"
	>
		<div class="bg-[url('https://normunds.vercel.app/partshop.png')] bg-cover w-[60%]" />
		<div class="xl:w-[40%] p-10 flex flex-col items-center justify-between">
			<div>
				<h2 class="font-permanent text-6xl mb-20 text-center">Car parts & more</h2>
				<p class="lg:text-2xl text-xl">
					"Built in React, a somewhat complete e-commerce website with mock products, products in
					this case sent in as json objects, functionality includes working cart, product filtering,
					instock/ out of stock filtering e.t.c. Technologies used: React, Next.js, Tailwind"
				</p>
			</div>
			<div class="flex gap-20 mt-10 font-bold tracking-wider text-xl">
				<a href="https://partshop.vercel.app" target="_blank"
					><button
						class="border p-4 w-40 rounded-sm bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white shadow-sm hover:scale-110 hover:shadow-lg transition transform"
						>LIVE</button
					></a
				>
				<a href="https://github.com/nlurins/partshop" target="_blank"
					><button
						class="border p-4 w-40 rounded-sm bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white shadow-sm hover:scale-110 hover:shadow-lg transition transform"
						>REPO</button
					></a
				>
			</div>
		</div>
	</div>
	<div
		class="container flex flex-col lg:flex-row bg-white text-black font-montserrat w-full h-[620px] shadow-xl"
	>
		<div class="xl:w-[40%] p-10 flex flex-col items-center justify-between">
			<div>
				<h2 class="font-permanent text-6xl mb-20 text-center">Pokedex</h2>
				<p class="lg:text-2xl text-xl">
					"A pokemon database using the Pokemon API to load info about pokemon, in this case using
					dynamic routing provided by SvelteKIT to generate an individual page for each pokemon
					containing extra information. Technologies used: SvelteKIT, Tailwind"
				</p>
			</div>
			<div class="flex gap-20 mt-10 font-bold tracking-wider text-xl">
				<a href="https://pokedex-omega-roan.vercel.app/" target="_blank"
					><button
						class="border p-4 w-40 rounded-sm bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white shadow-sm hover:scale-110 hover:shadow-lg transition transform"
						>LIVE</button
					></a
				>
				<a href="https://github.com/nlurins/pokedex" target="_blank"
					><button
						class="border p-4 w-40 rounded-sm bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white shadow-sm hover:scale-110 hover:shadow-lg transition transform"
						>REPO</button
					></a
				>
			</div>
		</div>
		<div class="bg-[url('https://normunds.vercel.app/pokedex.png')] bg-cover w-[60%]" />
	</div>

	<div
		class="container flex flex-col lg:flex-row bg-white text-black font-montserrat w-full h-[620px] my-10 shadow-xl"
	>
		<div class="bg-[url('https://normunds.vercel.app/cv.png')] bg-cover w-[60%]" />
		<div class="xl:w-[40%] p-10 flex flex-col items-center justify-between">
			<div>
				<h2 class="font-permanent text-6xl mb-20 text-center">CV Builder app</h2>
				<p class="lg:text-2xl text-xl">
					"A CV builder in React - accepts personal data in one page and generates a CV with the
					provided data according to a template made by me in another page, made in a way to accept
					other entries in the future and or other templates for CV design. Technologies used:
					React, Tailwind"
				</p>
			</div>
			<div class="flex gap-20 mt-10 font-bold tracking-wider text-xl">
				<a href="https://animated-sopapillas-e2410e.netlify.app/" target="_blank"
					><button
						class="border p-4 w-40 rounded-sm bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white shadow-sm hover:scale-110 hover:shadow-lg transition transform"
						>LIVE</button
					></a
				>
				<a href="https://github.com/nlurins/odin-project/tree/main/cvapp" target="_blank"
					><button
						class="border p-4 w-40 rounded-sm bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white shadow-sm hover:scale-110 hover:shadow-lg transition transform"
						>REPO</button
					></a
				>
			</div>
		</div>
	</div>
</div>
