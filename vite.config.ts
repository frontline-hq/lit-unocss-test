import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from 'unocss/vite';
import LitRefresh from '@dblechoc/plugin-lit-refresh';

export default defineConfig({
	plugins: [
		UnoCSS({ mode: 'shadow-dom', configFile: './uno.config.ts' }),
		UnoCSS({ configFile: './uno.config.ts' }),
		sveltekit(),
		LitRefresh()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
