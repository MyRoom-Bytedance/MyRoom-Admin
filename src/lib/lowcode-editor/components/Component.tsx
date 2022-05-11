import React from "react"

type Props = {
    id: string | React.Key,
    name: string,
    children: React.Component[],
    props: Prop[],
}

export const Component = ({ props }: Props) => {

    const cssProps: React.CSSProperties = Object.assign({},
        ...props.filter(prop => prop.isCSSProp)
            .map(cssProp => ({ [cssProp.label]: cssProp.value })));

    return <div style={cssProps} />
    
}