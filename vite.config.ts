import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 예: '/porfyou-front/'
  plugins: [react()],
})