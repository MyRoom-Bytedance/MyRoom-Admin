# Failed to parse source map: URL is not supported

一直会报几个 warning

```bash
Failed to parse source map: 'webpack://antd/./components/config-provider/style/index.less' URL is not supported

Failed to parse source map: 'webpack://antd/./components/icon/style/index.less' URL is not supported

Failed to parse source map: 'webpack://antd/./components/locale-provider/style/index.less' URL is not supported

Failed to parse source map: 'webpack://antd/./components/time-picker/style/index.less' URL is not supported

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.
```

相关 issue: https://github.com/ant-design/ant-design/issues/33327

原因是 ` react-script` 升级到 5.0.0 之后出现此问题，所有通过 npx create-react-app 创建的项目，引入 antd.css 之后都会看到这个警告

一开始，按 issue 中说的将 app.tsx 中的 `import 'antd/dist/antd.css';`替换为`import 'antd/dist/antd.min.css';`，未果。

于是查找，发现项目中有三处地方引入了 `import 'antd/dist/antd.css';` 。

尝试如下操作，将三处 `import 'antd/dist/antd.css';` 全部替换为`import 'antd/dist/antd.min.css';` 后成功去除警告

```ts
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
```

所以下次遇到此类问题，**应当查找文件中所有引入 antd 的地方，然后去除所有的 antd.css 引入，更改引入为 antd.min.css。**
