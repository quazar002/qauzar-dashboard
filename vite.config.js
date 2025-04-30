import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  root: path.join(__dirname, 'src'),
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/qauzar-dashboard',
})
