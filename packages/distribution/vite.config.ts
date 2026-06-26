import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        // Copy external plugins one by one, because otherwise vite creates copies of all files
        // in the external-plugins folder on base level
        { src: '../external-plugins/oscd-publisher/*', dest: 'external-plugins/oscd-publisher' },
        { src: '../external-plugins/oscd-subscriber-later-binding/*', dest: 'external-plugins/oscd-subscriber-later-binding' }
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
