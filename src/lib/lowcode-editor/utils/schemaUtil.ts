/*
 * @Author: cos
 * @Date: 2022-05-16 23:41:41
 * @LastEditTime: 2022-05-19 01:08:43
 * @LastEditors: cos
 * @Description: schema相关工具
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\utils\schemaUtil.ts
 */
import { parseJSON } from '.';

export const getInstanceFromSchema = (schema: any | string): Object | null => {
    let component: any | null = null; //
    if (typeof schema === 'string') {
        component = parseJSON(schema) as any;
    }
    if (!component) return null;

    let res: any = { styles: {}, body: null };
    const { props, ...args } = component;
    res = Object.assign(res, args);
    // TODO: fix schema resolver
    /* for (const idx in props) {
        const { type, value, isCSSProps = false } = props[idx];
        if (type === 'body') {
            res.body = value;
        } else if (isCSSProps) {
            res.styles[type] = value;
        } else {
            res = Object.assign(res, { [type]: value });
        }
    } */
    return res;
};
