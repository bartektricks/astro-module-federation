import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		target: "esnext",
	},
	plugins: [
		react(),
		federation({
			name: "viteRemote",
			filename: "remoteEntry.js",
			exposes: {
				"./App": "./src/App",
			},
			shared: ["react", "react-dom"],
		}),
	],
});
