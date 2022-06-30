/*
 * @Author: TagBug 1242135295@qq.com
 * @Date: 2022-05-18 23:12:30
 * @LastEditors: TagBug 1242135295@qq.com
 * @LastEditTime: 2022-05-19 00:01:45
 * @FilePath: \myroom-admin\src\lib\lowcode-editor\index.tsx
 * @Description: 低代码编辑器组件入口
 */
import { Col, Row } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import LeftPane from './components/LeftPane';
import MidPane from './components/MidPane';
import { PropsEditor } from './components/RightPane/PropsEditor';
import { position, project } from './const/MockProject';

export const LowcodeEditor = React.memo(() => {
  const id = Number(useParams().id);
  const [projectData, setProjectData] = useState({
    id: 0,
    name: 'new project',
    global: {},
    components: [],
  });
  const [rightPaneElementId, setRightPaneElementId] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (id === 0) {
      
    }
  }, []);

  return (
    // DndProvider作用域局限在LowcodeEditor中
    <DndProvider backend={HTML5Backend}>
      <Row style={{ gap: 10 }}>
        <Col flex={1}>
          <h1>Project Material</h1>
          <LeftPane />
        </Col>
        <Col flex={2} ref={containerRef}>
          <h1>Project Previewer</h1>
          <MidPane
            containerRef={containerRef}
            key={`${projectData.components.length}-${Math.random()}`}
            projectData={projectData}
            setProjectData={setProjectData}
            setRightPanelElementId={setRightPaneElementId}
          />
        </Col>
        <Col flex={2}>
          <h1>Project Editor</h1>
          <PropsEditor
            projectData={projectData}
            setProjectData={setProjectData}
            rightPaneElementId={rightPaneElementId}
          />
        </Col>
      </Row>
    </DndProvider>
  );
});
