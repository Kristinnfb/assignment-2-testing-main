// vitest.config.ts
export default {
    test: {
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './coverage' 
      }
    }
  };