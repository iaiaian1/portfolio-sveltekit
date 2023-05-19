<script>
    import { dark } from "../../routes/stores";
    import Spotify from "$lib/components/Spotify.svelte";
</script>

<div class="flex flex-col lg:flex-row justify-around p-5 gap-y-5 font-quicksand transition-all duration-1000 {$dark ? ' bg-neutralBlackC text-white' : 'bg-slate-200 text-black'}">
    <div class="flex flex-col items-center lg:items-start text-base lg:text-lg">
        <Spotify/>
        <p>Built from scratch using SvelteKit ⚡</p>
        <p>2023 &copy; Jake Brian Yap</p>
    </div>
    <!-- Boxicons -->
    <div class="flex justify-center items-center gap-2">
        <a href="mailto:yapjakebrian1@gmail.com">
            <img class="{$dark ? ' invert' : ''} transition-all duration-200 hover:scale-110" alt="mail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAO1JREFUSEvdld0NwjAMhK+bwCTAJjAJMAliEtgENgF9Va8ykVIl/ZFQ/dKHOv58VztttHA0C9fXugB7STdJm4m2vSWdJD2pEy16SAIyRwDZpoBPV5kXJIwJ1L+6g23zUYEBFL9LulQSUI8LjizACdcKCM2ck4ayAAo7GTWHAcuwhMHwt4tnswBecBC5PH+mInQZLYk5tnoQQB2Ko+TYQeJ3iZYwjqh0FAMMAWDLsGCXWJIOQxXAXQHB6xh03S5TEqMAVuNN7zd1TkDpWoxW8P+AOS+7fnTjXcTiMI5Tb9TsdV3qcVXeun6ZVdJLk7+tbDwZy423ZAAAAABJRU5ErkJggg=="/>
        </a>
        <a href="https://github.com/iaiaian1" referrerpolicy="no-referrer" target="_blank">   
            <img class="{$dark ? ' invert' : ''} transition-all duration-200 hover:scale-110" alt="github" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWBJREFUSEu1lY1NAzEMhV83gUkKm8AktJMAkwCTwCZU3ymOXv7ucpXOUlQ1sf38XmLfSQfb6eD8mgF4ksQ6p98/SawfSd9pDetcA3iQ9J6SrhEF7DmBNn4jgIuktx3yAfIpibjCegAvqfId+bPrtQapAZDlN7mj76skAIMNlWL4YSTEj3PuiXNi2FusBvgyzT+ScySM5L3/Lil+jz2AWhoH2JKLx0B8GJe+sHAGNUB22sqeJAtpQ7rlwh3AqyhoTgDg4vJSPQUWAFQQl5cdJpPj1i3QGTjAPQw8PhfvAE7xHoB/Y5sfiAPU3bvnFQ1jHYBGgYVb05nVOXfmjbj6TOMlEEQ3AkiHxvRkz5vNJXXc4oGMRkVMyBgBMTY8Ud1cTfW9UcFe6LklT2/iwpK7y7Y1rkMeRnERaIVEsib5iEEE+AenxyYYNBN0hoH7RHf7BXM+2i8e2sw3ece0aF0PB7gBWc9YGRupb4AAAAAASUVORK5CYII="/>
        </a>
        <a href="https://steamcommunity.com/id/iaiaian1/" referrerpolicy="no-referrer" target="_blank">
            <img class="{$dark ? ' invert' : ''} transition-all duration-200 hover:scale-110" alt="steam" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXZJREFUSEu1ldFRBDEMQ3WVAJUAlQCVAJUAlQCVwCcl8AfzmOhGu5eNw8dm5j5uNrZkWXYO2vkcds6vGYCHRuJG0rmkz/b/TdK7pOcRyRHAlaSnlnSUA8AXSSayuLsFwOX7f8r32APpAcD6diI5zPlRqc8JyBqAy69FcpLeSaIHHPoCIVd8Hd9OmvwxoTkJOFSK9mcN0JVD4MIkswJYcGl0cAzsqdJAVI3DkAeCnGMVCTCjPcmte7qGWL79hIX/CCRAJQ+aE4TmJMwKqAJAAxxlSoDKmujqIbMslhP2qUAXwI5wcNqPBKOJXZPbBMgGIwUg35K+0nphT1gnEcdbzqldZJ8T7MZWctptCwASMSx420OUFcEWK26xzrtdmwKAv70xueSmEozLDDCalc1BIyiHjTJZx5cN1MkhMDrDVWGdvVdgQ2KS+j0YJS+XnYOrJvZApte1g70hK0nW23UBXj2ZngX6gN8N5lcsrduVrgIo+ll/3h3gF1ToVhliBueOAAAAAElFTkSuQmCC"/>
        </a>
        <a href="https://open.spotify.com/user/12176764337?si=a13ace08233f4480" referrerpolicy="no-referrer" target="_blank">
            <img class="{$dark ? ' invert' : ''} transition-all duration-200 hover:scale-110" alt="spotify" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWpJREFUSEvFlYFNw1AMRK+TAJMAkwCTAJMAkwCTAJugF/2LLm6S/gZFWIra/vr77DvbOWhnO+wcXz0AN5J4LiTdS/qW9CHpp33yfdHWAC4lvbTgazEAvG3AR35LAE+SHs+gD5A3Sdyb2BwANJD5FnuuIBUAWr62RG53qOShaTMcVYD34Bxnns8CiNgYySB+Ne5c+TABkhqyeO2oxCB3BQzRh+5aAoBLHJzhdYBlVfjw2xXBAKCjFgmAsFQxV3KeEcDmmaCDAEM//uc7VUwq8J++TBbQ5Ax9bgCqq9Qk8KBDVpAA7gZ8PMW+XCcYQGamVj/EToDsoA59x5UBPRj3bVROo0wA6vTi5GyTJjLmWaKHuLMiQ0VmgROBU1RmAFBrw3/unKx6bPOkqHe5pZDQ4y3r87GDKkX8/uuqIMY4ZHMAnO267Fzmuet6ImyK8W8vnJxatyX7yLvJ+whBN78ye4btpE/PS/9kkDWHXyD1Vhndc2GbAAAAAElFTkSuQmCC"/>
        </a>
    </div>
</div>