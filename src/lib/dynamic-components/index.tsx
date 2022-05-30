/*
 * @Author: cos
 * @Date: 2022-05-17 02:13:34
 * @LastEditTime: 2022-05-30 22:00:52
 * @LastEditors: cos
 * @Description: 渲染动态组件
 * @FilePath: \MyRoom-Admin\src\lib\dynamic-components\index.tsx
 */
import React from 'react';
import { BaseInstance } from './@types/instance';
import { renderFlexProps, renderImageProps, renderTextProps } from './@types/renderMap';
import { MyFlex } from './Flex';
import { MyImage } from './Image';
import { MyText } from './Text';

const renderMap: any = {
    Text: ({ id, ...props }: renderTextProps) => {
        return <MyText key={id} {...props} />;
    },
    Image: ({ id, ...props }: renderImageProps) => {
        return <MyImage key={id} {...props} />;
    },
    Flex: ({ id, ...props }: renderFlexProps) => {
        return <MyFlex key={id} {...props} />;
    },
};
export const DynamicComponent = ({ type, ...props }: BaseInstance) => {
    return renderMap[type]({ ...props });
};
/**
 * use Like
 * <DynamicComponent
    id={getUUid()}
    type={'Text'}
    body={'中部预览面板'}
    styles={{ color: 'red', fontSize: 24, position: 'absolute', top: 10, left: 10 }}
 * />;
*/
