/*
 * @Author: cos
 * @Date: 2022-05-11 18:32:51
 * @LastEditTime: 2022-05-13 01:35:10
 * @LastEditors: cos
 * @Description: 左部组件面板
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\LeftPane\index.tsx
 */
import React from 'react';
import { Collapse, Space } from 'antd';
import { materialList } from 'lib/lowcode-editor/const/ComponentData';
import { Material } from './Material';
const { Panel } = Collapse;
export const LeftPane = React.memo(() => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      基础组件
      <Collapse defaultActiveKey={['通用']}>
        <Panel header="通用" key="通用">
          <Space wrap>
            {materialList.common.map((item) => (
              <Material attr={item} key={item.id} />
            ))}
          </Space>
        </Panel>
        <Panel header="布局" key="布局">
          <Space wrap>
            {materialList.layout.map((item) => (
              <Material attr={item} key={item.id} />
            ))}
          </Space>
        </Panel>
        <Panel header="房源" key="房源">
          <Space wrap>
            {materialList.house.map((item) => (
              <Material attr={item} key={item.id} />
            ))}
          </Space>
        </Panel>
      </Collapse>
    </Space>
  );
});
export default LeftPane;
