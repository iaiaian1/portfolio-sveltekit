<script>
    import Hamburger from '$lib/components/Hamburger.svelte';
    import MobileNavbar from "$lib/components/MobileNavbar.svelte"

    import night from '../images/night.svg'
    import day from '../images/day.svg'
    import { dark } from '../../routes/stores';

    export let open = false;
    export let currentPage = ''


    function toggleTheme() {
        dark.update(value => !value);
        // () => {dark.update(value => !value)}
    }

</script>

<div class="flex justify-between lg:justify-around py-6 px-4 transition-all duration-1000 {$dark ? 'bg-lampblack text-white' : 'text-black bg-slate-200'} font-quicksand text-lg font-bold">
    <button class="p-2 rounded-lg lg:order-last" on:click={toggleTheme}> <img src={$dark ? night : day} alt="" class="w-8 transform transition duration-500 ease-in-out fill-white {$dark ? 'rotate-45' : 'rotate-90'}"></button>
    <div class="hidden lg:flex items-center gap-x-5">
        <div class="group">
            <a href="/" class="mx-1">JBY.</a>
            <div class="border-t-2 border-green-500 transition-all ease-in-out duration-500 {currentPage == "/" ? "w-full" : "w-0"} group-hover:w-full"></div>
        </div>
        <div class="group">
            <a href="/about" class="mx-1">About me.</a>
            <div class="border-t-2 border-green-500 transition-all ease-in-out duration-500 {currentPage == "about" ? "w-full" : "w-0"} group-hover:w-full"></div>
        </div>
        <div class="group">
            <a href="/gears" class="mx-1">Gears.</a>
            <div class="border-t-2 border-green-500 transition-all ease-in-out duration-500 {currentPage == "gears" ? "w-full" : "w-0"} group-hover:w-full"></div>
        </div>
    </div>
    <div class="flex lg:hidden justify-center items-center w-10">
        <Hamburger bind:open/>
    </div>
</div>

<MobileNavbar bind:open bind:currentPage/>
