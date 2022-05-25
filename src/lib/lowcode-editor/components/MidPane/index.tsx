/*
 * @Author: cos
 * @Date: 2022-05-11 18:32:51
 * @LastEditTime: 2022-05-26 02:05:58
 * @LastEditors: cos
 * @Description: 中部预览面板
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\MidPane\index.tsx
 */
import { DynamicComponent } from 'lib/dynamic-components';
import { BaseInstance } from 'lib/dynamic-components/@types/instance';
import { getInstanceListFromSchema } from 'lib/lowcode-editor/utils/schemaUtil';
import React, { useEffect } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
// import { generatePreviewMock } from './mock';

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
    overflow: hidden;
`;
type Props = { components: Component[] };

export const MidPane = React.memo(({ components }: Props) => {
    const [instanceList, setInstanceList] = React.useState<BaseInstance[]>(getInstanceListFromSchema(components));
    const [, drop] = useDrop(() => ({ accept: 'Material' }));
    useEffect(() => {
        const list: BaseInstance[] = getInstanceListFromSchema(components);
        setInstanceList(list);
    }, [components]);
    const generatePreview = () => {
        // console.log(instanceList);
        return instanceList.map((item: BaseInstance) => DynamicComponent(item));
    };
    return (
        <MidPaneContainer>
            <Preview ref={drop}>{generatePreview()}</Preview>
        </MidPaneContainer>
    );
});
export default MidPane;
