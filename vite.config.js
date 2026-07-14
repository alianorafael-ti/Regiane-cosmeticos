import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adicione a linha abaixo substituindo "regiane-cosmeticos" pelo nome exato do seu repositório no GitHub
  base: '/regiane-cosmeticos/', 
})