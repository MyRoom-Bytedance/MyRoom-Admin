import ProForm, { ProFormDigit, ProFormSelect, ProFormSwitch, ProFormText, ProFormTimePicker, ProFormUploadButton, ProFormSlider } from "@ant-design/pro-form";
import React, { FC } from "react";
import { Input } from "antd";
import { ImageChanger } from "./ImageChanger";

type Props = {
    position: Prop<ValueType>[],
    props: Prop<ValueType>[],
}

type RenderMap = { [key in ValueType]: (prop: Prop<key>) => JSX.Element };

const editorRenderMap: RenderMap = {
    string: (prop) =>
        <ProFormText
            key={prop.label}
            name={prop.label}
            label={prop.label}
            disabled={prop.disabled}
        />,
    number: (prop) =>
        <ProFormDigit
            key={prop.label}
            name={prop.label}
            label={prop.label}
            disabled={prop.disabled}
        />,
    upload: (prop) =>
        <ProForm.Item
            key={prop.label}
            name={prop.label}
            label={prop.label}
        >
            <ImageChanger />
        </ProForm.Item>,
    select: (prop) =>
        <ProFormSelect
            key={prop.label}
            name={prop.label}
            label={prop.label}
            options={prop.options}
            disabled={prop.disabled}
        />,
    switch: (prop) =>
        <ProFormSwitch
            key={prop.label}
            name={prop.label}
            label={prop.label}
            disabled={prop.disabled}
        />,
    color: (prop) =>
        <ProForm.Item
            key={prop.label}
            name={prop.label}
            label={prop.label}
        >
            <Input type='color' disabled={prop.disabled} />
        </ProForm.Item>,
    time: (prop) =>
        <ProFormTimePicker
            key={prop.label}
            name={prop.label}
            label={prop.label}
            disabled={prop.disabled}
        />,
    range: (prop) =>
        <ProFormSlider
            key={prop.label}
            name={prop.label}
            label={prop.label}
            disabled={prop.disabled}
            min={prop.min}
            max={prop.max}
        />,
}

const preCheck = (props: Prop<ValueType>[]) => {
    const ret = props.map(prop => prop.disabled ? ({
        type: 'string',
        label: prop.label,
        value: '不支持',
        disabled: true,
    } as Prop<'string'>) : prop);
    console.log(ret);
    return ret;
}

export const PropsEditor: FC<Props> = React.memo((componentProp) => {
    const position = preCheck(componentProp.position);
    const props = preCheck(componentProp.props);

    let posEditor = <>
        <h1>位置</h1>
        <ProForm
            submitter={false}
            layout="horizontal"
            initialValues={Object.assign({}, ...position.map(prop => ({ [prop.label]: prop.value })))}
        >
            {position.map(prop => editorRenderMap[prop.type](prop as any))}
        </ProForm>
    </>


    let propEditor = <>
        <h1>属性</h1>
        <ProForm
            submitter={false}
            layout="horizontal"
            initialValues={Object.assign({}, ...props.map(prop => ({ [prop.label]: prop.value })))}
        >
            {props.map(prop => editorRenderMap[prop.type](prop as any))}
        </ProForm>
    </>

    return <>
        {posEditor}
        {propEditor}
    </>
});