/*
 * @Author: cos
 * @Date: 2022-05-11 18:32:51
 * @LastEditTime: 2022-05-11 21:53:56
 * @LastEditors: cos
 * @Description: 中部预览面板
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\MidPane\index.tsx
 */
import React from 'react';
import styled from 'styled-components';

const MidPaneContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Preview = styled.section`
    position: relative;
    width: 470px;
    height: 840px;
    background-color: cadetblue;
`;
type Props = {};

export const MidPane = React.memo(({}: Props) => {
    return (
        <MidPaneContainer>
            <Preview>中部预览面板</Preview>
        </MidPaneContainer>
    );
});
export default MidPane;
