/*
 * @Author: cos
 * @Date: 2022-05-11 21:06:51
 * @LastEditTime: 2022-05-11 21:10:22
 * @LastEditors: cos
 * @Description: 测试用
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\LeftPane\mock.tsx
 */
export const position: Prop[] = [
    {
        label: 'top',
        name: 'top',
        type: 'string',
        value: '0',
        isCSSProps: true,
    },
    {
        label: 'left',
        name: 'left',
        type: 'string',
        value: '0',
        isCSSProps: true,
    },
    {
        label: '宽',
        name: 'width',
        type: 'string',
        value: 'auto',
        isCSSProps: true,
    },
    {
        label: '高',
        name: 'height',
        type: 'string',
        value: 'auto',
        isCSSProps: true,
    },
];
export const materialList: Component[] = [
    {
        id: 'text',
        type: 'Text',
        name: '文本',
        icon: 'icon-text',
        position,
        props: [
            // 物料的默认属性
            {
                label: '文字内容',
                name: 'value',
                type: 'string',
                value: '我是一个标题',
            },
            {
                label: '文字颜色',
                type: 'color',
                value: '#000',
                isCSSProps: true,
            },
        ],
    },
    {
        id: 'image',
        name: '图片',
        type: 'Image',
        icon: 'icon-image',
        position,
        props: [
            // 物料的默认属性
            {
                label: '图片url',
                name: 'src',
                type: 'string',
                value: 'https://cdn.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg',
            },
        ],
    },
];
