/*
 * @Author: cos
 * @Date: 2022-05-13 22:13:11
 * @LastEditTime: 2022-05-13 22:15:16
 * @LastEditors: cos
 * @Description: 低代码通用工具
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\utils\index.ts
 */
/**
 * @description: 根据随机数生成全局唯一的uuid
 * @return {*}
 */
export const getUUid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};
