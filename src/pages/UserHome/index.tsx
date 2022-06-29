import React, { createRef } from 'react';
import { UserUpdate } from 'service/user';
import { Form, Input, Button, message } from 'antd';
import type { FormInstance } from 'antd/es/form';
const FormItem = Form.Item;

export const UserHome = React.memo(() => {
  const formRef = createRef<FormInstance>();


  return (
    <div>
      <h1 style={{
        fontSize: '25px',
        fontWeight: 'bold',
      }}>个人信息修改</h1>
      <Form
        ref={formRef}
        style={{
          width: '50%',
        }}
      >
        <FormItem
          label="原密码"
          name="pre_password"
          rules={[{ required: true, message: '请输入原密码' }]}
        >
          <Input type="password" />
        </FormItem>
        <FormItem
          label="新密码"
          name="new_password"
          rules={[{ required: true, message: '请输入新密码' }]}
        >
          <Input type="password" />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            style={{ marginLeft: 60, }}
            onClick={async () => {
              const values = await formRef.current?.validateFields();
              await UserUpdate(values);
              message.success('操作成功');
            }}
          >
            提交
          </Button>
        </FormItem>
      </Form>
    </div>
  );
});
