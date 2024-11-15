import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "./",
	plugins: [react()],
	build: {
		sourcemap: true,
		outDir: "dist",
		assetsDir: "assets",
		// cleanOutDir: true,
	},
	server: {
		open: true,
	},
});
