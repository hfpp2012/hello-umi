import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: {
        immer: true,
      },
      dynamicImport: {
        loadingComponent: './components/Loading',
        webpackChunkName: true,
        level: 2
      },
      title: 'myapp',
      dll: false,
      locale: {
        default: 'zh-CN', //默认语言 zh-CN
        baseNavigator: true, // 为true时，用navigator.language的值作为默认语言
        antd: true, // 是否启用antd的<LocaleProvider />
      },

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
