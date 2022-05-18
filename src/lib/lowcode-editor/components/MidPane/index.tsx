/*
 * @Author: cos
 * @Date: 2022-05-11 18:32:51
 * @LastEditTime: 2022-05-19 02:03:37
 * @LastEditors: cos
 * @Description: 中部预览面板
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\MidPane\index.tsx
 */
import { DynamicComponent } from 'lib/dynamic-components';
import { getUUid } from 'lib/lowcode-editor/utils';
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
    overflow: hidden;
`;
type Props = {};

export const MidPane = React.memo(({}: Props) => {
    const [, drop] = useDrop(() => ({ accept: 'Material' }));
    const generatePreview = () => {
        return (
            <>
                <DynamicComponent
                    id={getUUid()}
                    type={'Text'}
                    body={'中部预览面板'}
                    styles={{ color: 'red', fontSize: 24, position: 'absolute', top: 10, left: 10 }}
                />

                <DynamicComponent
                    id={getUUid()}
                    type={'Image'}
                    htmlProps={{ src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg' }}
                    styles={{ width: 200, height: 200, position: 'absolute', top: 180, left: 200, zIndex: 10 }}
                />
                <DynamicComponent
                    id={getUUid()}
                    type={'Flex'}
                    body={[
                        { id: getUUid(), type: 'Text', body: '我是一个文本' },
                        {
                            id: getUUid(),
                            type: 'Image',
                            htmlProps: { src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg' },
                        },
                    ]}
                    htmlProps={{
                        direction: 'column',
                        gap: 30,
                    }}
                    styles={{
                        position: 'absolute',
                        top: 100,
                        left: 100,
                        width: 300,
                        height: 200,
                        backgroundColor: 'lightblue',
                        zIndex: 5,
                    }}
                />
            </>
        );
    };
    return (
        <MidPaneContainer>
            <Preview ref={drop}>{generatePreview()}</Preview>
        </MidPaneContainer>
    );
});
export default MidPane;
