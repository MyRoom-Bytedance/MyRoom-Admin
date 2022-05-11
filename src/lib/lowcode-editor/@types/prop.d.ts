/**
 * 通用属性
 */
interface BaseProp<T extends ValueType> {
    type: T,
    label: string,
    disabled?: boolean,
}

/**
 * 不同类型组件独有的属性
 */
interface SelectProp extends BaseProp<'select'> {
    value: string,
    options: string[],
}

interface StringProp extends BaseProp<'string'> {
    value: string,
}

interface NumberProp extends BaseProp<'number'> {
    value: number,
}

interface UploadProp extends BaseProp<'upload'> {
    value: unknown,  // TODO: Upload属性
}

interface SwitchProp extends BaseProp<'switch'> {
    value: boolean,
}

interface ColorProp extends BaseProp<'color'> {
    value: string
}

interface TimeProp extends BaseProp<'time'> {
    value: string,
}

interface RangeProp extends BaseProp<'range'> {
    value: number,
    min: number,
    max: number,
}

type TypeProp = {
    'select': SelectProp,
    'string': StringProp,
    'number': NumberProp,
    'upload': UploadProp,
    'switch': SwitchProp,
    'color': ColorProp,
    'time': TimeProp,
    'range': RangeProp,
};

type Prop<T extends ValueType = ValueType> = TypeProp[T];