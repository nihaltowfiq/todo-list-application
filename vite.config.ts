import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': resolve(__dirname, 'src/components'),
			'@utils': resolve(__dirname, 'src/utils'),
		},
	},
});
