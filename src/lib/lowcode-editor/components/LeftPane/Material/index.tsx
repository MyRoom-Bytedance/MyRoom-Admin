/*
 * @Author: cos
 * @Date: 2022-05-11 20:30:46
 * @LastEditTime: 2022-05-31 00:26:30
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

export type MaterialProps = {
    item: Component; // 该物料对应的默认组件
};
export const Material = React.memo((props: MaterialProps) => {
    const { name, icon = 'icon-default' } = props.item;
    const [, drag] = useDrag(() => ({ type: 'Material', item: props.item }));
    return (
        <MaterialCard ref={drag}>
            <IconFont type={icon} style={{ fontSize: 40, color: 'gray' }} />
            {name}
            {/* 这是一个{name}物料，类型为{type} */}
        </MaterialCard>
    );
});
