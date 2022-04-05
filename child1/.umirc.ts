import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
