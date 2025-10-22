import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    build: {
        inlineStylesheets: 'auto',
    },
    vite: {
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return 'vendor';
                        }
                        if (id.includes('/src/components/Timeline')) {
                            return 'timeline';
                        }
                    }
                }
            }
        }
    }
});
