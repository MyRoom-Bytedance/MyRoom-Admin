import ProForm, {
  ProFormDigit,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTimePicker,
  ProFormSlider,
} from '@ant-design/pro-form';
import React, { FC } from 'react';
import { FieldData } from 'rc-field-form/lib/interface';
import { Input } from 'antd';
import { ImageChanger } from './ImageChanger';

type Props = {
  position: { [key: string]: number };
  editableProps: EditableProp[];
  props: PropsObject;
};

type RenderMap = { [key in EditableValueType]: (prop: EditableProp<key>) => JSX.Element };

const editorRenderMap: RenderMap = {
  string: (prop) => (
    <ProFormText
      key={prop.label}
      name={prop.ref}
      label={prop.label}
      disabled={prop.disabled}
      initialValue={prop.value}
    />
  ),
  number: (prop) => (
    <ProFormDigit
      key={prop.label}
      name={prop.ref}
      label={prop.label}
      disabled={prop.disabled}
      initialValue={prop.value}
    />
  ),
  upload: (prop) => (
    <ProForm.Item key={prop.label} name={prop.ref} label={prop.label} initialValue={prop.value}>
      <ImageChanger />
    </ProForm.Item>
  ),
  select: (prop) => (
    <ProFormSelect
      key={prop.label}
      name={prop.ref}
      label={prop.label}
      options={prop.options}
      disabled={prop.disabled}
      initialValue={prop.value}
    />
  ),
  switch: (prop) => (
    <ProFormSwitch
      key={prop.label}
      name={prop.ref}
      label={prop.label}
      disabled={prop.disabled}
      initialValue={prop.value}
    />
  ),
  color: (prop) => (
    <ProForm.Item key={prop.label} name={prop.ref} label={prop.label} initialValue={prop.value}>
      <Input type="color" disabled={prop.disabled} />
    </ProForm.Item>
  ),
  time: (prop) => (
    <ProFormTimePicker
      key={prop.label}
      name={prop.ref}
      label={prop.label}
      disabled={prop.disabled}
      initialValue={prop.value}
    />
  ),
  range: (prop) => (
    <ProFormSlider
      key={prop.label}
      name={prop.ref}
      label={prop.label}
      disabled={prop.disabled}
      min={prop.min}
      max={prop.max}
      initialValue={prop.value}
    />
  ),
};

/**
 * 前置数据处理
 */
const preCheck = (props: EditableProp<EditableValueType>[], adaptors: { [key: string]: Function }) => {
  // 如果prop.disabled为true，则让该属性不可编辑
  const ret = props.map((prop) => {
    if (prop.valueAdaptor) adaptors[prop.ref] = prop.valueAdaptor;
    return prop.disabled
      ? ({
          type: 'string',
          label: prop.label,
          value: '不支持',
          disabled: true,
        } as EditableProp<'string'>)
      : prop;
  });
  // console.log(ret);
  return ret;
};

export const PropsEditor: FC<Props> = React.memo((componentProp) => {
  const { position, props } = componentProp;
  const adaptors: { [key: string]: Function } = {};

  const positionProps = preCheck(
    Object.keys(componentProp.position).map((key) => ({
      label: key,
      type: 'number',
      value: componentProp.position[key],
      ref: key,
    })),
    adaptors
  );
  const editableProps = preCheck(componentProp.editableProps, adaptors);

  let posEditor = (
    <>
      <h1>位置</h1>
      <ProForm submitter={false} layout="horizontal" onFieldsChange={onFieldsChange.bind(null, position, adaptors)}>
        {positionProps.map((prop) => editorRenderMap[prop.type](prop as any))}
      </ProForm>
    </>
  );

  let propEditor = (
    <>
      <h1>属性</h1>
      <ProForm submitter={false} layout="horizontal" onFieldsChange={onFieldsChange.bind(null, props, adaptors)}>
        {editableProps.map((prop) => editorRenderMap[prop.type](prop as any))}
      </ProForm>
    </>
  );

  return (
    <>
      {posEditor}
      {propEditor}
    </>
  );
});

/**
 * 表单项value更改时，同步更改prop[ref]的值
 */
const onFieldsChange = (props: PropsObject, adaptors: { [key: string]: Function }, fields: FieldData[]) => {
  fields.forEach((field) => {
    if (!field.errors?.length) {
      const ref = field.name.toString();
      console.log(
        `prop '${field.name}' changed from '${props[ref]}' to '${
          adaptors[ref] ? adaptors[ref](field.value) : field.value
        }'${adaptors[ref] ? ' via adaptor' : ''}`
      );
      props[ref] = adaptors[ref] ? adaptors[ref](field.value) : field.value;
    }
  });
};
