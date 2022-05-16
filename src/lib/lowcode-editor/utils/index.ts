/*
 * @Author: cos
 * @Date: 2022-05-13 22:13:11
 * @LastEditTime: 2022-05-17 03:33:57
 * @LastEditors: cos
 * @Description: 低代码通用工具
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\utils\index.ts
 */
/**
 * @description: 根据随机数生成全局唯一的uuid
 * @return {string} uuid 唯一
 */
export const getUUid = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
/**
 * @description:
 * @param json json字符串
 * @return {Object}
 */
export const parseJSON = (json: string): Object | null => {
    let obj = null;
    try {
        obj = JSON.parse(json);
        console.error('json:', obj);
        return obj;
    } catch (err) {
        console.error('wtf', err);
        return null;
    }
};
