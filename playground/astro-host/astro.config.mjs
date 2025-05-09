import node from "@astrojs/node";
import react from "@astrojs/react";
import astroModuleFederation from "astro-module-federation";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		astroModuleFederation({
			name: "astroHost",
			remotes: {
				viteRemote: "http://localhost:4173/vite-remote/assets/remoteEntry.js",
			},
			shared: ["react", "react-dom"],
		}),
	],
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	vite: {
		build: {
			target: "esnext",
		},
		plugins: [tailwindcss()],
		server: {
			proxy: {
				"/vite-remote": {
					target: "http://localhost:4173",
					changeOrigin: true,
					secure: false,
					ws: true,
				},
			},
		},
	},
});
