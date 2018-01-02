# roadhog

[![NPM version](https://img.shields.io/npm/v/roadhog.svg?style=flat)](https://npmjs.org/package/roadhog)
[![Build Status](https://img.shields.io/travis/sorrycc/roadhog.svg?style=flat)](https://travis-ci.org/sorrycc/roadhog)
[![NPM downloads](http://img.shields.io/npm/dm/roadhog.svg?style=flat)](https://npmjs.org/package/roadhog)
[![Dependencies](https://david-dm.org/sorrycc/roadhog/status.svg)](https://david-dm.org/sorrycc/roadhog)

[�鿴Ӣ�İ�](./README.md)

Roadhog ��һ������ `dev`��`build` �� `test` �������й��ߣ������� react-dev-utils���� create-react-app �����鱣��һ�¡������������Ϊ�����ð�� create-react-app��

## Features
* ? ���伴�õ� react Ӧ�ÿ������ߣ����� css-modules��babel��postcss��HMR ��
* ? create-react-app ������
* ? JSON ��ʽ�� webpack ����
* ? mock
* ?? ���� jest �� test���ݲ�֧��  UI ���ԣ�


## Getting started
```bash
## Install globally or locally
$ npm i roadhog -g

## Check version
$ roadhog -v
2.0.0

## Local development
$ roadhog dev

## Build
$ roadhog build
$ NO_COMPRESS=1 roadhog build

## Test
$ raodhog test
```

## Mock
roadhog dev ֧�� mock ���ܣ��� `.roadhogrc.mock.js` �н������ã�֧�ֻ��� require ��̬������ʵʱˢ�£�֧�� ES6 �﷨���Լ��Ѻõĳ�����ʾ��

ʾ����

```js
export default {
  // ֧��ֵΪ Object �� Array
  'GET /api/users': { users: [1,2] },

  // GET POST ��ʡ��
  '/api/users/1': { id: 1 },

  // ֧���Զ��庯����API �ο� express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },
};
```

## ʹ�� public Ŀ¼
����Լ�� public Ŀ¼�µ��ļ����� server �� build ʱ���Զ� copy �����Ŀ¼��Ĭ���� ./dist���¡����Կ����������� favicon, iconfont, html, html �����õ�ͼƬ�ȡ�

## ����
umi �� webpack ���ֹ����ǻ��� af-webpack ʵ�ֵġ��������ã�����Ŀ��Ŀ¼�½� .webpackrc ��ɣ���ʽΪ JSON�����磺

```js
{
  "externals": { "react": "window.React" }
}
```

�����ƫ�� JS �����÷�ʽ��������Ҫͨ����̵ķ�ʽ��һЩ�жϻ��߳��󣬿����� .webpackrc.js�����ļ���֧�� ES6 �﷨�����磺

```js
export default {
  externals: { react: 'window.React' },
}
```

������

* entry
* theme
* define
* externals
* alias
* browserslist
* publicPath
* outputPath
* devtool
* commons
* disableCSSModules
* disableCSSSourceMap
* extraBabelPresets
* extraBabelPlugins
* extraBabelIncludes
* copy
* proxy
* sass
* manifest
* ignoreMomentLocale
* env

### entry

### theme
�������⣬ʵ�������� less ������֧�ֶ�����ַ����������ͣ��ַ�����Ҫָ��һ���������õ��ļ���
���磺

```
"theme": {
  "@primary-color": "#1DA57A"
}
```

���ߣ�

```
"theme": "./theme-config.js"
```

### define
ͨ�� webpack �� DefinePlugin ���ݸ����룬ֵ���Զ��� `JSON.stringify` ����
���磺

```js
"define": {
  "process.env.TEST": 1,
  "USE_COMMA": 2,
}
```

### externals
���� webpack ��?[externals](https://webpack.js.org/configuration/externals/)?���ԡ�
���磺

```js
// ���� react �� react-dom ���������
"externals": {
  "react": "window.React",
  "react-dom": "window.ReactDOM"
}
```

### alias
���� webpack �� [resolve.alias](https://webpack.js.org/configuration/resolve/#resolve-alias) ���ԡ�

### browserslist
���� [browserslist](https://github.com/ai/browserslist)��ͬʱ������ babel-preset-env �� autoprefixer��
���磺

```js
"browserslist": [
  "> 1%",
  "last 2 versions"
]
```

### publicPath
���� webpack �� [output.publicPath](https://webpack.js.org/configuration/output/#output-publicpath) ���ԡ�

### outputPath
���� webpack ��?[output.path](https://webpack.js.org/configuration/output/#output-path)?���ԡ�

### devtool
���� webpack �� [devtool](https://webpack.js.org/configuration/devtool/) ���ԡ�

### commons
���� webpack �� [CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/) �������ʽΪ���飬�м����伸�� CommonsChunkPlugin ��
���磺

```markup
"commons": [
  {
    async: '__common',
    children: true,
    minChunks(module, count) {
      if (pageCount <= 2) {
        return count >= pageCount;
      }
      return count >= pageCount * 0.5;
    },
  },
]
```

### disableCSSModules
����?[CSS Modules](https://github.com/css-modules/css-modules)��

### disableCSSSourceMap
���� CSS �� SourceMap ���ɡ�

### extraBabelPresets
�������� babel preset �б���ʽΪ���顣

### extraBabelPlugins
�������� babel plugin �б���ʽΪ���顣

### extraBabelIncludes
���������Ҫ�� babel ת�����ļ�ƥ���б���ʽΪ���顣

### copy
������Ҫ���������Ƶ��ļ��б���ʽΪ���飬��ĸ�ʽ�ο� [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) �����á�
���磺

```markup
"copy": [
  {
    "from": "",
    "to": ""
  }
]
```

### proxy
���� webpack-dev-server �� [proxy](https://webpack.js.org/configuration/dev-server/#devserver-proxy) ���ԡ�
���Ҫ�����������������������������䣺

```markup
"proxy": {
  "/api": {
    "target": "http://jsonplaceholder.typicode.com/",
    "changeOrigin": true,
    "pathRewrite": { "^/api" : "" }
  }
}
```

Ȼ�����?`/api/users`?���ܷ��ʵ�?[http://jsonplaceholder.typicode.com/users](http://jsonplaceholder.typicode.com/users)?�����ݡ�

### sass
���� [node-sass](https://github.com/sass/node-sass#options) ��ѡ�ע�⣺ʹ�� sass ʱ������ĿĿ¼��װ node-sass �� sass-loader ������

### manifest
���ú������ manifest.json��option ���� [https://www.npmjs.com/package/webpack-manifest-plugin](https://www.npmjs.com/package/webpack-manifest-plugin)��
���磺

```markup
"manifest": {
  "basePath": "/app/"
}
```

### ignoreMomentLocale
���� moment �� locale �ļ������ڼ��ٳߴ硣

### env
����ض��Ļ����������á�server �Ļ���������?`development`��build �Ļ���������?`production`��
���磺

```js
"extraBabelPlugins": ["transform-runtime"],
"env": {
  "development": {
    "extraBabelPlugins": ["dva-hmr"]
  }
}
```

���������������µ� extraBabelPlugins ��?`["transform-runtime", "dva-hmr"]`����������������?`["transform-runtime"]`��

## ��������
�ɻ���������ʱ����һЩ������������

* `PORT`, �˿ںţ�Ĭ�� 8000
* `HOST,` Ĭ�� localhost
* `HTTPS`���Ƿ��� https��Ĭ�Ϲر�

����ʹ�� 3000 �˿����� dev server��

```bash
# OS X, Linux
$ PORT=3000 roadhog dev

# Windows (cmd.exe)
$ set PORT=3000&&roadhog dev

# Or use cross-env for all platforms
$ cross-env PORT=3000 roadhog dev
```

## FAQ
### Ϊʲô�� roadhog ?

roadhog ��·�ԣ��� [dva](https://github.com/dvajs/dva) һ�����������ȷ��е���һ��Ӣ�ۣ�ϣ����Ϊ dva ���ݻ�����

<img src="https://zos.alipayobjects.com/rmsportal/guCnwwMItoLOTmcdbaEZ.png" width="200" height="200" />

## LICENSE
MIT
