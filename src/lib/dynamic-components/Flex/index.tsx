/*
 * @Author: cos
 * @Date: 2022-05-17 02:13:34
 * @LastEditTime: 2022-05-19 02:03:25
 * @LastEditors: cos
 * @Description: Flex布局组件
 * @FilePath: \MyRoom-Admin\src\lib\dynamic-components\Flex\index.tsx
 */
import styled, { CSSProperties } from 'styled-components';
import { BaseInstance } from '../@types/instance';

export type FlexHTMLProps = {
    wrap?: boolean; // 是否换行 默认false
    direction?: 'row' | 'column'; // 方向 默认row
    gap?: number; // 间隔    默认0
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'; // 对齐方式 默认start
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'; //  内容对齐方式 默认start
};
export type FlexProps = {
    htmlProps: FlexHTMLProps;
    styles?: CSSProperties;
    body?: string | BaseInstance[]; // 子节点 or其他
};

export const MyFlex = ({ styles, htmlProps, body }: FlexProps) => {
    const Flex = styled.section`
        display: flex;
        flex-direction: ${(props: any) => props.direction || 'row'};
        flex-wrap: ${(props: any) => (props.wrap ? 'wrap' : 'nowrap')};
        justify-content: ${(props: any) => props.justify || 'start'};
        align-items: ${(props: any) => props.align || 'start'};
        gap: ${(props: any) => `${props.gap}px` || `0px`};
    `;
    return (
        <Flex style={styles} {...htmlProps}>
            {typeof body === 'string' && body}
            {Array.isArray(body) &&
                body.map((item: any, index: number) => {
                    const { id, type, body, ...props } = item;
                    return (
                        <div>
                            我是子节点{id} 类型为{type} body为{body}
                        </div>
                    ); // 这里应该调用generateInstance生成实例然后根据实例调dyanamic-component
                })}
        </Flex>
    );
};
