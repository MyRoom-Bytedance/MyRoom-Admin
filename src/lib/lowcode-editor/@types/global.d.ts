/**
 * 编辑属性值 支持的类型
 */
type EditableValueType = 'string' | 'number' | 'upload' | 'select' | 'switch' | 'color' | 'time' | 'range';

/**
 * 组件类型
 */
type ComponentType = 'Text' | 'Video' | 'Image' | 'Audio' | 'HouseCard' | 'Layout';

/**
 * Props对象的定义
 */
type PropsObject = { [key: string]: any };
