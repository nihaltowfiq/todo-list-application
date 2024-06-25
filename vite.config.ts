import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@libs': resolve(__dirname, 'src/libs'),
			'@utils': resolve(__dirname, 'src/utils'),
			'@components': resolve(__dirname, 'src/components'),
		},
	},
});
