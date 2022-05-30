/*
 * @Author: cos
 * @Date: 2022-05-11 18:32:51
 * @LastEditTime: 2022-05-31 01:40:06
 * @LastEditors: cos
 * @Description: 中部预览面板
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\MidPane\index.tsx
 */
import { DynamicComponent } from 'lib/dynamic-components';
import { BaseInstance } from 'lib/dynamic-components/@types/instance';
import { getUUid } from 'lib/lowcode-editor/utils';
import { getInstanceFromSchema, getInstanceListFromSchema } from 'lib/lowcode-editor/utils/schemaUtil';
import React, { useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { addComponent } from 'redux/projectSlice';
import styled from 'styled-components';
import { MaterialProps } from '../LeftPane/Material';
// import { generatePreviewMock } from './mock';

const MidPaneContainer = styled.section`
    display: flex;
    align-items: center;
`;
const Preview = styled.section`
    box-sizing: border-box;
    position: relative;
    width: 470px;
    height: 840px;
    background-color: cadetblue;
    border: 1px solid black;
    overflow: hidden;
`;
type Props = { components: Component[] };
// getClientRects获取
export const MidPane = React.memo(({ components }: Props) => {
    const [instanceList, setInstanceList] = React.useState<BaseInstance[]>(getInstanceListFromSchema(components));
    const [, drop] = useDrop(() => ({
        accept: 'Material',
        drop: (item: Component, monitor) => {
            // console.log(el?.getClientRects());
            const { x, y } = monitor.getClientOffset() || { x: 0, y: 0 };
            console.log('x,y', x, y);
            const left = x - 348;
            const top = y - 95;
            console.log('left,top', left, top);
            let { name, type, positionType, position, props, editableProps, children } = item;
            if (!position) position = { top, left };
            else Object.assign(position, { top, left });
            const newComponent: Component = {
                id: getUUid(),
                name,
                type,
                positionType: positionType || 'absolute',
                position: position,
                props: {
                    ...props,
                },
                editableProps,
                children: children || [],
            };
            console.log('newComponent', newComponent);
            // add component to project
            components.push(newComponent);
            // addComponent(newComponent);
            // const newInstance = getInstanceFromSchema(newComponent);
            // const newInstanceList = [...instanceList];
            // if (newInstance) newInstanceList.push(newInstance);
            // console.log('newInstanceList', newInstanceList);
            // setInstanceList(newInstanceList);
        },
    }));
    useEffect(() => {
        console.log('change!', components);
        const list: BaseInstance[] = getInstanceListFromSchema(components);
        setInstanceList(list);
    }, [components]);
    useEffect(() => {
        console.log('change!', instanceList);
    }, [instanceList]);
    // const generatePreview = () => {
    //     // console.log(instanceList);
    //     return;
    // };
    return (
        <MidPaneContainer>
            <Preview ref={drop}>{instanceList.map((item: BaseInstance) => DynamicComponent(item))}</Preview>
        </MidPaneContainer>
    );
});
export default MidPane;
