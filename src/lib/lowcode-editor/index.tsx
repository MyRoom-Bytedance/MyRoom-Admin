/*
 * @Author: TagBug 1242135295@qq.com
 * @Date: 2022-05-18 23:12:30
 * @LastEditors: TagBug 1242135295@qq.com
 * @LastEditTime: 2022-05-19 00:01:45
 * @FilePath: \myroom-admin\src\lib\lowcode-editor\index.tsx
 * @Description: 低代码编辑器组件入口
 */
import { Col, Row } from "antd";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import LeftPane from "./components/LeftPane";
import MidPane from "./components/MidPane";
import { PropsEditor } from "./components/RightPane/PropsEditor";
import { position, project } from "./mock/MockProject";

export const LowcodeEditor = React.memo(() => {
    return (
        // DndProvider作用域局限在LowcodeEditor中
        <DndProvider backend={HTML5Backend}>
            <Row style={{ gap: 10 }}>
                <Col flex={1}>
                    <h1>Project Material</h1>
                    <LeftPane />
                </Col>
                <Col flex={2} style={{ backgroundColor: 'lightblue' }}>
                    <h1>Project Previewer</h1>
                    <MidPane />
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