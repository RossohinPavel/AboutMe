import { defineConfig } from 'vite';
import type { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import svgr from "vite-plugin-svgr";
import { seo } from "./plugins/seo.ts";
import { staticProfile } from "./plugins/static-profile.ts";
import { userSeo, userStatic } from './src/user/helpers.ts';
import { userManifest } from './src/user/manifest.ts';

const getBase = (command: string) => {
  const pathName = new URL(userManifest.github.appPage).pathname;
  return command === "build" ? pathName : "/";
}

// https://vite.dev/config/
export default defineConfig(({mode, command}) => {
  const base = getBase(command);
  const plugins: PluginOption[] = [react(), svgr(), seo(userSeo()), staticProfile(userStatic(base))];
  if ( mode === "analyze" ) {
    plugins.push(visualizer({
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true
    }));
  }
  return {
    base,
    plugins,
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
