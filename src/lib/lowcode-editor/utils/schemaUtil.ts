/*
 * @Author: cos
 * @Date: 2022-05-16 23:41:41
 * @LastEditTime: 2022-05-18 23:11:26
 * @LastEditors: TagBug 1242135295@qq.com
 * @Description: schema相关工具
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\utils\schemaUtil.ts
 */
import { parseJSON } from '.';

export const getInstanceFromSchema = (schema: Component | string): Object | null => {
    let component: Component | null = null; //
    if (typeof schema === 'string') {
        component = parseJSON(schema) as Component;
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
