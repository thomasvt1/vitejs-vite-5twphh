import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { stylexPlugin } from 'vite-plugin-stylex-dev';
import rsdPlugin from 'react-strict-dom/babel';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log(env);

  return {
    plugins: [
      react(),
      stylexPlugin({
        babelConfig: {
          plugins: [rsdPlugin],
        },
        importSources: [
          '@stylexjs/stylex',
          'stylex',
          { from: 'react-strict-dom', as: 'css' },
        ],
        styleResolution: 'property-specificity',
      }),
    ],
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          entryFileNames: 'static/js/bundle.js',
          format: 'iife',
        },
      },
    },
    experimental: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      renderBuiltUrl(filename, runtime) {
        return 'domain.com';
      },
    },
  };
});
