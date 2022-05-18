/*
 * @Author: cos
 * @Date: 2022-05-17 02:13:34
 * @LastEditTime: 2022-05-19 01:39:30
 * @LastEditors: cos
 * @Description: 文字组件
 * @FilePath: \MyRoom-Admin\src\lib\dynamic-components\Image\index.tsx
 */
import { Image } from 'antd';
import { CSSProperties } from 'styled-components';

export type ImageProps = {
    htmlProps: {
        src: string; // 图片url
    };
    styles?: CSSProperties;
};
export const MyImage = ({ styles, htmlProps }: ImageProps) => {
    const { src } = htmlProps;
    return <Image style={styles} src={src} />;
};
