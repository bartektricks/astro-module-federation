import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext'
  },
  plugins: [react(), federation({
    name: 'viteRemote',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/App',
    },
    shared: ['react', 'react-dom']
  })],
})
