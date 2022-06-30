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
    },
    {
      id: 'image',
      name: '图片',
      type: COMPONENT_TYPE.Image,
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
    }
  ],
};
