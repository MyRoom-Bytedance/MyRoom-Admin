/*
 * @Author: cos
 * @Date: 2022-05-26 00:42:09
 * @LastEditTime: 2022-05-26 01:43:49
 * @LastEditors: cos
 * @Description:
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\MidPane\mock.tsx
 */
import { DynamicComponent } from 'lib/dynamic-components';
import { BaseInstance } from 'lib/dynamic-components/@types/instance';
import { getUUid } from 'lib/lowcode-editor/utils';

const instanceList: BaseInstance[] = [
    {
        id: getUUid(),
        type: 'Text',
        body: '我是mock的中部预览面板',
        styles: { color: 'red', fontSize: 24, position: 'absolute', top: 10, left: 10 },
    },
    {
        id: getUUid(),
        type: 'Image',
        htmlProps: { src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg' },
        styles: { width: 200, height: 200, position: 'absolute', top: 180, left: 200, zIndex: 10 },
    },
    {
        id: getUUid(),
        type: 'Flex',
        body: [
            { id: getUUid(), type: 'Text', body: '我是一个文本' },
            {
                id: getUUid(),
                type: 'Image',
                htmlProps: { src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg' },
                styles: { width: 200, height: 200 },
            },
            { id: getUUid(), type: 'Text', body: '我又是一个文本' },
            {
                id: getUUid(),
                type: 'Flex',
                body: [
                    { id: getUUid(), type: 'Text', body: '我是里层文本1', styles: { color: 'white' } },
                    {
                        id: getUUid(),
                        type: 'Image',
                        htmlProps: { src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg' },
                        styles: { width: 50, height: 50 },
                    },
                    { id: getUUid(), type: 'Text', body: '我是里层文本2', styles: { color: 'white' } },
                ],
                htmlProps: {
                    direction: 'column',
                    gap: 10,
                },
                styles: { backgroundColor: 'gray' },
            },
        ],
        htmlProps: {
            direction: 'column',
            justify: 'center',
            align: 'center',
            gap: 30,
        },
        styles: {
            position: 'absolute',
            top: 300,
            left: 50,
            backgroundColor: 'lightblue',
            zIndex: 5,
        },
    },
];
export const generatePreviewMock = () => {
    return instanceList.map((item: BaseInstance) => DynamicComponent(item));
};

// <>
//     <DynamicComponent
//         id={getUUid()}
//         type={'Text'}
//         body={'中部预览面板'}
//         styles={{ color: 'red', fontSize: 24, position: 'absolute', top: 10, left: 10 }}
//     />

//     <DynamicComponent
//         id={getUUid()}
//         type={'Image'}
//         htmlProps={{ src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg' }}
//         styles={{ width: 200, height: 200, position: 'absolute', top: 180, left: 200, zIndex: 10 }}
//     />
//     <DynamicComponent
//         id={getUUid()}
//         type={'Flex'}
//         body={[
//             { id: getUUid(), type: 'Text', body: '我是一个文本' },
//             {
//                 id: getUUid(),
//                 type: 'Image',
//                 htmlProps: { src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg' },
//                 styles: { width: 200, height: 200, zIndex: 10 },
//             },
//             { id: getUUid(), type: 'Text', body: '我又是一个文本' },
//             {
//                 id: getUUid(),
//                 type: 'Flex',
//                 body: [
//                     { id: getUUid(), type: 'Text', body: '我是里层文本1', styles: { color: 'white' } },
//                     {
//                         id: getUUid(),
//                         type: 'Image',
//                         htmlProps: { src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg' },
//                         styles: { width: 50, height: 50 },
//                     },
//                     { id: getUUid(), type: 'Text', body: '我是里层文本2', styles: { color: 'white' } },
//                 ],
//                 htmlProps: {
//                     direction: 'column',
//                     gap: 10,
//                 },
//                 styles: { backgroundColor: 'gray' },
//             },
//         ]}
//         htmlProps={{
//             direction: 'column',
//             justify: 'center',
//             align: 'center',
//             gap: 30,
//         }}
//         styles={{
//             position: 'absolute',
//             top: 300,
//             left: 50,
//             backgroundColor: 'lightblue',
//             zIndex: 5,
//         }}
//     />
// </>
