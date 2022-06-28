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
  width: 470px;
  height: 840px;
  border: 1px solid black;
`;
const Preview = styled.section`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const MidPane = React.memo(() => {
  const [, drop] = useDrop(() => ({ accept: 'Material' }));
  return (
    <MidPaneContainer>
      <Preview ref={drop}></Preview>
    </MidPaneContainer>
  );
});
export default MidPane;
