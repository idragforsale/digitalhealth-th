import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/digitalhelp/' : '/',
  server: {
    port: 3000,
    open: true,
  },
}))
