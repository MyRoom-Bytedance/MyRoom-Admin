/*
 * @Author: cos
 * @Date: 2022-05-17 02:13:34
 * @LastEditTime: 2022-05-19 01:39:41
 * @LastEditors: cos
 * @Description: 文字组件
 * @FilePath: \MyRoom-Admin\src\lib\dynamic-components\Text\index.tsx
 */
import { Typography } from 'antd';
import { CSSProperties } from 'styled-components';

const { Text } = Typography;
export type TextProps = {
    styles?: CSSProperties;
    body: string; // 文本内容
};
export const MyText = ({ styles, body }: TextProps) => {
    return <Text style={styles}>{body}</Text>;
};
