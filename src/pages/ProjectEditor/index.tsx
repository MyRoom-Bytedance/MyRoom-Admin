import { Row, Col } from 'antd';
import LeftPane from 'lib/lowcode-editor/components/LeftPane';
import MidPane from 'lib/lowcode-editor/components/MidPane';
import { PropsEditor } from 'lib/lowcode-editor/components/PropsEditor';
import React from 'react';

const position: Prop[] = [
    {
        label: 'x',
        type: 'string',
        value: '',
        disabled: true,
    },
    {
        label: 'y',
        type: 'string',
        value: '',
        disabled: true,
    },
    {
        label: '宽',
        type: 'string',
        value: '100%',
    },
    {
        label: '高',
        type: 'string',
        value: 'auto',
    },
];

const project: Project = {
    id: '7e6b9b87-28d8-43c0-a292-359f4a493b94',
    name: '测试工程',
    components: [
        {
            id: '1',
            type: 'Text',
            name: '标题',
            position,
            props: [
                {
                    label: '文字内容',
                    type: 'string',
                    value: '我是一个标题',
                },
                {
                    label: '文字颜色',
                    type: 'color',
                    value: '#000',
                },
            ],
        },
        {
            id: '2',
            type: 'Image',
            name: '广告图片',
            position,
            props: [
                {
                    label: '图片上传',
                    type: 'upload',
                    value: 'http://rad9gvpiv.hd-bkt.clouddn.com/aede03222bfb78c3.jpg',
                },
            ],
        },
        {
            id: '3',
            type: 'Layout',
            name: 'Flex布局',
            position,
            props: [
                {
                    label: '摆放模式',
                    type: 'select',
                    value: '水平',
                    options: ['水平', '垂直'],
                },
                {
                    label: '间距',
                    type: 'range',
                    value: 6,
                    min: 0,
                    max: 100,
                },
            ],
            children: [
                {
                    id: '3-1',
                    type: 'Text',
                    name: '产品介绍',
                    position,
                    props: [
                        {
                            label: '文字内容',
                            type: 'string',
                            value: '这是一个魔幻的产品',
                        },
                        {
                            label: '文字颜色',
                            type: 'color',
                            value: '#000',
                        },
                    ],
                },
                {
                    id: '3-2',
                    type: 'Image',
                    name: '产品图片',
                    position,
                    props: [
                        {
                            label: '图片上传',
                            type: 'upload',
                            value: 'http://rad9gvpiv.hd-bkt.clouddn.com/59905ee7fc4957fe.jpg',
                        },
                    ],
                },
            ],
        },
    ],
};

export const ProjectEditor = React.memo(() => {
    console.log(project.components[0].props);

    return (
        <Row>
            <Col flex={2}>
                <h1>Project Material</h1>
                <LeftPane />
            </Col>
            <Col flex={2} style={{ backgroundColor: 'lightblue' }}>
                <h1>Project Previewer</h1>
                <MidPane />
            </Col>
            <Col flex={2}>
                <h1>Project Editor</h1>
                <PropsEditor position={position} props={project.components[1].props} />
            </Col>
        </Row>
    );
});
