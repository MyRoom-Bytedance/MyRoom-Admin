/*
 * @Author: cos
 * @Date: 2022-05-11 18:32:51
 * @LastEditTime: 2022-05-13 21:59:06
 * @LastEditors: cos
 * @Description: 中部预览面板
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\MidPane\index.tsx
 */
import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

const MidPaneContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Preview = styled.section`
    box-sizing: border-box;
    position: relative;
    width: 470px;
    height: 840px;
    background-color: cadetblue;
    border: 1px solid black;
`;
type Props = {};

export const MidPane = React.memo(({}: Props) => {
    const [, drop] = useDrop(() => ({ accept: 'Material' }));
    return (
        <MidPaneContainer>
            <Preview ref={drop}>中部预览面板</Preview>
        </MidPaneContainer>
    );
});
export default MidPane;
