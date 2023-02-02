import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
	base: "/learn-svelte/",
	plugins: [svelte()],
	build: {
		outDir: './public'
	}
})
