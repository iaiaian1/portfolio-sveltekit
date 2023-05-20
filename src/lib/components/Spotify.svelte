<script>
// @ts-nocheck
	import { onMount } from "svelte";

    let nowPlayingData = {}
    // $: console.log(nowPlayingData)

    const getNowPlaying = async() =>{
        try {
			let response = await fetch('api/spotify', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
            let data = await response.json();
            nowPlayingData = data

		} catch (error) {
			console.log('error', error)
		}
    }

    // setInterval(() => {
    //     getNowPlaying()
    // }, 180000);

    onMount(() => {
        getNowPlaying()
    })
</script>
<div class="w-56 lg:w-80 flex items-center justify-start gap-x-1 overflow-hidden bg-green-800 rounded-lg p-1 text-white">
    {#if nowPlayingData.status == "Success" }
    <img class="w-8 h-8 animate-spin-slow" width="48" height="48" src="https://img.icons8.com/fluency/48/spotify.png" alt="spotify"/>
    <div class="flex flex-col text-sm">
        <!-- <img class="w-8" src={nowPlayingData.nowPlaying.item.album.images[0].url} alt=""> -->
        <p class="truncate font-bold">{nowPlayingData?.nowPlaying.item.name}</p>
        <p class="truncate font-normal">{nowPlayingData?.nowPlaying.item.artists[0].name}</p>
    </div>
    {:else}
        <img class="w-8 h-8" width="48" height="48" src="https://img.icons8.com/fluency/48/spotify.png" alt="spotify"/>
        <p class="text-lg">Not playing anything</p>
    {/if}
</div>