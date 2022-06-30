/**
 * 通用属性
 */
interface BaseProp<T extends ValueType> {
  type: T;
  ref: string; // 编辑的prop的引用
  label?: string; // 属性编辑面板上显示的标签 没有则直接显示type
  disabled?: boolean; // 是否禁用
  valueAdaptor?: (value: TypeProp[T]['value']) => any; // 将可编辑属性值转换为特定格式prop的适配器函数
}

/**
 * 不同类型Prop独有的属性
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

interface ColorProp extends BaseProp<'color'> {
  value: string;
}

type TypeProp = {
  // 不同类型组件独有的属性
  color: ColorProp;
  select: SelectProp;
  string: StringProp;
  number: NumberProp;
  upload: UploadProp;
  switch: SwitchProp;
  time: TimeProp;
  range: RangeProp;
};

type EditableProp<T extends EditableValueType = EditableValueType> = TypeProp[T];
