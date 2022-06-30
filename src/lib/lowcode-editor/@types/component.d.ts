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
  name?: string;
  type: string;
  props?: any;
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
