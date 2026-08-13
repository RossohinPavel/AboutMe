import { defineConfig } from 'vite';
import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import svgr from "vite-plugin-svgr";
import { seoPlugin } from "./config/vite.seo.plugin.ts";
import { userSeoConfig} from './config/user.manifest.ts'


const getPlugins = (mode: string) => {
  const plugins: PluginOption[] = [react(), svgr(), seoPlugin(userSeoConfig)];
  if ( mode === "analyze" ) {
    plugins.push(visualizer({
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true
    }));
  }
  return plugins;
}

// https://vite.dev/config/
export default defineConfig(({mode, command}) => {
  return {
    base: command === "build" ? "/AboutMe/": "/",
    plugins: getPlugins(mode),
    build: {
      emptyOutDir: true,
      rollupOptions: {
        output: {
          entryFileNames: '[name]-[hash].js',
          chunkFileNames: '[name]-[hash].js',
          assetFileNames: '[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'modules';
            };
          },
        }
      }
    }
  }
})