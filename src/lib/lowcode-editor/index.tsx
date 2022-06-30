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
import { createProject, updateProject, getProjectById } from 'service/project';
import { Button, Input, message } from 'antd';

export const LowcodeEditor = React.memo(() => {
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
  const [projectName, setProjectName] = useState('new project');
  const [id, setId] = useState(Number(useParams().id));
  const containerRef = useRef<HTMLDivElement>(null);
  
  const getProject = async (id: number) => {
    const res = await getProjectById(id);
    setProjectData(JSON.parse(res.data.content));
    setProjectName(res.data.name);
  };

  const saveProject = async () => {
    if (id === 0) {
      const res = await createProject({
        name: projectName,
        content: JSON.stringify(projectData),
      });
      setId(res.data.id);
      message.success('保存成功');
    } else {
      await updateProject({
        id: id,
        name: projectName,
        content: JSON.stringify(projectData),
      });
      message.success('保存成功');
    }
  }

  useEffect(() => {
    id && getProject(id);
    // eslint-disable-next-line
  }, [id]);

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
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h1>Project Material</h1>
          <div>
            <span>项目名称：</span>
            <Input
              value={projectName}
              onChange={ (e) => setProjectName(e.target.value)} 
              style={{ margin: '10px 0' }}
            />
          </div>
          <Button
            type="primary"
            onClick={saveProject}
            style={{ margin: '10px 0' }}
          >
            保存
          </Button>
          <LeftPane />
        </div>
        <div
          style={{
            width: '40%',
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
            width: '28%',
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
