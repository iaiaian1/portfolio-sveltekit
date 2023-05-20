<script>
	import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
	import { dark } from "../stores";

    export let open = false
    let currentPage = 'gears'

</script>

<Navbar bind:open bind:currentPage/>
<div class="flex flex-col items-center py-10 transition-all duration-1000 {$dark ? 'text-slate-200 bg-neutralBlackC' : 'text-black bg-slate-200'} font-quicksand">
    <p class="text-2xl lg:text-4xl font-bold mb-10 border-b-2 border-green-500 self-center">Gears and Peripherals</p>
    <div class="flex flex-col gap-y-8 lg:w-[60rem] lg:text-lg px-2">
        <div class="">
            <p class="mb-2 text-xl lg:text-2xl font-bold">Desktop PC (Workhorse) 💪</p>
            <ul class="list-inside list-disc">
                <li><span class="font-bold">CPU:</span> i5 - 4460k.</li>
                <li><span class="font-bold">MOBO:</span> ASUS H81M-A.</li>
                <li><span class="font-bold">RAM: </span>12gb DDR3</li>
                <li><span class="font-bold">GPU:</span> Sapphire RX560 4gb (AmernimeZ).</li>
                <li><span class="font-bold">Case:</span> Rakk Kisig.</li>
                <li><span class="font-bold">CPU Cooler:</span> Deepcool.</li>
            </ul>
        </div>
        <div class="">
            <p class="mb-2 text-xl lg:text-2xl font-bold">Peripherals 🎧</p>
            <ul class="list-inside list-disc">
                <li><span class="font-bold">Keyboard:</span> Redragon K552 KUMARA (Red only, no RGB.).</li>
                <li><span class="font-bold">Mouse:</span> Rakk Kaptan.</li>
                <li><span class="font-bold">Headset:</span> Fantech Sniper.</li>
                <li><span class="font-bold">Speaker:</span> F&D U213A.</li>
                <li><span class="font-bold">Controller:</span> Fantech Shooter II GP13.</li>
            </ul>
        </div>
        <div class="">
            <p class="mb-2 text-xl lg:text-2xl font-bold">Softwares 💿</p>
            <ul class="list-inside list-disc">
                <li><span class="font-bold">Microsoft Edge</span> for browsing and testing.</li>
                <li><span class="font-bold">qBittorrent</span> , open-source torrent client.</li>
                <li><span class="font-bold">VSCode</span> on default settings.</li>
                <li><span class="font-bold">Discord</span> for gaming.</li>
                <li><span class="font-bold">Spotify</span> for music.</li>
            </ul>
        </div>
        <p>Note: Specs not that great but gets the job done!</p>
    </div>
</div>
<Footer/>