import { getUUid } from '../utils';

export const position = {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
};

export const project: Project = {
    id: '7e6b9b87-28d8-43c0-a292-359f4a493b94',
    name: '测试工程',
    components: [
        {
            id: getUUid(),
            type: 'Text',
            name: '标题',
            positionType: 'absolute',
            position: {
                top: 10,
                left: 10,
            },
            props: {
                innerText: '我是中部预览面板',
                color: '#000',
                fontSize: 24, // TODO: add editableProps
            },
            editableProps: [
                {
                    label: '文字内容',
                    type: 'string',
                    value: '我是中部预览面板',
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
            id: getUUid(),
            type: 'Image',
            name: '图片',
            positionType: 'absolute',
            position: {
                top: 180,
                left: 200,
                width: 200,
                height: 200,
            },
            props: {
                src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg',
                zIndex: 10, // TODO: add editableProps
            },
            editableProps: [
                {
                    label: '图片上传',
                    type: 'upload',
                    value: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg',
                    ref: 'src',
                },
            ],
        },
        {
            id: getUUid(),
            type: 'Flex',
            name: 'Flex布局',
            positionType: 'absolute',
            position: {
                top: 400,
                left: 50,
            },
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
                    id: getUUid(),
                    type: 'Text',
                    name: '产品介绍',
                    props: {
                        innerText: '这是一个魔幻的产品',
                        color: '#000',
                    },
                    editableProps: [
                        {
                            label: '文字内容',
                            type: 'string',
                            value: '这是一个魔幻的产品',
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
                {
                    id: getUUid(),
                    type: 'Image',
                    name: '产品图片',
                    position: {
                        width: 100,
                        height: 100,
                    },
                    props: {
                        src: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg',
                    },
                    editableProps: [
                        {
                            label: '图片上传',
                            type: 'upload',
                            value: 'https://fastly.jsdelivr.net/gh/yusixian/imgBed/img/tx.jpg',
                            ref: 'src',
                        },
                    ],
                },
            ],
        },
    ],
};
