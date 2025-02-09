import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  test:{
    environment: "jsdom"
  },
  plugins: [react()],
  base: '/generatorapp/',
})
