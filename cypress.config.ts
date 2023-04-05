import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,
  videoUploadOnPasses: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(
        on,
        config
      );
    },
    baseUrl: 'http://localhost:3000',
  },
  env: {
    baseUrl: 'http://localhost:3000',
  },
});
