# `astro-module-federation`

This is an [Astro integration](https://docs.astro.build/en/guides/integrations-guide/) that adds the @originjs/vite-plugin-federation to your Astro project.

## Usage

### Pre-requisites

You need to add a server integration to your Astro app and set the output to `server`.

### Installation

Install the integration **automatically** using the Astro CLI:

```bash
pnpm astro add astro-module-federation
```

```bash
npx astro add astro-module-federation
```

```bash
yarn astro add astro-module-federation
```

Or install it **manually**:

1. Install the required dependencies

```bash
pnpm add astro-module-federation
pnpm add @originjs/vite-plugin-federation -D
```

```bash
npm install astro-module-federation
npm install @originjs/vite-plugin-federation -D
```

```bash
yarn add astro-module-federation
yarn add @originjs/vite-plugin-federation -D
```

2. Add the integration to your astro config

```diff
+import astroModuleFederation from "astro-module-federation";

export default defineConfig({
  integrations: [
+    astroModuleFederation({ ... }),
  ],
});
```

### Configuration

For the full list of properties refer to the [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation#usage) usage section.

### Example for Astro host app

Example config with the Node and React adapters
```js
export default defineConfig({
  output: "server",
  integrations: [react(), moduleFederation({
    remotes: {
      viteApp: "http://localhost:4173/assets/remoteEntry.js"
    },
    shared: ['react', 'react-dom']
  })],
  adapter: node({
    mode: "standalone"
  })
});
```

## Contributing

This package is structured as a monorepo:

- `playground` contains code for testing the package
- `package` contains the actual package

Install dependencies using pnpm:

```bash
pnpm i --frozen-lockfile
```

Start the playground:

```bash
pnpm playground:dev
```

[Vite Remote App](http://localhost:4173/)
[Astro Host App](http://localhost:4321/)

You can now edit files in `package`. Please note that making changes to those files may require restarting the playground dev server.

## TODO

- [ ] Figure out how to handle missing assets and styles.
- [ ] Figure out how to use Astro as a remote.

## Licensing

[MIT Licensed](https://github.com/bartektricks/astro-module-federation/blob/main/LICENSE). Made with ❤️ by [bartektricks](https://github.com/bartektricks).
