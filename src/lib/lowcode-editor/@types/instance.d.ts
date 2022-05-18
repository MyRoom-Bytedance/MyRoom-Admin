/*
 * @Author: cos
 * @Date: 2022-05-17 02:13:34
 * @LastEditTime: 2022-05-19 02:05:04
 * @LastEditors: cos
 * @Description: schema实例类型
 * @FilePath: \MyRoom-Admin\src\lib\lowcode-editor\@types\instance.d.ts
 */
// 1、使用createElement创建组件
// https://zh-hans.reactjs.org/docs/react-api.html#createelement
//
// React.createElement(
//   type,
//   [props],
//   [...children]
// )
// 2、使用远程组件
// https://juejin.cn/post/7040435885749305381

import { CSSProperties } from 'styled-components';

// 若使用远程组件则为 <DynamicComponent name='Text'>Remote Component</DynamicComponent>这样
interface InstanceType {
    id: string; // uuid 唯一
    name: string; // 实例名称  可编辑
    type: ComponentType; // 组件类型 也即远程组件的类型 一一对应，不可更改
    positionType?: 'absolute' | 'relative' | 'unset'; // 不存在则默认为相对于画布的absolute
    position: PositionProps; // 位置属性
    body: null | string; // 实例的body
    styles: CSSProperties; // 实例的样式
    [propName: string]: any; // 其他HTML属性
}
