/**
 * 通用属性
 */
interface BaseProp<T extends ValueType> {
    type: T;
    label?: string; // 属性编辑面板上显示的标签 没有则直接显示type
    // name?: string; // 属性名
    isCSSProps?: boolean; // 是否是css属性 还有一个特殊props是body类型。
    disabled?: boolean; // 是否禁用
}

/**
 * div中间的内容 也即innerHTML
 * 如文本内容 <div style={...} {elseprops}>{value}</div>
 */
//
interface BodyProp extends BaseProp<'body'> {
    value: string;
}

/**
 * CSS属性
 * <div style={...props}></div>
 * 注意位置属性单独区分开了。
 */
interface ColorProp extends BaseProp<'color'> {
    value: string;
}

/**
 * HTML属性
 * <input value={props} />
 */
// input、textarea、select、upload、switch、color、time、range……等所需的value属性
interface ValueProp extends BaseProp<'value'> {
    value: string | number | boolean;
}
// img的src属性
interface SrcProp extends BaseProp<'src'> {
    value: string; // TODO: Upload属性
}

/**
 * 不同类型组件独有的属性
 */
interface SelectProp extends BaseProp<'select'> {
    value: string;
    options: string[];
}

interface StringProp extends BaseProp<'string'> {
    value: string;
}

interface NumberProp extends BaseProp<'number'> {
    value: number;
}

interface UploadProp extends BaseProp<'upload'> {
    value: unknown; // TODO: Upload属性
}

interface SwitchProp extends BaseProp<'switch'> {
    value: boolean;
}

interface TimeProp extends BaseProp<'time'> {
    value: string;
}

interface RangeProp extends BaseProp<'range'> {
    value: number;
    min: number;
    max: number;
}

type TypeProp = {
    // CSS属性
    color: ColorProp;
    // HTML属性
    value: ValueProp;
    src: SrcProp;
    // body属性
    body: BodyProp;
    // 不同类型组件独有的属性
    select: SelectProp;
    string: StringProp;
    number: NumberProp;
    upload: UploadProp;
    switch: SwitchProp;
    time: TimeProp;
    range: RangeProp;
};

type Prop<T extends ValueType = ValueType> = TypeProp[T];
