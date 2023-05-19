<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import { dark } from "../stores";
    import me from '$lib/images/me.jpg'

    // MobileNavbar
    export let open = false
    // Navbar underline
    let currentPage = 'about'
    
</script>

<Navbar bind:open bind:currentPage/>
<div class="flex flex-col items-center py-10 transition-all duration-1000 {$dark ? ' bg-lampblack' : 'bg-slate-200'} {$dark ? 'text-slate-200' : 'text-black'} font-quicksand">
    <!-- https://svelte.dev/repl/62235b43f41948d4bd2b03221668a246?version=3.31.0 -->
    <p class="text-2xl lg:text-4xl font-bold mb-2 underline decoration-green-500">About me</p>
    <div class="flex flex-wrap mb-36 p-4 justify-center gap-5">
        <img class="w-72 border-2 border-green-500 rounded-2xl pointer-events-none" src={me} alt="me">
        <div class="lg:text-lg lg:w-[50rem]">
            <p class="text-xl lg:text-2xl font-bold">Jake Brian Yap</p>
            <p class="text-lg lg:text-xl">Aspiring Software Developer</p>
            <br>
            <p>I'm a gradwaiting student taking a Bachelor's Degree in Information Technology at Filamer Christian University.</p>
            <br>
            <p>I have various hobbies which are tinkering with computers; hardware and software, android phones, playing games, editing videos and writing codes. I learned a lot of programming languages in school too like Java, C#, Python, Flutter, PHP etc. I have recently started doing web-development and back-end development too and finds it very interesting starting with React.</p>
            <br>
            <p>Tl;dr I'm a tech person!</p>
        </div>
    </div>
    <p class="text-2xl lg:text-4xl font-bold underline">My timeline</p>
    <div class="flex flex-col gap-y-14 p-4 lg:w-[60rem] lg:text-lg">
        <!-- <a class="underline decoration-green-500 font-bold" href="" referrerpolicy="no-referrer" target="_blank"></a> -->
        <div class="border-t-2">
            <p class="text-xl lg:text-2xl font-bold mb-2">2023</p>
            <ul class="list-inside list-disc">
                <li>Started On-The-Job Internship at <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://www.coderstribe.net/" referrerpolicy="no-referrer" target="_blank">Coders Tribe</a>.</li>
                <li>Learned <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://svelte.dev/" referrerpolicy="no-referrer" target="_blank">Svelte</a> and <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://kit.svelte.dev/" referrerpolicy="no-referrer" target="_blank">SvelteKit.</a></li>
                <li>Waiting for graduation!</li>
            </ul>
        </div>
        <div class="border-t-2">
            <p class="text-2xl font-bold mb-2">2022</p>
            <ul class="list-inside list-disc">
                <li>Learned <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://flutter.dev/" referrerpolicy="no-referrer" target="_blank">Flutter</a> and <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://www.php.net/" referrerpolicy="no-referrer" target="_blank">PHP.</a></li>
                <li>Learned React and Tailwind and</li>
                <li>Created the <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://projectarcana-aosp.netlify.app/" referrerpolicy="no-referrer" target="_blank">Project Arcana</a> website for the first time.</li>
                <li>Created the <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://tracker-capstone.netlify.app/" referrerpolicy="no-referrer" target="_blank">Agtatacay Sur Tracker</a> for capstone.</li>
                <li>Created the <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://github.com/iaiaian1/Soulsborne-Save-Manager" referrerpolicy="no-referrer" target="_blank">Soulsborne Save Manager.</a></li>
                <li>Passed the Civil Service Examination - Professional.</li>
            </ul>
        </div>
        <div class="border-t-2">
            <p class="text-xl lg:text-2xl font-bold mb-2">2021</p>
            <ul class="list-inside list-disc">
                <li>Learned C# and C# forms.</li>
                <li>Created a <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://github.com/iaiaian1/POS" referrerpolicy="no-referrer" target="_blank">Point of Sales</a> system in C#.</li>
                <li>Started learning HTML, CSS and Javascript seriously.</li>
                <li>Made some random projects like <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://github.com/iaiaian1/vanilla-JS-todo" referrerpolicy="no-referrer" target="_blank">to-do app</a>, <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://github.com/iaiaian1/Website-template" referrerpolicy="no-referrer" target="_blank">template</a>, and <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://github.com/iaiaian1/VERY-Simple_portfolio" referrerpolicy="no-referrer" target="_blank">html portfolio.</a></li>
                <li>Learned <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://git-scm.com/" referrerpolicy="no-referrer" target="_blank">Git</a> and Github version control.</li>
            </ul>
        </div>
        <div class="border-t-2">
            <p class="text-xl lg:text-2xl font-bold mb-2">2020</p>
            <ul class="list-inside list-disc">
                <li>Learned <a class="underline decoration-green-500 font-bold transition-all duration-300 hover:decoration-green-600" href="https://www.python.org/" referrerpolicy="no-referrer" target="_blank">Python.</a></li>
            </ul>
        </div>
        <div class="border-t-2">
            <p class="text-xl lg:text-2xl font-bold mb-2">2019</p>
            <ul class="list-inside list-disc">
                <li>Learned Photoshop.</li>
                <li>Placed 2nd on a vlog editing contest.</li>
            </ul>
        </div>
        <div class="border-t-2">
            <p class="text-xl lg:text-2xl font-bold mb-2">2018</p>
            <ul class="list-inside list-disc">
                <li>Transferred to a programming class.</li>
                <li>Learned Java as my very first programming language.</li>
                <li>Learned Premiere Pro for video editing.</li>
            </ul>
        </div>
    </div>
</div>
<Footer/>