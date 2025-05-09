import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/vite-remote/",
	build: {
		target: "esnext",
		cssCodeSplit: false,
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
