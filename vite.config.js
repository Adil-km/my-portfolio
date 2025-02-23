import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export the Vite configuration
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure the base path is correctly set for Vercel
});
