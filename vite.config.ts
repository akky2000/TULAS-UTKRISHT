import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',  // Changed from '0.0.0.0' to '127.0.0.1'
    port: 3000,        // Changed from 8080 to 3000
    strictPort: true,  // Prevents automatic port fallback
    open: true,        // Automatically open browser
    hmr: {
      host: '127.0.0.1',
      port: 3000,
      protocol: 'ws',
      clientPort: 3000
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});