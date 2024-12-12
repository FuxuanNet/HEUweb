import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  optimizeDeps: {
    include: ['vue3-markdown'], // 如果在项目中使用了该依赖
  },
  plugins: [
    vue(), // 使用 Vue 插件
    process.env.NODE_ENV === 'development' && require('vite-plugin-vue-devtools')(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // 配置别名
    },
  },
});
