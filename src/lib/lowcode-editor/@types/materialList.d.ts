/*
 * @Author: cos
 * @Date: 2022-05-30 22:01:57
 * @LastEditTime: 2022-05-30 22:21:13
 * @LastEditors: cos
 * @Description: 物料类型定义
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\@types\materialList.d.ts
 */
type MaterialClassName = '通用' | '布局' | '房源'; // 物料分类 注意与类型区分！
type MaterialClass = 'common' | 'layout' | 'house'; // 物料分类 注意与类型区分！
type DefaulMaterialListType = {
    common: Component[];
    layout: Component[];
    house?: Component[];
};
type DefaultMenuListType = {
    label: MaterialClassName;
    key: MaterialClass;
}[];
// use Like
// materialList['common'].map(....)
