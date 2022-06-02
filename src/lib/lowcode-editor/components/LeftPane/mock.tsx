/*
 * @Author: cos
 * @Date: 2022-05-11 21:06:51
 * @LastEditTime: 2022-06-02 21:10:30
 * @LastEditors: cos
 * @Description: 测试用
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\LeftPane\mock.tsx
 */
import { project } from 'lib/lowcode-editor/mock/MockProject';
// 物料面板的物料id属性应与type相同，便于识别是否为第一次拖放物料
// 进入渲染面板后会生成独一无二的id
// 物料没有position相关的属性！默认就是absolute
export const materialList: DefaulMaterialListType = {
    common: [
        {
            id: 'Text',
            type: 'Text',
            name: '文本',
            icon: 'icon-text',
            props: {
                innerText: '我是默认文本',
                color: '#000',
                fontSize: 24, // TODO: add editableProps
            },
            editableProps: [
                {
                    label: '文字内容',
                    type: 'string',
                    value: '我是默认文本',
                    ref: 'innerText',
                    valueAdaptor: (v) => `<b>${v}</b>`,
                },
                {
                    label: '文字颜色',
                    type: 'color',
                    value: '#000',
                    ref: 'color',
                },
            ],
        },
        {
            id: 'Image',
            type: 'Image',
            name: '图片',
            icon: 'icon-image',
            props: {
                src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg', // TODO: 设置默认图片
                width: 80, // TODO: add editableProps
                zIndex: 10, // TODO: add editableProps
            },
            editableProps: [
                {
                    label: '图片上传',
                    type: 'upload',
                    value: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg', // TODO: 设置默认图片
                    ref: 'src',
                },
            ],
        },
    ],
    layout: [
        {
            id: 'Flex',
            type: 'Flex',
            name: 'Flex布局',
            icon: 'icon-flex',
            props: {
                direction: 'column',
                gap: 10,
                justify: 'center', // TODO: add editableProps
                align: 'center', // TODO: add editableProps
                backgroundColor: 'lightblue', // TODO: add editableProps
                zIndex: 5, // TODO: add editableProps
            },
            editableProps: [
                {
                    label: '摆放模式',
                    type: 'select',
                    value: '垂直',
                    options: ['水平', '垂直'],
                    ref: 'direction',
                },
                {
                    label: '间距',
                    type: 'range',
                    value: 30,
                    min: 0,
                    max: 100,
                    ref: 'gap',
                },
            ],
            children: [
                {
                    id: 'Flex-1',
                    type: 'Text',
                    name: 'Flex布局',
                    props: {
                        innerText: '我是Flex中的默认文本',
                        color: '#000',
                    },
                    editableProps: [
                        {
                            label: '文字内容',
                            type: 'string',
                            value: '我是Flex中的默认文本',
                            ref: 'innerText',
                        },
                        {
                            label: '文字颜色',
                            type: 'color',
                            value: '#000',
                            ref: 'color',
                        },
                    ],
                },
            ],
        },
    ],
    house: [],
};
