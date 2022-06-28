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
      id: '1',
      type: 'Text',
      name: '标题',
      position,
      props: {
        innerText: '',
        color: '#000',
      },
      editableProps: [
        {
          label: '文字内容',
          type: 'string',
          value: '我是一个标题',
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
      id: '2',
      type: 'Image',
      name: '广告图片',
      position,
      props: {
        src: 'http://rad9gvpiv.hd-bkt.clouddn.com/aede03222bfb78c3.jpg',
      },
      editableProps: [
        {
          label: '图片上传',
          type: 'upload',
          value: 'http://rad9gvpiv.hd-bkt.clouddn.com/aede03222bfb78c3.jpg',
          ref: 'src',
        },
      ],
    },
    {
      id: '3',
      type: 'Layout',
      name: 'Flex布局',
      position,
      props: {
        'flex-direction': 'horizon',
        gap: 6,
      },
      editableProps: [
        {
          label: '摆放模式',
          type: 'select',
          value: '水平',
          options: ['水平', '垂直'],
          ref: 'flex-direction',
        },
        {
          label: '间距',
          type: 'range',
          value: 6,
          min: 0,
          max: 100,
          ref: 'gap',
        },
      ],
      children: [
        {
          id: '3-1',
          type: 'Text',
          name: '产品介绍',
          position,
          props: {
            innerText: '',
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
          id: '3-2',
          type: 'Image',
          name: '产品图片',
          position,
          props: {
            src: 'http://rad9gvpiv.hd-bkt.clouddn.com/59905ee7fc4957fe.jpg',
          },
          editableProps: [
            {
              label: '图片上传',
              type: 'upload',
              value: 'http://rad9gvpiv.hd-bkt.clouddn.com/59905ee7fc4957fe.jpg',
              ref: 'src',
            },
          ],
        },
      ],
    },
  ],
};
