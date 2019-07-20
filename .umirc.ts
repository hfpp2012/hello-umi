import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  block: {
    defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
    npmClient: 'cnpm', // 优先级低于 umi block add [block] --npm-client
  },
  hash: true,
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: {
          immer: true,
        },
        dynamicImport: false,
        chunks: ['vendors', 'umi'],
        title: 'myapp',
        dll: {
          include: ['dva/router', 'dva/saga', 'dva/fetch'],
          exclude: ['@babel/runtime'],
        },
        locale: {
          default: 'zh-CN', //默认语言 zh-CN
          baseNavigator: true, // 为true时，用navigator.language的值作为默认语言
          antd: true, // 是否启用antd的<LocaleProvider />
        },

        routes: {
          exclude: [/components\//],
        },
      },
    ],
    [
      'umi-plugin-pro-block',
      {
        moveMock: true, // whether move _mock.js to mock, default to true
        moveService: true, // whether move service.js to src/services/, default to true
        modifyRequest: false, // whether modify umi-request to util(s)/request (if it exist), default to true
        autoAddMenu: false, // whether add name and icon config to route config when download a pro, default to true
      },
    ],
  ],
  chainWebpack(config) {
    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](dva|antd|react|react-dom|react-router|react-router-dom)[\\/]/,
        },
        commons: {
          name: 'commons',
          chunks: 'async',
          minChunks: 2,
          minSize: 0,
        },
      },
    });
  },
};

export default config;
