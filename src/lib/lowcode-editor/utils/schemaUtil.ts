/*
 * @Author: cos
 * @Date: 2022-05-16 23:41:41
 * @LastEditTime: 2022-05-26 02:01:58
 * @LastEditors: cos
 * @Description: schema相关工具
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\utils\schemaUtil.ts
 */
import { DynamicComponent } from 'lib/dynamic-components';
import { BaseInstance } from 'lib/dynamic-components/@types/instance';
import { parseJSON } from '.';

export enum attrType {
    htmlProps = 1,
    cssProps,
    bodyProps,
}

export type attrMapType = {
    [key: string]: attrType;
};
// TODO: 后续改为从组件配置中读取
export const attrMap: attrMapType = {
    innerText: attrType.bodyProps, // 文字内容

    src: attrType.htmlProps, // 图片地址
    wrap: attrType.htmlProps, // flex-是否换行
    direction: attrType.htmlProps, // flex-摆放方向
    gap: attrType.htmlProps, // flex-间距
    justify: attrType.htmlProps, // flex-主轴摆放方向
    align: attrType.htmlProps, // flex-交叉轴摆放方向

    position: attrType.cssProps, // 定位方式 默认为绝对定位
    color: attrType.cssProps, // 文字颜色
    fontSize: attrType.cssProps, // 文字大小
    fontWeight: attrType.cssProps, // 文字粗细
    fontStyle: attrType.cssProps, // 文字风格
    zIndex: attrType.cssProps, // 层级
    top: attrType.cssProps, // 上边距
    left: attrType.cssProps, // 左边距
    width: attrType.cssProps, // 宽度
    height: attrType.cssProps, // 高度
    backgroundColor: attrType.cssProps, // 背景颜色
};
export const getInstanceFromSchema = (schema: Component | string): BaseInstance | null => {
    let component: any | null = null; // Component型 但不知道如何判断是否为NestableComponent
    if (typeof schema === 'string') {
        component = parseJSON(schema) as Component;
    } else component = schema;
    if (!component) return null;
    const { id, type, props, positionType = null, position = {} } = component;
    let res: any = { id, type, styles: {}, htmlProps: {}, body: null };
    if (positionType) res.styles.position = positionType;
    Object.assign(res.styles, position);
    // TODO: fix schema resolver
    Object.keys(props).forEach((key: string) => {
        const type: attrType = attrMap[key];
        console.log(type, key);
        if (type) {
            const value = props[key];
            if (type === attrType.htmlProps) {
                res.htmlProps[key] = value;
            } else if (type === attrType.cssProps) {
                res.styles[key] = value;
            } else if (type === attrType.bodyProps) {
                res.body = value;
            }
        }
    });
    if (component.children) {
        res.body = component.children.map((child: any) => {
            return getInstanceFromSchema(child);
        });
    }
    return res;
};
export const getInstanceListFromSchema = (schemas: Component[]): BaseInstance[] => {
    if (!schemas) return [];
    const list = [];
    console.log('schemas', schemas);
    for (let i = 0; i < schemas.length; ++i) {
        const ins = getInstanceFromSchema(schemas[i]);
        console.log('ins', ins);
        if (ins) list.push(ins);
    }
    console.log('list', list);
    return list;
};
