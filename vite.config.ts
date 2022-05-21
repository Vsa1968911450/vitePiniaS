import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        eslintrc: {
            enabled: false,
            // filepath: './.eslintrc-auto-import.json',
            globalsPropValue: true,
        },
        dts: 'src/auto-import.d.ts'
    })
]
})
