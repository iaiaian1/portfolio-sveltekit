<script>
    import { dark } from '../../routes/stores';
	import Spotify from './Spotify.svelte';
    export let currentPage = ''
    export let open = false;
</script>

<div class="aside absolute lg:hidden top-0 w-full h-full flex flex-col items-center justify-center gap-y-10 z-10 font-quicksand text-2xl font-bold {open ? "open" : ""} {$dark ? ' bg-lampblack text-white' : 'bg-slate-200 text-black'}">
    <!-- <img src={faith_logo_white} alt="faith_logo" class="h-28"> -->
    <div class="flex flex-col items-center gap-y-10">
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
        <Spotify/>
    </div>
    <!-- <div class="flex justify-center items-center gap-2">
        <a href="mailto:yapjakebrian1@gmail.com">
            <img class="{$dark ? ' invert' : ''} transition-all duration-200 scale-120" alt="mail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAlpJREFUaEPtmuFNxDAMhX2bwCYwCTAJMAkwCWwCm4A+qZFKL46TNm3cNpFO96PXxs/vvTjO9SInG5eT4ZUO+OiMd4Y7wwfLQJf0wQi9gtMZnqTkTkQeRITvG+fs/4gIn1cR+dJiTTH8KCJvzkFq4QH6JXZRAwyjnzsFG8K+HRj/B0MDDFhA73m8i8jTFIAG+HfPSIfY8TMsZzEcA+x9Rc+KuYRh5IFMPA5tzbnCVwIYoKx+gEYuXgar8bMSzGLAPJcaB9utQbMvoGymFtcqgAEN2PuGoHPLZjXAQUEtfJ2SsLkol3o4ZhU8jbe3kHjp/mARwwDS9tNr+9ryqxbbIsAUcTKcaiLWkLjlV5LNelK9DodsWR6qWbpy5gpNwmqA8TGdFLVvLYlbEiYGWB23gasCZkKCSkl8bumyJMxzsc60510dcFixKf4wro0SX1sSDn6NzbUZYCYnUE5GNInnlC6r5KhN/YB+U8DMiRRhu9TXll81CU9Z3hxwjq/5zVjill9TEnYBOARheRF5MrQuJ3Rm0XMpZbFowvA4Fqt0pdrLacnJaUWbA86V+BhMrl+br9IWA1bp4v4Sv7oHbJUuq+RYCeW6C0lPA52WriUSdrVKW4yEv25qHgq6ZNhKxJLrHbDI9Us7JUc8pzuI74CXGG6Fe7uHu4djGRik9r2DVxwsVxT9XZqz97UmbH09ujc/8isP0RYzVWqsJr41g6n51YNDq7ay5w3nz95fWyIB7M0/5r625JnB2bFZDM9+sNcbO2CvzNSKqzNcK5Nen9MZ9spMrbg6w7Uy6fU5fylomD2Z/c//AAAAAElFTkSuQmCC"/>
        </a>
        <a href="https://github.com/iaiaian1" referrerpolicy="no-referrer" target="_blank">
            <img class="{$dark ? ' invert' : ''} transition-all duration-200 hover:scale-110" alt="github" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA4pJREFUaEPtmgtu1TAQRacrAVYCrARYCbASykqAlUBX0uqijGTS+dzxJ3nlPUtVWtVxfHznZyd3cmXt7sp45Qb8vyt+U3iBwh9F5LWIvNqu+B0N1z/Nz4OI/Gz+XjAVWebDgHwrIrj2NIB/bxagZwzzntkm/W0A0oO6F5Gvm/LD4LOAv4jI5+HZxANMAR8FficiUFX9cjHz3+E/iQjgu9oIMGB/dD11/CaYOKyq3HqBV/hqdfJdJt4DDFWh7iU0RHOYONIb1arARwQnauJNp5J5V4CRU2HKl9hoaBY4ClAwJzwQ7cOumpqxOPDVX9tASH1eRqCiNwv8O3gQJoSHtQ2WgEUaSVdWUMqC5ZvMnxngzG89cwKwFiMaVKCU1s9YICyI/qAURcP/tazcW0iWClPTzoAxGagbtfdbzTvDfLMxmPmEKmfAmbqY4KUBhypnwI/Zko+WesT4bRdGYfR3VY6AM3/RiVhBq8hBd2csDoO5ETsCZgdPAwWNk3dkRUAFBld71iJgxpzdgfO5d/dghTDN2gMe9pVuHO7GqC7QEUyz9oCZVTxDXYXJChD0M2PLCPCRvrvXnanrS8DMCp4JzAQv0wI9hZk975EFh+XZWVBFiYrA9U97qcBsUH3G5wF3R0EuyA73mg7MmDS1/xxGswdgfLhk0kzQOrKk3GMzaXM68Jl5mLHAUpRm8ly4K1lkyhiW9V8zbXpBi/ERt5pZCIuhGXNGPzNtRpsHJlIfrTKrLuZlskXATOBSMdPDswmqV2DNgOWuwjY51o/D3ckEUAxRfWnnlr3ZEY9l1khH3hEsIiMehuuMpieflVc7rrqZwlaAwGAIBrhGqw5gHMkqeHs0Gy2ELiSObHvPtYcO8TC5vcottPV/C4jxcfgo8uvI4X0aRDOTjtKAQmQTrWwj2ZTjWUn6LAbYU7GtZCJoRt0WINv2ebCh7+pNLLAH1G4g4HN4maYBRv24+nkCm//34NT+nAX2THtFPc3UyXvY1JSrCmt/y8foh5F5qgpc2rVVFI6gu763cBagAly2sB7gKHLrp4PKAt833wAEarPAJWV7TbqdJ8xb3/gPRc7dzQxw92lLr8I6x6zGpVJFARjjAba7dB0F1rlio2F9fzETeEpwnAXcBrTWzGcAzwyIyz4f1iLE+1YjylAIdLAYLFa1aEkz32yF0wee3eEGfLYCq59/U3j1Cp89/tUp/AThN9o9xHf+KQAAAABJRU5ErkJggg=="/>      
        </a>
        <a href="https://steamcommunity.com/id/iaiaian1/" referrerpolicy="no-referrer" target="_blank">
            <img class="{$dark ? ' invert' : ''} transition-all duration-200 hover:scale-110" alt="steam" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABB5JREFUaEPtmottFDEQhp1KCJUAlQQqASohVAJUAlQC+qP70cSZ99p3EbmV0IVbe+1v3p69m/HCrpsXxjuuwP+7xq8aXqzh2zEG/r0dY7w5PZvf/Tr9H5/8++sY4/viPTx63A4NA+j9CRCg1YsC+DHG+FSdHI1fCUzQj9GihfuAh9bvhRUUpj8dugJ4B+i8U4If1vhRYJjst0Mir00G+Lsj2j4CDGmvNN8s+iFtd4Gh1U5AykJlxsGvP2QGyjEd4OcAS4YydBX4OcES+nMlfVWAv5zya9WKKuPpn5iDv5EBXiXWTUNngXdH42jDmdSH6B1WaVngPxU1FcZCiwg84UZFWQq3ggC0XP06WjsDvNOUNa2gLCUQBCFrbfDgHvakZYnIUsLzMB7+M5Ja8/4M67kNQGR5ae0rLEwiDe+KynM6YRGDDQOOJg4wFDcQBr6D+fNkBUuApufLTVUR8C7fldqltgCE77WLApEm62nZ9GUP2JJg04IfTZPrMkZgk9SetgZcC5BynGWBZsT2gLnACkD5jNnkYEWZiokKkDBWPW9aiwe8y5wlHM0yjK4nP4ZG4cd4Bi4LGJaimrUFvNOcZ3ODJTEgedZE4WQ0jOeoZm0B78q9miYBzHTiAVObmv9r81SrOSew5VdaBJ4BrEjuxRl1PQt4R8Dyal2uJ/2T0MjByMWM0Pw+KopUP7aAV3czNBCpRRYYiB0sJ3kf32k1d1QUlYBZs0K6dwe7G15BMZsu4LAee9eIxr+V827m9FYGnjWAzXR6WFFBUc3zkSnzeYeApd9UtJ46oxaIK+lyCbDld/OesVgmt2ZZGbgqjcNSlM5uhL7OVyt8S1CZr42lL+NeBdIrYR/uRael7sYR5dGLwvuhOepG1ZR1uK/uRc0Mu4BlDyrbOIcmAau1b6qw5dKys4A2R4J7B4TVeR97UbODp2FIfO4ndQVBM50bdl5/qrsW5pnHTQ8YUkcRAB88+qKauVP6VSXFVOHNys4DnhM8+008i1Y2MZ97o7Kw8mxtrMkVBS1tY92X1GgoUPK7mguuOWfSklezZqMv1mFQ4rvdXa1fM1jRDCINY5zXDJDlG6C0nyZQaKx8dkRk8oStogww/M96vYGFuAiDEAsNnHL4IoyCyRb+HR82+1jyYRlgjPciqjTt+Rc8871VVZQmkNRBJQss/VBbLPLnnZrFfqIGw789V4Azryx5SkINjQtzeKDvmGlmTqan3QImwE6zzADKMZVuysO8ioa50K5ycDtsF5ia7rZ8qmDa+DD9WIt0NCyftfpIFwmj+ouBJ887CnxObbe12snDkeR3gi8BJcAKDc/CmIuPjLDmMVFe7zyzHaUriwGePw5n60Z+ssGAT5Si+OwcP9N72qHh9OKXGHgFvoTUz7nmVcPnlPYl1voLVzIKTHnqN4EAAAAASUVORK5CYII="/>
        </a>
    </div> -->
</div>
<!-- Small aside animation -->
<style>
    .aside {
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
</style>