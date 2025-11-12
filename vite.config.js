import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Для GitHub Pages (project pages) базовый путь должен совпадать с именем репозитория
export default defineConfig({
  plugins: [react()],
  base: '/osetia-tours-site/',
})
