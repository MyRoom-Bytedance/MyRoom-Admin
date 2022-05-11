/*
 * @Author: cos
 * @Date: 2022-05-11 20:30:46
 * @LastEditTime: 2022-05-11 21:34:22
 * @LastEditors: cos
 * @Description: 物料展示
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\LeftPane\Material\index.tsx
 */
import { Card } from 'antd';
import IconFont from 'components/IconFont';
import styled from 'styled-components';
import React from 'react';
const MaterialCard = styled.section`
    padding: 0.625rem 0.9375rem;
    flex-flow: column wrap;
    gap: 0.625rem;
    justify-content: center;
    /* background-color: lightblue; */
    border: 2px solid gray;
    border-radius: 10px;
    align-items: center;
`;
type Props = {
    attr: Component;
};
export const Material = React.memo(({ attr }: Props) => {
    const { id, name, type, icon = 'icon-default', position } = attr;
    return (
        <MaterialCard style={{ display: 'flex' }}>
            <IconFont type={icon} style={{ fontSize: 40, color: 'gray' }} />
            {name}
            {/* 这是一个{name}物料，类型为{type} */}
        </MaterialCard>
    );
});
