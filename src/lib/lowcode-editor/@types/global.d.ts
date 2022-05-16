/**
 * 属性值 支持的类型
 */
type ValueType =
    | 'string'
    | 'number'
    | 'upload'
    | 'select'
    | 'switch'
    | 'color'
    | 'time'
    | 'range'
    | 'value'
    | 'src'
    | 'body';

/**
 * 组件类型
 */
type ComponentType = 'Text' | 'Video' | 'Image' | 'Audio' | 'HouseCard' | 'Layout';
