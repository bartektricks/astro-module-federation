import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import astroModuleFederation from "astro-module-federation";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		tailwind(),
		astroModuleFederation({
			name: "astroHost",
			remotes: {
				viteRemote: "http://localhost:4173/assets/remoteEntry.js",
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
	},
});
