interface PositionProps {
  top: number; // 上
  left: number; // 左
  width: number; // 宽
  height: number; // 高
}
/**
 * 通用组件属性
 */
interface BaseComponent {
  id: string | React.Key;
  name?: string; // 组件实例的名字 可以被编辑
  type: ComponentType;
  icon?: string; // 物料窗口组建的icon（可选，如undefined则用默认icon）
  positionType?: 'absolute' | 'relative' | 'unset'; // 不存在则默认为相对于画布的absolute
  position?: PositionProps; // 位置属性
  props?: PropsObject;
  editableProps: EditableProp[];
  [key: string]: any;
}

/**
 * 可嵌套组件
 */
interface NestableComponent extends BaseComponent {
  children: Component[];
}

/**
 * 左侧面板组件定义
 */
interface ComponentIdentifier {
  id: string;
  name: string;
  type: ComponentType;
  [key: string]: any;
}

type Component = BaseComponent | NestableComponent | ComponentIdentifier;
