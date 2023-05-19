import { writable } from 'svelte/store';

export const dark = writable(true);
export const currentPage = writable('')