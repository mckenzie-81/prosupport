import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  appType: 'spa',
  server: {
    host: "0.0.0.0", 
    port: 8080,
    cors: true, // Enable CORS for all origins
    hmr: {
      overlay: true
    },
    allowedHosts: ["8150025267f3.ngrok-free.app"]
  },
  plugins: [
    react(),
    base: process.env.VITE_BASE_PATH || "/prosupport"
    visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false, // Disable sourcemaps in production for smaller bundles
    minify: 'esbuild',
    target: 'esnext',
    chunkSizeWarningLimit: 250, // 250KB chunks warning
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-select'],
          carousel: ['embla-carousel-react', 'embla-carousel-autoplay'],
          router: ['react-router-dom'],
          charts: ['recharts', 'd3-scale', 'd3-array'],
        }
      }
    }
  }
}));
