/*
 * @Author: cos
 * @Date: 2022-05-11 18:32:51
 * @LastEditTime: 2022-05-31 00:23:57
 * @LastEditors: cos
 * @Description: 左部组件面板
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\LeftPane\index.tsx
 */
import React from 'react';
import { Collapse, Empty, Space } from 'antd';
import { materialList } from './mock';
import { Material } from './Material';
const { Panel } = Collapse;
const menuList: DefaultMenuListType = [
    {
        label: '通用',
        key: 'common',
    },
    {
        label: '布局',
        key: 'layout',
    },
    {
        label: '房源',
        key: 'house',
    },
];
export const LeftPane = React.memo(() => {
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            基础组件
            <Collapse defaultActiveKey={['common']}>
                {menuList.map(({ label, key }) => {
                    return (
                        <Panel header={label} key={key}>
                            <Space wrap>
                                {materialList[key] ? (
                                    materialList[key]?.map((item) => {
                                        const { id, ...props } = item;
                                        return <Material item={item} key={id} />;
                                    })
                                ) : (
                                    <Empty />
                                )}
                            </Space>
                        </Panel>
                    );
                })}
                {/* <Panel header="通用" key="通用">
                    <Space wrap>
                        {materialList.map((item) => {
                            const { id, ...props } = item;
                            return <Material {...props} key={id} />;
                        })}
                    </Space>
                </Panel>
                <Panel header="布局" key="布局"></Panel>
                <Panel header="房源" key="房源"></Panel> */}
            </Collapse>
        </Space>
    );
});
export default LeftPane;
