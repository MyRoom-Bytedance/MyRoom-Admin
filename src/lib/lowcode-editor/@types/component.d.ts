/**
 * 通用组件属性
 */
interface BaseComponent {
    id: string | React.Key;
    name: string; // 组件实例的名字
    type: ComponentType;
    icon?: string; // 物料窗口组建的icon（可选，如undefined则用默认icon）
    positionType?: 'absolute' | 'relative' | 'unset';
    position: Prop[];
    props: Prop[];
}

/**
 * 可嵌套组件
 */
interface NestableComponent extends BaseComponent {
    children: Component[];
}

type Component = BaseComponent | NestableComponent;
