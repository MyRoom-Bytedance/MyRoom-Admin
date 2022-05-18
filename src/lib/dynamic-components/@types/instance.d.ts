/*
 * @Author: cos
 * @Date: 2022-05-19 00:44:51
 * @LastEditTime: 2022-05-19 01:41:59
 * @LastEditors: cos
 * @Description: Schema生成的实例类型 通过它调用动态组件
 * @FilePath: \MyRoom-Admin\src\lib\dynamic-components\@types\instance.d.ts
 */
import { CSSProperties } from 'styled-components';

//eg: <DynamicComponent type='Text' key={id} />
type BaseInstance = {
    id: string; // uuid 唯一
    type: ComponentType; // 组件类型 也即远程组件的类型 一一对应，不可更改
    body?: string | BaseInstance[]; // 实例的body 可以是组件
    styles?: CSSProperties; // 实例的样式
    htmlProps?: {
        // 实例的html属性
        [propName: string]: any; // eg: src:'xxxxxx'
    };
};
