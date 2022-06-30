/*
 * @Author: cos
 * @Date: 2022-05-11 21:06:51
 * @LastEditTime: 2022-05-18 23:04:08
 * @LastEditors: TagBug 1242135295@qq.com
 * @Description: 测试用
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\components\LeftPane\mock.tsx
 */
export enum COMPONENT_TYPE {
  Text = 'Text',
  Image = 'Image',
  HouseCard = 'HouseCard',
  Background = 'BackGround',
  Text_Droped = 'Text_Droped',
  Image_Droped = 'Image_Droped',
  HouseCard_Droped = 'HouseCard_Droped',
};
 
export const materialList: {
  common: Component[];
  layout: Component[];
  house: Component[]; 
} = {
  common: [
    {
      id: 'text',
      name: '文本',
      type: COMPONENT_TYPE.Text,
      props: {
        innerText: '文本组件',
        color: '#000',
        fontSize: '14px',
        height: '50px',
        width: '100px',
        left: '0px',
        top: '0px',
        zIndex: '1',
      },
    },
    {
      id: 'image',
      name: '图片',
      type: COMPONENT_TYPE.Image,
      props: {
        src: 'https://cdn.jsdelivr.net/gh/ERUIHNIYHBKBNF/picapica@main/common/chinochann.3kjx7u46s9g0.jpg',
        height: '100px',
        width: '100px',
        left: '0px',
        top: '0px',
        zIndex: '1',
      },
    }
  ],
  layout: [
    {
      id: 'background',
      name: '背景',
      type: COMPONENT_TYPE.Background,
    }
  ],
  house: [
    {
      id: 'home',
      name: '房源',
      type: COMPONENT_TYPE.HouseCard,
      props: {
        height: '100px',
        width: '200px',
        left: '0px',
        top: '0px',
        zIndex: '1',
        homeId: null,
      }
    }
  ],
};

export type TEXT_PROPS = {
  innerText: string;
  color: string;
  fontSize: string;
  fontWeight: string;
  height: string;
  width: string;
  left: string;
  top: string;
  zIndex: string;
};

export type IMAGE_PROPS = {
  src: string;
  height: string;
  width: string;
  left: string;
  top: string;
  zIndex: string;
};

export type HOUSE_PROPS = {
  height: string;
  width: string;
  left: string;
  top: string;
  zIndex: string;
  homeId: number | null;
};