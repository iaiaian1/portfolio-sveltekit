<script>
    import { afterUpdate, onMount } from "svelte/internal";
    import { spring } from "svelte/motion"
    import { dark } from "./stores";
	
    import Navbar from "$lib/components/Navbar.svelte";
    
    import Arcana from "$lib/components/projects/Arcana.svelte";
    import Agtatacay from "$lib/components/projects/Agtatacay.svelte";
    import POS from "$lib/components/projects/POS.svelte";
    import Soulsborne from "$lib/components/projects/Soulsborne.svelte";
    import Footer from "$lib/components/Footer.svelte";

    // MobileNavbar
    export let open = false
    // Navbar underline
    let currentPage = '/';

    let scrollY = spring(0 , {
        stiffness: 0.15,
        damping: 0.8
    });

    let scroll = 0;

    let intersect1 = 0;
    let intersect2 = 0;
    let intersect3 = 0;
    let intersect4 = 0;
    let activeInterectText = "Arcana";

    // Intersect animation
    const intersectAnimation = async() => {
        const animated = document.querySelectorAll('.animated')
        const animatedIntersect = document.querySelectorAll('.animatedIntersect')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(entry.target.classList.contains('name-text')){
                        entry.target.classList.remove('-translate-x-32', 'opacity-0')
                        entry.target.classList.add('transition', 'duration-[1500ms]', 'ease-in-out')
                        observer.unobserve(entry.target)
                    }
                    if(entry.target.classList.contains('desc-text')){
                        entry.target.classList.remove('-translate-y-14', 'opacity-0', 'text-white')
                        entry.target.classList.add('transition', 'duration-[2000ms]', 'ease-in-out', 'text-green-500')
                        observer.unobserve(entry.target)
                    }
                    if(entry.target.classList.contains('resume-button')){
                        entry.target.classList.remove('-translate-y-20', 'opacity-0', 'text-green-500')
                        entry.target.classList.add('transition', 'duration-[2000ms]', 'ease-in-out', 'text-white')
                        observer.unobserve(entry.target)
                    }

                    if(entry.target.classList.contains('intersect1')){
                        activeInterectText = "Arcana"
                        intersect1 = Math.round(entry.intersectionRatio * 100) + 25
                        intersect2 = 0
                        intersect3 = 0
                        intersect4 = 0
                    }
                    if(entry.target.classList.contains('intersect2')){
                        activeInterectText = "Agtatacay"
                        intersect2 = Math.round(entry.intersectionRatio * 100) + 25
                        intersect1 = 0
                        intersect3 = 0
                        intersect4 = 0
                    }
                    if(entry.target.classList.contains('intersect3')){
                        activeInterectText = "POS"
                        intersect3 = Math.round(entry.intersectionRatio * 100) + 25
                        intersect1 = 0
                        intersect2 = 0
                        intersect4 = 0
                    }
                    if(entry.target.classList.contains('intersect4')){
                        activeInterectText = "Soulsborne"
                        intersect4 = Math.round(entry.intersectionRatio * 100) + 25
                        intersect1 = 0
                        intersect2 = 0
                        intersect3 = 0
                    }
                }
            })
        },{
            // Sets the threshold of visibility of when to execute
            // 1 = 100%, 0 = 1pixel.
            threshold: [ .25, .5, .8],
        })

        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                setTimeout(() => {
                    if(entry.isIntersecting){
                        entry.target.classList.remove("scale-0", "rotate-45")
                        entry.target.classList.add("transition-all", "duration-500", "scale-100")
                        observer2.unobserve(entry.target)
                    }
                }, 300 * index );
            })
        },{
            threshold: 1,
        })

        animated.forEach(element => {
            observer.observe(element)
        });

        animatedIntersect.forEach(element => {
            observer2.observe(element)
        })
    }

    // {$dark ? 'invert' : ''} is not working, this is a workaround to apply invert after DOM is updated when $dark value changes to true. original img is dark.
    afterUpdate(() => {
        const image = document.querySelector(".github");
        if (image) {
            image.classList.toggle("invert", $dark);
        }
    })

    onMount(async () =>{
        intersectAnimation()
        window.addEventListener('scroll', () => {
            scrollY.set(window.pageYOffset * .2)
        })
    })

</script>

<svelte:window bind:scrollY={scroll} />

<!-- 1st screen -->
<div class="h-screen transition-all duration-1000 {$dark ? ' bg-neutralBlackC' : 'bg-slate-200'}">
    <Navbar bind:open bind:currentPage/>
    <!-- https://svelte.dev/repl/62235b43f41948d4bd2b03221668a246?version=3.31.0 -->

    <div class="sticky top-1/2 mb-2 flex justify-center items-center {$dark ? ' text-white' : 'text-black'}" style="transform: translateY(-{$scrollY}px);">
        <div class="text-start mx-5">
            <p class="animated name-text -translate-x-32 opacity-0 text-5xl md:text-7xl font-quicksand mb-2">Jake Brian Yap (@iaiaian1)</p>
            <p class="animated desc-text -translate-y-14 opacity-0 text-3xl md:text-5xl font-nanum text-white">I code and edit stuffs.</p>
            <a href="/resume.pdf" target="_blank" referrerpolicy="no-referrer" class="animated resume-button -translate-y-20 opacity-0 flex items-center justify-center gap-1 border-4 w-28 border-green-900 rounded-3xl p-1 font-quicksand bg-green-500 font-bold text-green-500 hover:bg-green-900">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALtJREFUSEvtlNENgzAMRG3Z7EE3gVGYBEZhE9iE7BFsV0gURagQGoH6AfmNdS93Ogfh4oMX68PNACJiU6REdNj54cFJ+AFEG3vziLbsi0gDAPVGfi0RVeHdWmep6V6+IjIAQB4KmVnPzOUanAQws1xVuwDiiOj1zVUSYBIKIapaZlnWnwqYN7kxM8fM7Vankx1El2Qe+B9gHMcOEYujL92bCxu21NR7XyBifQLEqWr1KcFP33WKuwcQTe0NtnONGVOMsSwAAAAASUVORK5CYII="/>
                <p>resume</p>
            </a>
        </div>
    </div>
</div>

<!-- 2nd screen -->
<div class="flex flex-col justify-center items-center p-4 transition-all duration-1000 {$dark ? ' bg-neutralBlackC' : 'bg-slate-200'} {$dark ? ' text-white' : 'text-black'}">
    <p class="font-quicksand font-bold text-2xl lg:text-5xl border-b-2 border-green-500 mb-10 lg:mb-20">Projects I have worked on.</p>

    <div class="flex flex-col lg:flex-row gap-x-10 justify-around w-full">
        <div class="flex flex-col sticky h-full w-full lg:w-[35rem] lg:my-72 top-0 lg:top-1/2 py-10 lg:p-auto z-10 font-quicksand text-lg lg:text-3xl lg:order-last text-center lg:text-start {$dark ? ' bg-neutralBlackC' : 'bg-slate-200'}">
            <a href="https://projectarcana-aosp.netlify.app/" target="_blank" referrerpolicy="no-referrer" class="transition-all duration-500 {activeInterectText == "Arcana" ? "font-bold text-2xl lg:text-4xl text-green-500 cursor-pointer" : "pointer-events-none"}">Project-Arcana Custom Rom</a>
            <a href="https://tracker-capstone.netlify.app/" target="_blank" referrerpolicy="no-referrer" class="transition-all duration-500 {activeInterectText == "Agtatacay" ? "font-bold text-2xl lg:text-4xl text-green-500 cursor-pointer" : "pointer-events-none"}">Agtatacay Sur Tracker</a>
            <a href="https://github.com/iaiaian1/JVS-Point-of-Sales-System" target="_blank" referrerpolicy="no-referrer" class="transition-all duration-500 {activeInterectText == "POS" ? "font-bold text-2xl lg:text-4xl text-green-500 cursor-pointer" : "pointer-events-none"}">JVS POS System</a>
            <a href="https://github.com/iaiaian1/Soulsborne-Save-Manager" target="_blank" referrerpolicy="no-referrer" class="transition-all duration-500 {activeInterectText == "Soulsborne" ? "font-bold text-2xl lg:text-4xl text-green-500 cursor-pointer" : "pointer-events-none"}">Soulsborne Save Manager</a>
        </div>
        <div class="flex flex-col gap-y-[35rem] p-2 lg:p-auto">
            <div class="animated intersect1 flex flex-col justify-center items-center lg:items-start p-2 gap-y-2 transform duration-500 ease-out border-2 {$dark ? ' border-white' : 'border-neutralBlackC'} rounded-lg" style="opacity: {intersect1}%">
                <Arcana/>
                <div class="flex flex-wrap gap-2">
                    <p class="px-2 border-2 rounded-xl border-green-500">Node.js</p>
                    <p class="px-2 border-2 rounded-xl border-green-500">React.js</p>
                    <p class="px-2 border-2 rounded-xl border-green-500">Firebase</p>
                    <p class="px-2 border-2 rounded-xl border-green-500">TailwindCSS</p>
                </div>
            </div>
            <div class="animated intersect2 flex flex-col justify-center items-center lg:items-start p-2 gap-y-2 transform duration-500 ease-out border-2 {$dark ? ' border-white' : 'border-neutralBlackC'} rounded-lg" style="opacity: {intersect2}%">
                <Agtatacay/>
                <div class="flex flex-wrap gap-2">
                    <p class="px-2 border-2 rounded-xl border-green-500">Node.js</p>
                    <p class="px-2 border-2 rounded-xl border-green-500">React.js</p>
                    <p class="px-2 border-2 rounded-xl border-green-500">Firebase</p>
                    <p class="px-2 border-2 rounded-xl border-green-500">TailwindCSS</p>
                </div>
            </div>
            <div class="animated intersect3 flex flex-col justify-center items-center lg:items-start p-2 gap-y-2 transform duration-500 ease-out border-2 {$dark ? ' border-white' : 'border-neutralBlackC'} rounded-lg" style="opacity: {intersect3}%">
                <POS/>
                <div class="flex gap-2">
                    <p class="px-2 border-2 rounded-xl border-green-500">C#</p>
                    <p class="px-2 border-2 rounded-xl border-green-500">SQL</p>
                </div>
            </div>
            <div class="animated intersect4 flex flex-col justify-center items-center lg:items-start p-2 gap-y-2 transform duration-500 ease-out border-2 {$dark ? ' border-white' : 'border-neutralBlackC'} rounded-lg" style="opacity: {intersect4}%">
                <Soulsborne/>
                <div class="flex gap-2">
                    <p class="px-2 border-2 rounded-xl border-green-500">C#</p>
                </div>
            </div>  
        </div>
    </div>
</div>
<div class="flex flex-col items-center justify-center h-screen lg:py-20 {$dark ? ' bg-neutralBlackC' : 'bg-slate-200'} {$dark ? ' text-white' : 'text-black'} ">
    <p class="font-quicksand text-2xl lg:text-5xl mb-6">{'<languages/technologies 💻/>'}</p>
    <div class="grid grid-cols-3 lg:grid-cols-6 gap-10 mb-20 lg:mb-32">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="html5"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="css3"/>       
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="javascript"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="svelte"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="react"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="tailwindcss"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="firebase"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="flutter"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="node"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="mysql"/>        
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="git"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect github" alt="github"/>
    </div>

    <p class="font-quicksand text-2xl lg:text-5xl mb-8">editing/media softwares 🎬</p>
    <div class="grid grid-cols-3 gap-10">
        <img src="https://img.icons8.com/color/96/null/adobe-premiere-pro--v1.png" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="premiere"/>
        <img src="https://img.icons8.com/color/96/null/adobe-photoshop--v1.png" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="photoshop"/>
        <img src="https://img.icons8.com/ios-filled/100/null/obs-studio.png" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="obs"/> 
    </div>    
</div>
<Footer/>