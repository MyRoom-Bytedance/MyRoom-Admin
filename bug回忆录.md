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

# react_devtools_backend.js:4026

```bash
Warning: Updating a style property during rerender (rowGap) when a conflicting property is set (gap) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.
    at div
    at http://localhost:3000/static/js/vendors-node_modules_ant-design_pro-form_es_components_Captcha_index_js-node_modules_ant-desi-b2a699.chunk.js:20355:34
    at DndProvider (http://localhost:3000/static/js/vendors-node_modules_ant-design_icons_es_components_IconFont_js-node_modules_ant-design_pro-f-7fc91b.chunk.js:19611:5)
    //...
```

rowGap 和 gap 冲突？？

原因是 antd 的 Row 组件应该用 gutter 属性而不是自己加 style……犯傻了

```tsx
export const LowcodeEditor = React.memo(() => {
    return (
        // DndProvider作用域局限在LowcodeEditor中
        <DndProvider backend={HTML5Backend}>
            {/*<Row style={{ gap: 10 }}>*/}
            <Row gutter={10}>
                <Col flex={1}>
                    <h1>Project Material</h1>
                    <LeftPane />
                </Col>
                <Col flex={2} style={{ backgroundColor: 'lightblue' }}>
                    <h1>Project Previewer</h1>
                    <MidPane components={project.components} />
                </Col>
                <Col flex={2}>
                    <h1>Project Editor</h1>
                    <PropsEditor
                        position={position}
                        editableProps={project.components[0].editableProps}
                        props={project.components[0].props}
                    />
                </Col>
            </Row>
        </DndProvider>
    );
});
```

# Getting an error "A non-serializable value was detected in the state" when using redux toolkit - but NOT with normal redux

解决地址：[Getting an error "A non-serializable value was detected in the state" when using redux toolkit - but NOT with normal redux](https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using)
