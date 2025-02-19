import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#76ABAE",
        primaryContent: "#367579",
        primarySubContent: "#EEEEEE",
        primaryBg: "#222831",
      }
    }
  }
})
