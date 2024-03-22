import federation, {
	type VitePluginFederationOptions,
} from "@originjs/vite-plugin-federation";
import type { AstroIntegration } from "astro";

export const integration = (
	options: VitePluginFederationOptions,
): AstroIntegration => {
	return {
		name: "astro-module-federation",
		hooks: {
			"astro:config:setup": ({ command, updateConfig }) => {
				if (command === "dev") {
					updateConfig({
						vite: {
							plugins: [federation(options)],
						},
					});
				}
			},
			"astro:build:setup": ({ vite, target }) => {
				if (target === "client") {
					if (!vite.plugins) {
						vite.plugins = [];
					}
					vite.plugins.push(federation(options));
				}
			},
		},
	};
};
