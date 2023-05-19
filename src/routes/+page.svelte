<script>
    import { onMount } from "svelte/internal";
    import { fade, fly } from 'svelte/transition';
    import { spring, tweened } from "svelte/motion"
    import { cubicOut, backIn } from 'svelte/easing';
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

    // let scrollY = tweened(0 , {
	// 	duration: 400,
	// 	easing: backIn
	// });
    let scrollY = spring(0 , {
		stiffness: 0.15,
		damping: 0.8
	});

    let currentProject = 'Arcana';
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
                    // console.log('intersected')
                    // entry.target.classList.remove("w-14")
                    // entry.target.classList.add("transition-all", "w-20")
                    // observer2.unobserve(entry.target)
                        entry.target.classList.remove("scale-0", "rotate-45")
                        entry.target.classList.add("transition-all", "duration-500", "scale-100")
                        observer2.unobserve(entry.target)
                    }
                }, 300 * index );
            })

            // setTimeout(() => {
            //     entries.forEach((entry) => {
            //         if()
            //     });
            // }, 500);
        },{
            threshold: 1,
        })

        animated.forEach(element => {
            observer.observe(element)
        });

        animatedIntersect.forEach(element => {
            observer2.observe(element)
        })

        // const animated1 = document.querySelectorAll('.animated1')
        // const animated2 = document.querySelectorAll('.animated2')
        // const animated3 = document.querySelectorAll('.animated3')
        // const animated4 = document.querySelectorAll('.animated4')

        // const observer = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if(entry.isIntersecting){
        //             // intersect1 = entry.intersectionRatio + 1
        //             intersect1 = parseFloat(entry.intersectionRatio.toFixed(2).toString().split('.')[1])
        //             if(intersect1 < 40){
        //                 intersect1 = 0
        //             }
        //         }
        //     })
        // },{
        //     // Sets the threshold of visibility of when to execute
        //     // 1 = 100%, 0 = 1pixel.
        //     threshold: [0, .25, .5, .75, 1],
        // })

        // const observer2 = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if(entry.isIntersecting){
        //             intersect2 = parseFloat(entry.intersectionRatio.toFixed(2).toString().split('.')[1])
        //             if(intersect2 < 35){
        //                 intersect2 = 0
        //             }
        //         }
        //     })
        // },{
        //     // Sets the threshold of visibility of when to execute
        //     // 1 = 100%, 0 = 1pixel.
        //     threshold: [0, .25, .5, .75, 1],
        // })

        // const observer3 = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if(entry.isIntersecting){
        //             intersect3 = parseFloat(entry.intersectionRatio.toFixed(2).toString().split('.')[1])
        //             if(intersect3 < 35){
        //                 intersect3 = 0
        //             }
        //         }
        //     })
        // },{
        //     // Sets the threshold of visibility of when to execute
        //     // 1 = 100%, 0 = 1pixel.
        //     threshold: [0, .25, .5, .75, 1],
        // })

        // const observer4 = new IntersectionObserver((entries) => {
        //     entries.forEach(entry => {
        //         if(entry.isIntersecting){
        //             intersect4= parseFloat(entry.intersectionRatio.toFixed(2).toString().split('.')[1])
        //             if(intersect4 < 35){
        //                 intersect4 = 0
        //             }
        //         }
        //     })
        // },{
        //     // Sets the threshold of visibility of when to execute
        //     // 1 = 100%, 0 = 1pixel.
        //     threshold: [0, .25, .5, .75, 1],
        // })

        // animated1.forEach(element => {
        //     observer.observe(element)
        // });

        // animated2.forEach(element => {
        //     observer2.observe(element)
        // });
        // animated3.forEach(element => {
        //     observer3.observe(element)
        // });
        // animated4.forEach(element => {
        //     observer.observe(element)
        // });
    }

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
            <p class="text-5xl md:text-7xl font-quicksand mb-2">Jake Brian Yap (@iaiaian1)</p>
            <p class="text-3xl md:text-5xl font-nanum text-green-500">I code and edit stuffs.</p>
            <!-- <p class="text-3xl md:text-5xl font-nanum {$dark ? ' text-green-500' : 'text-green-800'}">I code and edit stuffs.</p> -->
        </div>
    </div>
</div>

<!-- 2nd screen -->
<div class="flex flex-col justify-center items-center p-4 transition-all duration-1000 {$dark ? ' bg-neutralBlackC' : 'bg-slate-200'} {$dark ? ' text-white' : 'text-black'}">
    <p class="font-quicksand font-bold text-2xl lg:text-5xl border-b-4 border-green-500 mb-10 lg:mb-20">Projects I have worked on.</p>

    <div class="flex flex-col lg:flex-row gap-x-10 justify-around w-full">
        <div class="flex flex-col sticky h-full w-full lg:w-[35rem] lg:my-72 top-0 lg:top-1/2 py-10 lg:p-auto z-10 font-quicksand text-lg lg:text-3xl lg:order-last text-center lg:text-start {$dark ? ' bg-neutralBlackC' : 'bg-slate-200'}">
            <a href="https://projectarcana-aosp.netlify.app/" target="_blank" referrerpolicy="no-referrer" class="transition-all duration-500 {activeInterectText == "Arcana" ? "font-bold text-2xl lg:text-4xl text-green-500 cursor-pointer" : "pointer-events-none"}">Project-Arcana Custom Rom</a>
            <a href="https://tracker-capstone.netlify.app/" target="_blank" referrerpolicy="no-referrer" class="transition-all duration-500 {activeInterectText == "Agtatacay" ? "font-bold text-2xl lg:text-4xl text-green-500 cursor-pointer" : "pointer-events-none"}">Agtatacay Sur Tracker</a>
            <a href="https://github.com/iaiaian1/POS" target="_blank" referrerpolicy="no-referrer" class="transition-all duration-500 {activeInterectText == "POS" ? "font-bold text-2xl lg:text-4xl text-green-500 cursor-pointer" : "pointer-events-none"}">JVS POS System</a>
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
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="w-12 lg:w-14 {$dark ? ' invert' : ''} scale-0 rotate-45 animatedIntersect" alt="github"/>
    </div>

    <p class="font-quicksand text-2xl lg:text-5xl mb-8">editing/media softwares 🎬</p>
    <div class="grid grid-cols-3 gap-10">
        <img src="https://img.icons8.com/color/96/null/adobe-premiere-pro--v1.png" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="premiere"/>
        <img src="https://img.icons8.com/color/96/null/adobe-photoshop--v1.png" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="photoshop"/>
        <img src="https://img.icons8.com/ios-filled/100/null/obs-studio.png" class="w-12 lg:w-14 scale-0 rotate-45 animatedIntersect" alt="obs"/> 
    </div>    
</div>
<Footer/>