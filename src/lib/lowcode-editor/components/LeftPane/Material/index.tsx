/*
 * @Author: cos
 * @Date: 2022-05-11 20:30:46
 * @LastEditTime: 2022-05-19 00:10:56
 * @LastEditors: cos
 * @Description: 物料展示
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\LeftPane\Material\index.tsx
 */
import IconFont from 'components/IconFont';
import styled from 'styled-components';
import React from 'react';
import { useDrag } from 'react-dnd';

const MaterialCard = styled.section`
    padding: 0.625rem 0.9375rem;
    display: flex;
    flex-flow: column wrap;
    gap: 0.625rem;
    justify-content: center;
    /* background-color: lightblue; */
    border: 2px solid gray;
    border-radius: 10px;
    align-items: center;
    transition: all 0.3s linear;
    cursor: pointer;
`;

type MaterialProps = {
    type: ComponentType; // 物料类型
    name: string; // 物料名
    icon?: string; // 物料窗口组建的icon（可选，如undefined则用默认icon）
    defaultProps?: any; // 物料的默认属性
};
export const Material = React.memo((props: MaterialProps) => {
    const { name, icon = 'icon-default' } = props;
    const [, drag] = useDrag(() => ({ type: 'Material', item: props }));
    return (
        <MaterialCard ref={drag}>
            <IconFont type={icon} style={{ fontSize: 40, color: 'gray' }} />
            {name}
            {/* 这是一个{name}物料，类型为{type} */}
        </MaterialCard>
    );
});
