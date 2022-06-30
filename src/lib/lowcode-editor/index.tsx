/*
 * @Author: TagBug 1242135295@qq.com
 * @Date: 2022-05-18 23:12:30
 * @LastEditors: TagBug 1242135295@qq.com
 * @LastEditTime: 2022-05-19 00:01:45
 * @FilePath: \myroom-admin\src\lib\lowcode-editor\index.tsx
 * @Description: 低代码编辑器组件入口
 */
import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import LeftPane from './components/LeftPane';
import MidPane from './components/MidPane';
import { PropsEditor } from './components/RightPane/PropsEditor';
import { COMPONENT_TYPE } from './const/ComponentData';

export const LowcodeEditor = React.memo(() => {
  const id = Number(useParams().id);
  const [projectData, setProjectData] = useState({
    id: 0,
    name: 'new project',
    global: {
      backgroundColor: '#eee',
    },
    components: [],
  });
  const [rightPaneElementId, setRightPaneElementId] = useState(0);
  const [rightPaneElementType, setRightPaneElementType] = useState<COMPONENT_TYPE | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (id === 0) {
      
    }
    // eslint-disable-next-line
  }, []);

  return (
    // DndProvider作用域局限在LowcodeEditor中
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div
          style={{
            width: '25%',
          }}
        >
          <h1>Project Material</h1>
          <LeftPane />
        </div>
        <div
          style={{
            width: '48%',
          }}
          ref={containerRef}
        >
          <h1>Project Previewer</h1>
          <MidPane
            containerRef={containerRef}
            key={`${projectData.components.length}-${Math.random()}`}
            projectData={projectData}
            setProjectData={setProjectData}
            setRightPanelElementId={setRightPaneElementId}
            setRightPaneElementType={setRightPaneElementType}
          />
        </div>
        <div
          style={{
            width: '25%',
          }}
        >
          <h1>Project Editor</h1>
          <PropsEditor
            projectData={projectData}
            setProjectData={setProjectData}
            rightPaneElementId={rightPaneElementId}
            rightPaneElementType={rightPaneElementType}
          />
        </div>
      </div>

    </DndProvider>
  );
});
