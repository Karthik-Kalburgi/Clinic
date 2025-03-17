import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Bind to all network interfaces, allowing access from public address
    port: 3000, // Optionally set a port, e.g., 3000 (default is 5173)
  },
  plugins: [react()],
})
