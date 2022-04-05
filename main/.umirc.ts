import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'child1', // 唯一 id
          entry: '//localhost:2000', // html entry
          // 子应用通过钩子函数的参数props可以拿到这里传入的值
          props: {
            app: 'main-child1'
          },
        },
        {
          name: 'child2', // 唯一 id
          entry: '//localhost:7100', // html entry
          // 子应用通过钩子函数的参数props可以拿到这里传入的值
          props: {
            app: 'main-child1'
          },
        },
      ],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
  },
  // layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: true, path: '/', component: '@/pages/index', },
    {
      exact: false,
      path: '/layouts',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/child1', microApp: 'child1' },
        { exact: true, path: '/child2', microApp: 'child2' },
      ],
    },
  ],
  fastRefresh: {},
});
