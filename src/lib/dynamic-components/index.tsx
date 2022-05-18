/*
 * @Author: cos
 * @Date: 2022-05-17 02:13:34
 * @LastEditTime: 2022-05-19 01:50:31
 * @LastEditors: cos
 * @Description: 渲染动态组件
 * @FilePath: \MyRoom-Admin\src\lib\dynamic-components\index.tsx
 */
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
