import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: '../external-plugins/**/*', dest: 'external-plugins', rename: { stripBase: 2 } }
      ]
    })
  ],
  server: {
    port: 8080
  },
  preview: {
    port: 8080
  }
})
