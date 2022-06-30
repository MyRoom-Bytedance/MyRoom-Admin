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
import { COMPONENT_TYPE } from 'lib/lowcode-editor/mock/ComponentData';

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

export default function MidPane({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
  const [, drop] = useDrop(() => ({
    accept: Object.values(COMPONENT_TYPE),
    drop: (_, monitor) => {
      const { x, y } = monitor.getSourceClientOffset()!; // 相对屏幕左上角的位置
      // 计算相对容器左上角的位置
      const [currentX, currentY] = [x - containerRef.current!.offsetLeft, y - containerRef.current!.offsetTop - 22];
      
      console.log(monitor.getItem());
    }
  }));
  return (
    <MidPaneContainer>
      <Preview ref={drop}></Preview>
    </MidPaneContainer>
  );
};
