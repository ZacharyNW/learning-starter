import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 3001
  },
  plugins: [
    react(),
    checker({
        typescript: true
    }),
  ]
})
